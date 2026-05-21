// ─── Contract Configuration ───
// Update CONTRACT_ADDRESS after deploying your EventBadge contract

export const CONTRACT_ADDRESS =
  import.meta.env.VITE_CONTRACT_ADDRESS || "0x0000000000000000000000000000000000000000";

// Base Sepolia Chain ID
export const CHAIN_ID = "84532";

// BaseScan explorer URL
export const EXPLORER_URL = "https://sepolia.basescan.org";

// ─── Minimal ABI for the functions we call from the frontend ───
export const CONTRACT_ABI = [
  {
    inputs: [{ internalType: "string", name: "name", type: "string" }],
    name: "claimBadge",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalMinted",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getBadgeName",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" },
      { indexed: false, internalType: "string", name: "name", type: "string" },
    ],
    name: "BadgeClaimed",
    type: "event",
  },
];
