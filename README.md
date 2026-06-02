# 🚀 Gasless Badge

> Mint personalized NFT event badges completely gas-free using UGF on Base Sepolia.

Gasless Badge is a modern Web3 event badge platform that allows users to mint fully on-chain NFT badges without needing ETH for gas fees. Built with React, Solidity, UGF, and Base Sepolia, the platform delivers a seamless onboarding experience for both crypto-native and non-crypto users.

<p align="center">
  <img src="https://img.shields.io/badge/Base-Sepolia-0052FF?style=for-the-badge&logo=coinbase&logoColor=white" />
  <img src="https://img.shields.io/badge/UGF-Gasless-FF6B35?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Solidity-0.8.24-363636?style=for-the-badge&logo=solidity" />
  <img src="https://img.shields.io/badge/ERC721-NFT-22C55E?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-tech-stack">Tech Stack</a> ·
  <a href="#-project-structure">Project Structure</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-ugf-integration">UGF Integration</a>
</p>

---

# 🌐 Live Demo

🔗 **Deployed App Link:** `https://holy-trinity-sandy.vercel.app/`  
🔗 **UGF SCAN:** `https://universalgasframework.com/docs/overview`  
🔗 **Network:** Base Sepolia Testnet  

> ⚠️ This project runs entirely on Base Sepolia testnet. Users mint NFT badges without ETH using Universal Gas Framework (UGF).

---

# 🎯 Problem Statement

Most Web3 applications still suffer from one major issue:

```txt
New users cannot easily interact with blockchain apps.
```

Traditional onboarding requires:

- Setting up MetaMask
- Buying ETH
- Understanding gas fees
- Switching blockchain networks
- Handling failed transactions

For events, hackathons, and onboarding campaigns, this creates unnecessary friction.

---

# 💡 Solution

Gasless Badge solves this by enabling:

- ✅ Gasless NFT minting
- ✅ Zero ETH requirement
- ✅ Simple wallet onboarding
- ✅ Fully on-chain NFT metadata
- ✅ Beautiful personalized event badges
- ✅ Modern Web2-like UX for Web3 users

Users simply:

```txt
Connect Wallet
      ↓
Enter Name
      ↓
Click "Claim Badge"
      ↓
Approve Mock USD via UGF
      ↓
NFT Badge Minted Instantly
```

---

# ✨ Features

## 🎨 NFT Features

- Personalized NFT badges
- Fully on-chain SVG artwork
- Dynamic NFT metadata generation
- ERC721 standard implementation
- Real-time badge preview
- Event-ready minting flow

## ⚡ Blockchain Features

- Gasless transactions using UGF
- Base Sepolia integration
- Mock USD gas payments
- Secure ethers.js interactions
- Reown AppKit wallet support

## 🖥️ UI/UX Features

- Futuristic glassmorphism design
- Particle animated background
- Smooth Framer Motion animations
- Responsive mobile-first interface
- Dark mode aesthetics
- Animated mint success screen

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Icons | Icons |
| React Hot Toast | Notifications |

## Blockchain

| Technology | Purpose |
|---|---|
| Solidity 0.8.24 | Smart contract language |
| OpenZeppelin | ERC721 implementation |
| ethers.js v6 | Blockchain interaction |
| Base Sepolia | Testnet blockchain |

## Wallet & Gas

| Technology | Purpose |
|---|---|
| Reown AppKit | Wallet connection |
| Universal Gas Framework (UGF) | Gas abstraction |
| Mock USD | Gas payment currency |

---

# 📁 Project Structure

```txt
Gasless-Badge/
│
├── 📁 contracts/
│   ├── EventBadge.sol
│   ├── hardhat.config.js
│   ├── package.json
│   ├── .env.example
│   └── 📁 scripts/
│       └── deploy.js
│
├── 📁 public/
│   └── badge.svg
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ClaimBadge.jsx
│   │   ├── BadgePreview.jsx
│   │   ├── MintSuccess.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── Footer.jsx
│   │
│   ├── 📁 config/
│   │   ├── appkit.js
│   │   └── contract.js
│   │
│   ├── 📁 hooks/
│   │   └── useMintBadge.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js v18+
- npm or yarn
- MetaMask browser extension
- Base Sepolia configured

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/gasless-badge.git
cd gasless-badge
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

```bash
copy .env.example .env
```

```env
VITE_REOWN_PROJECT_ID=your_project_id
VITE_CONTRACT_ADDRESS=0xYourContractAddress
VITE_RPC_URL=https://sepolia.base.org
```

---

## 4️⃣ Deploy Smart Contract

```bash
cd contracts
npm install
```

```env
PRIVATE_KEY=your_private_key
RPC_URL=https://sepolia.base.org
```

Deploy:

```bash
npm run deploy
```

---

## 5️⃣ Start Development Server

```bash
npm run dev
```

Open:

```txt
http://localhost:5173
```

---

# ⛽ UGF Integration

```txt
User clicks Claim Badge
        ↓
UGF modal opens
        ↓
Gas quoted in Mock USD
        ↓
User approves transaction
        ↓
UGF handles blockchain gas
        ↓
NFT minted successfully
```

---

# 🚢 Deployment

```bash
npm install -g vercel
vercel
```


<p align="center">
  Built with ❤️ using React, Solidity, UGF & Base Sepolia
</p>
