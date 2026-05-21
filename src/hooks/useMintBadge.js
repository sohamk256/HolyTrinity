import { useState, useCallback } from "react";
import { useAppKitProvider } from "@reown/appkit/react";
import { BrowserProvider, Interface } from "ethers";
import { useUGFModal } from "@tychilabs/react-ugf";
import { CONTRACT_ADDRESS, CONTRACT_ABI, CHAIN_ID } from "../config/contract";
import toast from "react-hot-toast";

/**
 * Custom hook that handles the full badge minting flow via UGF.
 *
 * Flow:
 *   1. Get ethers signer from the connected wallet
 *   2. Encode the claimBadge(name) call data
 *   3. Open the UGF modal — user pays with Mock USD
 *   4. UGF sponsors the gas and executes the tx on Base Sepolia
 *   5. Return the result (tx hash, etc.)
 */
export function useMintBadge() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { walletProvider } = useAppKitProvider("eip155");
  const { openUGF } = useUGFModal();

  const mintBadge = useCallback(
    async (name) => {
      if (!walletProvider) {
        throw new Error("Wallet not connected");
      }

      if (!name || name.trim().length === 0) {
        throw new Error("Please enter your name");
      }

      if (name.trim().length > 50) {
        throw new Error("Name must be 50 characters or less");
      }

      setIsLoading(true);
      setError(null);

      try {
        // 1. Get signer from AppKit wallet provider
        const provider = new BrowserProvider(walletProvider);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();

        toast.loading("Preparing gasless transaction...", { id: "mint" });

        // 2. Encode the contract call
        const iface = new Interface(CONTRACT_ABI);
        const data = iface.encodeFunctionData("claimBadge", [name.trim()]);

        // 3. Open UGF modal for gasless execution
        //    User pays with Mock USD → UGF sponsors gas on Base Sepolia
        const result = await openUGF({
          signer,
          tx: {
            to: CONTRACT_ADDRESS,
            data,
            value: 0n,
          },
          destChainId: CHAIN_ID,
        });

        toast.success("🎉 Badge minted successfully!", { id: "mint" });

        setIsLoading(false);
        return {
          txHash: result?.transactionHash || result?.hash || null,
          name: name.trim(),
          address: userAddress,
          timestamp: new Date().toISOString(),
        };
      } catch (err) {
        const message =
          err?.reason || err?.message || "Minting failed. Please try again.";

        // Don't show error toast if user rejected/cancelled
        if (
          !message.toLowerCase().includes("rejected") &&
          !message.toLowerCase().includes("cancelled") &&
          !message.toLowerCase().includes("user denied")
        ) {
          toast.error(message, { id: "mint" });
        } else {
          toast.dismiss("mint");
        }

        setError(message);
        setIsLoading(false);
        throw err;
      }
    },
    [walletProvider, openUGF]
  );

  const clearError = useCallback(() => setError(null), []);

  return { mintBadge, isLoading, error, clearError };
}
