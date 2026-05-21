import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { baseSepolia } from "@reown/appkit/networks";

// ─── Configuration ───
const projectId = import.meta.env.VITE_REOWN_PROJECT_ID || "";

if (!projectId) {
  console.warn(
    "⚠️ Missing VITE_REOWN_PROJECT_ID in .env — wallet connect will not work.\n" +
      "   Get a free project ID at: https://cloud.reown.com"
  );
}

// ─── Initialize AppKit ───
const ethersAdapter = new EthersAdapter();

const appKit = createAppKit({
  adapters: [ethersAdapter],
  networks: [baseSepolia],
  defaultNetwork: baseSepolia,
  projectId,
  metadata: {
    name: "Gasless Event Badge Claimer",
    description: "Mint personalized NFT badges without ETH gas fees",
    url: typeof window !== "undefined" ? window.location.origin : "https://localhost:5173",
    icons: ["https://i.imgur.com/ZKwMBd4.png"],
  },
  features: {
    analytics: false,
  },
  themeMode: "dark",
  themeVariables: {
    "--w3m-color-mix": "#0a0a1a",
    "--w3m-color-mix-strength": 40,
    "--w3m-accent": "#00d4ff",
    "--w3m-border-radius-master": "2px",
  },
});

export default appKit;
