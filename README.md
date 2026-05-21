# 🎫 Gasless Event Badge Claimer

> Mint personalized NFT event badges **without ETH gas fees** — powered by UGF on Base Sepolia.

A hackathon-ready dApp that lets users connect their wallet, enter their name, and mint a fully on-chain SVG NFT badge. Gas is paid via Mock USD through the Universal Gas Framework (UGF), so users **never need ETH**.

---

## ✨ Features

- 🔥 **Gasless minting** — No ETH required, gas paid via Mock USD (UGF)
- 🎨 **On-chain SVG art** — Badge images generated entirely on-chain, no IPFS
- ⚡ **Base Sepolia L2** — Fast, cheap transactions
- 🖥️ **Modern dark UI** — Glassmorphism, particles, Framer Motion animations
- 🦊 **MetaMask support** — Connect via Reown AppKit (WalletConnect)
- 📱 **Responsive** — Works on desktop and mobile
- 🚀 **Vercel-ready** — Deploy in one click

---

## 📁 Project Structure

```
Hack-With-Mumbai/
├── contracts/                  # Smart contract (Hardhat)
│   ├── EventBadge.sol          # ERC721 NFT contract
│   ├── hardhat.config.js       # Hardhat configuration
│   ├── package.json            # Contract dependencies
│   ├── .env.example            # Contract env template
│   └── scripts/
│       └── deploy.js           # Deployment script
├── public/
│   └── badge.svg               # Favicon
├── src/
│   ├── main.jsx                # Entry point (UGFProvider)
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles + Tailwind
│   ├── config/
│   │   ├── appkit.js           # Reown AppKit setup
│   │   └── contract.js         # Contract ABI & address
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── Hero.jsx            # Landing page hero
│   │   ├── ClaimBadge.jsx      # Badge claim form
│   │   ├── BadgePreview.jsx    # Live SVG preview
│   │   ├── MintSuccess.jsx     # Success screen + confetti
│   │   ├── ParticleBackground.jsx  # Animated background
│   │   └── Footer.jsx          # Footer
│   └── hooks/
│       └── useMintBadge.js     # UGF gasless mint hook
├── .env.example                # Frontend env template
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

## 🚀 Quick Start (Step by Step)

### Prerequisites

- **Node.js** 18+ installed ([download](https://nodejs.org))
- **MetaMask** browser extension ([install](https://metamask.io))
- **Git** (optional)

---

### Step 1: Clone / Download the Project

```bash
cd d:\Hack-With-Mumbai
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

```bash
copy .env.example .env
```

Edit `.env` and fill in:

```env
VITE_REOWN_PROJECT_ID=your_project_id
VITE_CONTRACT_ADDRESS=0xYourContractAddress
VITE_RPC_URL=https://sepolia.base.org
```

#### Get a Reown Project ID (free):
1. Go to [https://cloud.reown.com](https://cloud.reown.com)
2. Sign up / log in
3. Create a new project
4. Copy the **Project ID**

### Step 4: Deploy the Smart Contract

```bash
cd contracts
npm install
copy .env.example .env
```

Edit `contracts/.env`:
```env
PRIVATE_KEY=your_wallet_private_key
RPC_URL=https://sepolia.base.org
```

Deploy:
```bash
npm run deploy
```

Copy the deployed contract address and paste it into the root `.env` as `VITE_CONTRACT_ADDRESS`.

### Step 5: Run the Frontend

```bash
cd ..
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser 🎉

---

## 🦊 MetaMask Setup Guide

### Add Base Sepolia to MetaMask

1. Open MetaMask → Settings → Networks → Add Network
2. Fill in:

| Field            | Value                          |
|------------------|--------------------------------|
| Network Name     | Base Sepolia                   |
| RPC URL          | `https://sepolia.base.org`     |
| Chain ID         | `84532`                        |
| Currency Symbol  | `ETH`                          |
| Block Explorer   | `https://sepolia.basescan.org` |

3. Click **Save**

### Get Testnet ETH

You need a tiny amount of ETH for contract deployment (NOT for minting — that's gasless!):

- [Base Faucet](https://www.base.org/faucet)
- [Alchemy Faucet](https://www.alchemy.com/faucets/base-sepolia)
- [QuickNode Faucet](https://faucet.quicknode.com/base/sepolia)

---

## 🔧 Smart Contract Details

The `EventBadge` contract is a simple ERC721 that:

- Mints personalized badges with `claimBadge(name)`
- Generates **on-chain SVG art** (no IPFS dependency)
- Stores attendee names on-chain
- Emits `BadgeClaimed` events

### Alternative: Deploy via Remix IDE (Fastest)

1. Go to [https://remix.ethereum.org](https://remix.ethereum.org)
2. Create a new file `EventBadge.sol`
3. Paste the contract code from `contracts/EventBadge.sol`
4. In the Solidity Compiler tab:
   - Set compiler to `0.8.24`
   - Enable optimizer (200 runs)
   - Click **Compile**
5. In the Deploy tab:
   - Environment: **Injected Provider (MetaMask)**
   - Make sure MetaMask is on **Base Sepolia**
   - Click **Deploy**
6. Copy the deployed address → paste in `.env`

---

## ⛽ UGF Integration (How Gasless Works)

The Universal Gas Framework (UGF) abstracts away gas fees:

1. **User clicks "Claim Badge"**
2. **Frontend encodes** the `claimBadge(name)` call
3. **UGF Modal opens** — user selects Mock USD to pay
4. **UGF settles** the gas payment in Mock USD
5. **Transaction executes** on Base Sepolia
6. **NFT minted** to the user's wallet — zero ETH spent

Key code in `src/hooks/useMintBadge.js`:
```javascript
const result = await openUGF({
  signer,
  tx: {
    to: CONTRACT_ADDRESS,
    data: encodedCallData,
    value: 0n,
  },
  destChainId: "84532", // Base Sepolia
});
```

---

## 🌐 Deploy to Vercel

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option B: GitHub + Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Set environment variables:
   - `VITE_REOWN_PROJECT_ID`
   - `VITE_CONTRACT_ADDRESS`
   - `VITE_RPC_URL`
5. Framework preset: **Vite**
6. Click **Deploy**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| ethers.js v6 | Blockchain interaction |
| Solidity 0.8.24 | Smart contract |
| OpenZeppelin v5 | ERC721 base |
| @reown/appkit | Wallet connection |
| @tychilabs/react-ugf | Gasless transactions |
| Base Sepolia | L2 testnet |

---

## 📋 NFT Metadata Example

Each badge generates fully on-chain metadata:

```json
{
  "name": "Gasless Event Badge #0",
  "description": "Personalized gasless event badge for Alice. Minted without ETH gas fees on Base Sepolia via UGF.",
  "image": "data:image/svg+xml;base64,...",
  "attributes": [
    { "trait_type": "Attendee", "value": "Alice" },
    { "trait_type": "Badge ID", "value": "0" }
  ]
}
```

---

## 🐛 Troubleshooting

| Issue | Fix |
|-------|-----|
| "Wallet not connected" | Click the connect button and approve in MetaMask |
| "Name cannot be empty" | Enter your name before claiming |
| "Missing VITE_REOWN_PROJECT_ID" | Get a free project ID at cloud.reown.com |
| UGF modal doesn't open | Ensure `@tychilabs/ugf-testnet-js` is installed |
| Transaction fails | Check Base Sepolia is selected in MetaMask |
| Build fails on Vercel | Ensure all env vars are set in Vercel dashboard |

---

## 📝 Commands Reference

```bash
# Frontend
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build

# Contract
cd contracts
npm install          # Install Hardhat + OpenZeppelin
npm run compile      # Compile contract
npm run deploy       # Deploy to Base Sepolia
```

---

## 📄 License

MIT — Built for hackathon demo purposes.

---

**Built with ❤️ for Hack With Mumbai**