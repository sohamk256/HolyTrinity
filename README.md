# ✨ HolyTrinity

> A futuristic gasless Web3 event badge platform powered by UGF on Base Sepolia.

HolyTrinity is a modern decentralized application that allows users to mint personalized NFT event badges completely gas-free. Built with React, Solidity, UGF, and Base Sepolia, the platform delivers a smooth Web3 onboarding experience where users never need ETH to interact with the blockchain.

<p align="center">
  <img src="https://img.shields.io/badge/Base-Sepolia-0052FF?style=for-the-badge&logo=coinbase&logoColor=white" />
  <img src="https://img.shields.io/badge/UGF-Integrated-FF6B35?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Solidity-0.8.24-363636?style=for-the-badge&logo=solidity" />
  <img src="https://img.shields.io/badge/Gasless-Transactions-22C55E?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-project-structure">Structure</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-ugf-integration">UGF Integration</a> ·
  <a href="#-deployment">Deployment</a>
</p>

---

## 🌐 Live Demo

🔗 **Frontend:** `https://holytrinity.vercel.app`
🔗 **UGF SCAN:** `https://scan.universalgasframework.com`
🔗 **Network:** Base Sepolia Testnet

> ⚠️ HolyTrinity runs on Base Sepolia. Users can mint NFT badges without needing ETH by paying gas through UGF using Mock USD.

---

## 🎯 Project Vision

Web3 onboarding is still difficult for most users.

Traditional dApps require:

```txt
• Wallet setup
• Testnet ETH
• Complex blockchain interactions
• Gas fee understanding
• Network switching
```

HolyTrinity removes these barriers completely.

With HolyTrinity:

* ✅ Users connect their wallet
* ✅ Enter their name
* ✅ Mint a personalized NFT badge
* ✅ Pay gas using Mock USD via UGF
* ✅ No ETH required
* ✅ Fully on-chain metadata and SVG generation

The goal is to make blockchain interactions feel as smooth as modern Web2 applications.

---

## ✨ Features

### Core Features

* 🔥 **Gasless NFT Minting** — users mint without ETH
* 🎨 **On-Chain SVG Badges** — dynamic NFT art generated onchain
* ⚡ **Base Sepolia Powered** — low-cost and fast L2 transactions
* 🦊 **Wallet Integration** — MetaMask & WalletConnect support via Reown AppKit
* 🌌 **Modern UI/UX** — glassmorphism, particle animations, smooth transitions
* 📱 **Fully Responsive** — optimized for desktop and mobile
* 🚀 **Vercel Ready** — one-click deployment setup

### Technical Features

* 🔗 UGF gas abstraction integration
* 📦 Modular React component architecture
* ⚙️ Solidity smart contract support
* 🎉 Animated mint success screen
* 🧠 Live NFT preview generation
* 🔐 Secure blockchain interaction using ethers.js v6

---

## 📁 Project Structure

```txt
HolyTrinity-main/
│
├── 📁 contracts/
│   ├── EventBadge.sol              # ERC721 NFT smart contract
│   ├── hardhat.config.js           # Hardhat configuration
│   ├── package.json                # Smart contract dependencies
│   ├── .env.example                # Contract environment template
│   └── 📁 scripts/
│       └── deploy.js               # Deployment script
│
├── 📁 public/
│   └── badge.svg                   # Static badge asset
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Navbar.jsx              # Top navigation bar
│   │   ├── Hero.jsx                # Landing page hero section
│   │   ├── ClaimBadge.jsx          # NFT minting form
│   │   ├── BadgePreview.jsx        # Real-time badge preview
│   │   ├── MintSuccess.jsx         # Success animation screen
│   │   ├── ParticleBackground.jsx  # Animated particle background
│   │   └── Footer.jsx              # Footer section
│   │
│   ├── 📁 config/
│   │   ├── appkit.js               # Reown AppKit configuration
│   │   └── contract.js             # ABI and contract configuration
│   │
│   ├── 📁 hooks/
│   │   └── useMintBadge.js         # UGF minting logic
│   │
│   ├── App.jsx                     # Root application component
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles & Tailwind setup
│
├── .env.example                    # Frontend environment variables
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have:

* Node.js v18+
* npm or yarn
* MetaMask browser extension
* Base Sepolia network configured

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/HolyTrinity.git
cd HolyTrinity-main
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file:

```bash
copy .env.example .env
```

Add your values:

```env
VITE_REOWN_PROJECT_ID=your_project_id
VITE_CONTRACT_ADDRESS=0xYourContractAddress
VITE_RPC_URL=https://sepolia.base.org
```

### Get Reown Project ID

1. Visit `https://cloud.reown.com`
2. Create a project
3. Copy the generated Project ID
4. Paste it into `.env`

---

### 4️⃣ Deploy Smart Contract

```bash
cd contracts
npm install
copy .env.example .env
```

Update `contracts/.env`:

```env
PRIVATE_KEY=your_private_key
RPC_URL=https://sepolia.base.org
```

Deploy:

```bash
npm run deploy
```

Copy the deployed contract address into your frontend `.env`.

---

### 5️⃣ Run the Application

```bash
cd ..
npm run dev
```

Open:

```txt
http://localhost:5173
```

---

## 🦊 MetaMask Setup

### Add Base Sepolia Network

| Field           | Value                          |
| --------------- | ------------------------------ |
| Network Name    | Base Sepolia                   |
| RPC URL         | `https://sepolia.base.org`     |
| Chain ID        | `84532`                        |
| Currency Symbol | `ETH`                          |
| Block Explorer  | `https://sepolia.basescan.org` |

---

## 🔧 Smart Contract

The `EventBadge.sol` smart contract:

* Mints personalized ERC721 NFT badges
* Stores metadata fully on-chain
* Generates SVG artwork dynamically
* Emits minting events
* Works seamlessly with UGF gas abstraction

### Core Function

```solidity
function claimBadge(string memory name) public {
    // Mint personalized NFT badge
}
```

---

## ⛽ UGF Integration

HolyTrinity uses the Universal Gas Framework (UGF) to abstract away blockchain gas fees.

### Gasless Minting Flow

```txt
User Connects Wallet
        ↓
Enters Name
        ↓
Clicks "Claim Badge"
        ↓
UGF Modal Opens
        ↓
Gas Paid in Mock USD
        ↓
Transaction Sent on Base Sepolia
        ↓
NFT Badge Minted Successfully
```

### Example Integration

```javascript
const result = await openUGF({
  signer,
  tx: {
    to: CONTRACT_ADDRESS,
    data: encodedCallData,
    value: 0n,
  },
  destChainId: "84532",
});
```

---

## 🎨 UI & Design

HolyTrinity focuses heavily on futuristic Web3 aesthetics.

### Design Highlights

* 🌌 Particle animated backgrounds
* 🪟 Glassmorphism effects
* ✨ Smooth Framer Motion transitions
* 🌙 Dark-themed interface
* ⚡ Real-time NFT preview rendering
* 🎉 Confetti success animations

---

## 🛠️ Tech Stack

### Frontend

| Technology      | Purpose        |
| --------------- | -------------- |
| React 18        | UI framework   |
| Vite 5          | Build tool     |
| Tailwind CSS    | Styling system |
| Framer Motion   | Animations     |
| React Hot Toast | Notifications  |
| React Icons     | Icon library   |

### Blockchain

| Technology      | Purpose                 |
| --------------- | ----------------------- |
| Solidity 0.8.24 | Smart contract language |
| ethers.js v6    | Blockchain interaction  |
| OpenZeppelin    | ERC721 implementation   |
| Base Sepolia    | Blockchain network      |

### Wallet & Gas

| Technology    | Purpose              |
| ------------- | -------------------- |
| Reown AppKit  | Wallet connection    |
| UGF React SDK | Gas abstraction      |
| Mock USD      | Gas payment currency |

---

## 🚢 Deployment

### Deploy to Vercel

Install Vercel CLI:

```bash
npm install -g vercel
```

Deploy:

```bash
vercel
```

Or connect the GitHub repository directly to Vercel.

### Environment Variables for Deployment

```env
VITE_REOWN_PROJECT_ID=
VITE_CONTRACT_ADDRESS=
VITE_RPC_URL=
```

---

## 🐛 Troubleshooting

| Issue                    | Solution                               |
| ------------------------ | -------------------------------------- |
| Wallet not connecting    | Refresh browser and reconnect MetaMask |
| UGF modal not opening    | Ensure UGF packages are installed      |
| Invalid network          | Switch to Base Sepolia                 |
| Missing Project ID       | Add `VITE_REOWN_PROJECT_ID` in `.env`  |
| Mint transaction failing | Ensure contract address is correct     |
| Vercel build failure     | Check environment variables            |

---

## 📋 Available Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 🧪 Testing Flow

1. Connect MetaMask
2. Switch to Base Sepolia
3. Get Mock USD from UGF faucet
4. Enter your name
5. Click “Claim Badge”
6. Approve gas payment via UGF
7. NFT badge is minted instantly
8. View NFT inside your wallet

---

## 📚 Resources

| Resource          | Link                                                                             |
| ----------------- | -------------------------------------------------------------------------------- |
| UGF Documentation | [https://universalgasframework.com/docs](https://universalgasframework.com/docs) |
| Base Sepolia      | [https://sepolia.basescan.org](https://sepolia.basescan.org)                     |
| Reown Cloud       | [https://cloud.reown.com](https://cloud.reown.com)                               |
| Remix IDE         | [https://remix.ethereum.org](https://remix.ethereum.org)                         |
| Vercel            | [https://vercel.com](https://vercel.com)                                         |

---

## 🗺️ Future Improvements

* [ ] Multi-event badge collections
* [ ] Dynamic rarity system
* [ ] NFT metadata upgrades
* [ ] Mainnet deployment
* [ ] Wallet analytics dashboard
* [ ] QR-based badge verification
* [ ] IPFS backup support
* [ ] Event organizer dashboard

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

* UGF & TychiLabs for gas abstraction technology
* Base by Coinbase for scalable L2 infrastructure
* Reown for wallet connectivity solutions
* OpenZeppelin for secure ERC standards
* Vercel for deployment infrastructure

---

<p align="center">
  Built with ❤️ using React, Solidity, UGF & Base Sepolia
</p>
