# 📋 GroupLedger

> **Transparent, Tamper-Proof Group Project Contribution Tracker on Base Sepolia**
> Built for the UGF Hackathon · Powered by Universal Gas Framework

<p align="center">
  <img src="https://img.shields.io/badge/Base-Sepolia-0052FF?style=for-the-badge&logo=coinbase&logoColor=white" />
  <img src="https://img.shields.io/badge/UGF-Integrated-FF6B35?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Solidity-0.8.20-363636?style=for-the-badge&logo=solidity" />
  <img src="https://img.shields.io/badge/Gas-Mock_USD-22C55E?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> ·
  <a href="#-problem-statement">Problem</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-tech-stack">Tech Stack</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-smart-contract">Smart Contract</a> ·
  <a href="#-ugf-integration">UGF Integration</a> ·
  <a href="#-screenshots">Screenshots</a>
</p>

---

## 🌐 Live Demo

🔗 **Deployed App:** [https://groupledger.vercel.app](https://groupledger.vercel.app)  
🔗 **UGF SCAN (verify transactions):** [https://scan.universalgasframework.com](https://scan.universalgasframework.com)  
🔗 **Smart Contract on Base Sepolia Explorer:** `0xYourContractAddressHere`

> ⚠️ This app runs on **Base Sepolia Testnet**. No real money is involved. Get free Mock USD from the [UGF Faucet](https://universalgasframework.com/faucets).

---

## 🎯 Problem Statement

Every college student has experienced this:

```
Group of 4 assigned a project
├── 1 person does 90% of the work
├── 3 people contribute little or nothing
├── All 4 receive equal marks
└── The hardworking student has ZERO proof of their effort
```

Traditional solutions fail:

| Solution | Why It Fails |
|---|---|
| WhatsApp screenshots | Can be faked, deleted, or edited |
| Google Docs history | Admin can delete, platform can shut down |
| GitHub commits | Only works for code, not research/design/writing |
| "Just trust us" | Doesn't work. Never has. |

**GroupLedger solves this with blockchain.** Every contribution is:
- ✅ Permanently timestamped
- ✅ Peer-verified by teammates
- ✅ Publicly auditable by anyone
- ✅ Impossible to delete or modify
- ✅ Gas-free for users (UGF handles it via Mock USD)

---

## ✨ Features

### Core Features
- 🏗️ **Create Projects** — Team lead creates a project onchain with member wallet addresses
- 📝 **Log Contributions** — Members log what they did, time spent, category, and optional evidence links
- ✅ **Peer Verification** — Teammates verify each other's contributions onchain
- 📊 **Contribution Dashboard** — Real-time breakdown of each member's contribution percentage
- 🔗 **Public Proof Page** — Shareable link for teachers/evaluators to verify contributions without any Web3 knowledge
- 🏆 **Completion NFT** — On project completion, all members receive an NFT with their contribution % embedded in metadata
- 🔍 **UGF SCAN Integration** — Every transaction is verifiable on UGF's public explorer

### UX Features
- 🦊 **MetaMask / any wallet** connection via wagmi
- 💸 **Zero ETH required** — all gas paid in Mock USD via UGF
- 📱 **Responsive design** — works on mobile and desktop
- 🌙 **Dark mode** support

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Tailwind CSS | Styling |
| wagmi v2 | Wallet connection & contract interaction |
| ethers.js v6 | Blockchain interaction |
| React Router v6 | Client-side routing |
| Vite | Build tool |

### Blockchain & Gas
| Technology | Purpose |
|---|---|
| Solidity 0.8.20 | Smart contract language |
| Base Sepolia | Target blockchain (testnet) |
| `@tychilabs/react-ugf` | UGF React SDK for gasless transactions |
| Remix IDE | Contract deployment |
| Mock USD | Gas payment currency (via UGF) |

### Deployment
| Service | Purpose |
|---|---|
| Vercel | Frontend hosting |
| Base Sepolia | Contract deployment |
| UGF SCAN | Transaction verification |

---

## 🏗️ Project Structure

```
groupledger/
│
├── 📁 contracts/
│   └── GroupLedger.sol              # Main smart contract
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── ConnectWallet.jsx        # Wallet connection button
│   │   ├── CreateProject.jsx        # Project creation form
│   │   ├── Dashboard.jsx            # Project overview + contribution bars
│   │   ├── LogContribution.jsx      # Contribution logging form
│   │   ├── VerifyContribution.jsx   # Peer verification UI
│   │   ├── ProofPage.jsx            # Public shareable proof page
│   │   ├── ContributionCard.jsx     # Individual contribution display
│   │   └── Navbar.jsx               # Navigation bar
│   │
│   ├── 📁 hooks/
│   │   ├── useContract.js           # Smart contract read/write hooks
│   │   └── useUGF.js                # UGF transaction hooks
│   │
│   ├── 📁 utils/
│   │   ├── contract.js              # Contract ABI + address config
│   │   ├── ugf.js                   # UGF SDK initialization
│   │   └── helpers.js               # Formatting, date utils
│   │
│   ├── 📁 pages/
│   │   ├── Home.jsx                 # Landing page
│   │   ├── ProjectPage.jsx          # Individual project view
│   │   └── PublicProof.jsx          # Public verifiable proof (no wallet needed)
│   │
│   ├── App.jsx                      # Root component + routing
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles + Tailwind
│
├── 📁 public/
│   └── logo.svg
│
├── .env.example                     # Environment variable template
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) browser extension
- A wallet configured for **Base Sepolia** testnet

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/groupledger.git
cd groupledger
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
# Smart Contract (deployed on Base Sepolia)
VITE_CONTRACT_ADDRESS=0xYourContractAddressHere

# Base Sepolia RPC
VITE_BASE_SEPOLIA_RPC=https://sepolia.base.org

# WalletConnect Project ID (get from https://cloud.walletconnect.com)
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Chain ID for Base Sepolia
VITE_CHAIN_ID=84532
```

### 4. Set Up MetaMask for Base Sepolia

Add Base Sepolia to MetaMask manually:

| Field | Value |
|---|---|
| Network Name | Base Sepolia |
| RPC URL | `https://sepolia.base.org` |
| Chain ID | `84532` |
| Currency Symbol | `ETH` |
| Block Explorer | `https://sepolia.basescan.org` |

### 5. Get Mock USD from UGF Faucet

Visit [https://universalgasframework.com/faucets](https://universalgasframework.com/faucets) and claim free Mock USD for your wallet. This is what you'll use to pay gas — no real ETH needed.

### 6. Run the Development Server

```bash
npm run dev
```

App will be live at `http://localhost:5173`

### 7. Build for Production

```bash
npm run build
```

---

## 📜 Smart Contract

### Overview

The `GroupLedger.sol` contract handles all onchain logic:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GroupLedger {

    // ─── Structs ───────────────────────────────────────────

    struct Contribution {
        address member;          // wallet address of contributor
        string description;      // what they did
        string category;         // "code" | "research" | "design" | "writing" | "testing" | "other"
        uint256 hoursSpent;      // time spent (in hours)
        string evidenceLink;     // optional GitHub/Doc link
        uint256 timestamp;       // auto-set by blockchain
        uint256 verifications;   // number of peer verifications
        bool exists;
    }

    struct Project {
        uint256 id;
        string name;
        string description;
        address creator;
        address[] members;
        bool completed;
        uint256 createdAt;
    }

    // ─── State ─────────────────────────────────────────────

    uint256 public projectCount;
    mapping(uint256 => Project) public projects;
    mapping(uint256 => Contribution[]) public contributions;
    mapping(uint256 => mapping(uint256 => mapping(address => bool))) public hasVerified;
    mapping(uint256 => mapping(address => bool)) public isMember;

    // ─── Events ────────────────────────────────────────────

    event ProjectCreated(uint256 indexed projectId, string name, address creator);
    event ContributionLogged(uint256 indexed projectId, uint256 contributionId, address member);
    event ContributionVerified(uint256 indexed projectId, uint256 contributionId, address verifier);
    event ProjectCompleted(uint256 indexed projectId);

    // ─── Functions ─────────────────────────────────────────

    function createProject(
        string memory _name,
        string memory _description,
        address[] memory _members
    ) external returns (uint256) { ... }

    function logContribution(
        uint256 _projectId,
        string memory _description,
        string memory _category,
        uint256 _hoursSpent,
        string memory _evidenceLink
    ) external onlyMember(_projectId) { ... }

    function verifyContribution(
        uint256 _projectId,
        uint256 _contributionId
    ) external onlyMember(_projectId) { ... }

    function getContributions(uint256 _projectId)
        external view returns (Contribution[] memory) { ... }

    function getMemberContributionPercentage(uint256 _projectId, address _member)
        external view returns (uint256) { ... }

    function completeProject(uint256 _projectId)
        external onlyCreator(_projectId) { ... }
}
```

### Deploying the Contract

1. Open [Remix IDE](https://remix.ethereum.org)
2. Create a new file → paste `GroupLedger.sol`
3. Compile with Solidity `0.8.20`
4. In Deploy tab → select **Injected Provider (MetaMask)**
5. Make sure MetaMask is on **Base Sepolia**
6. Click Deploy → confirm in MetaMask
7. Copy the deployed contract address → paste into your `.env`

---

## ⛽ UGF Integration

This is the core innovation of GroupLedger. Every onchain action (logging a contribution, verifying, completing a project) goes through UGF — meaning **users never need ETH in their wallet.**

### How It Works

```
User clicks "Submit Contribution"
         ↓
react-ugf SDK triggers
         ↓
UGF quotes gas cost in Mock USD
         ↓
User approves Mock USD payment
         ↓
UGF executes transaction on Base Sepolia using its own ETH
         ↓
Contribution stored onchain permanently
         ↓
UGF SCAN record created (verifiable proof)
```

### SDK Setup

```bash
npm install @tychilabs/react-ugf
```

### Basic Usage in the App

```jsx
import { UGFProvider, useUGF } from '@tychilabs/react-ugf';

// Wrap your app
<UGFProvider network="base-sepolia">
  <App />
</UGFProvider>

// In your component
const { executeTransaction } = useUGF();

const logContribution = async () => {
  await executeTransaction({
    contractAddress: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'logContribution',
    args: [projectId, description, category, hoursSpent, evidenceLink],
  });
};
```

### UGF Flow in GroupLedger

| User Action | UGF Transaction | Gas Paid In |
|---|---|---|
| Create Project | `createProject()` | Mock USD |
| Log Contribution | `logContribution()` | Mock USD |
| Verify Contribution | `verifyContribution()` | Mock USD |
| Complete Project | `completeProject()` | Mock USD |

**Zero ETH. Always. That's the point.**

---

## 🗺️ Application Flow

```
┌─────────────────────────────────────────────────────┐
│                    GROUPLEDGER                       │
└─────────────────────────────────────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         ▼                               ▼
  [Connect Wallet]              [View Public Proof]
         │                       (no wallet needed)
         ▼
  [Home Dashboard]
  - Your active projects
  - Quick stats
         │
    ┌────┴────┐
    ▼         ▼
[Create     [Join Existing
 Project]    Project]
    │              │
    └──────┬───────┘
           ▼
   [Project Dashboard]
   - Member list
   - Contribution bars
   - Timeline of logs
           │
     ┌─────┴─────┐
     ▼           ▼
[Log My      [Verify
Contribution] Someone's
     │        Contribution]
     │              │
     └──────┬───────┘
            ▼
    [UGF handles gas]
    [Transaction onchain]
    [UGF SCAN record]
            │
            ▼
   [Updated Dashboard]
   [Shareable Proof Link]
```

---

## 📊 Contribution Categories

GroupLedger supports 6 contribution types:

| Category | Icon | Examples |
|---|---|---|
| Research | 🔬 | Literature review, data gathering, references |
| Code | 💻 | Implementation, debugging, testing, deployment |
| Design | 🎨 | UI mockups, diagrams, poster, presentation design |
| Writing | ✍️ | Report writing, documentation, abstract |
| Testing | 🧪 | Unit testing, user testing, QA |
| Other | 📌 | Meetings, coordination, reviews |

---

## 🔐 Security & Trust Model

### Why This Is Trustless

| Concern | How GroupLedger Handles It |
|---|---|
| Can the team lead fake contributions? | No — each log is signed by the contributor's wallet |
| Can someone log fake hours? | Logs are peer-verified — unverified logs shown separately |
| Can the app admin delete records? | No — data lives on blockchain, not our servers |
| Can the app shut down and lose data? | No — blockchain data is permanent regardless of our app |
| Can timestamps be faked? | No — timestamp is set by the blockchain, not us |

### Trust Levels

```
Fully Verified Contribution   ✅✅  = Logged by member + verified by 2+ peers
Partially Verified            ✅    = Logged by member + verified by 1 peer  
Unverified                    ⚠️    = Logged but no peer verification yet
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# VITE_CONTRACT_ADDRESS, VITE_BASE_SEPOLIA_RPC, etc.
```

Or connect your GitHub repo directly to [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 🧪 Testing the App (Step by Step)

1. Open the [live app](https://groupledger.vercel.app)
2. Connect MetaMask (Base Sepolia network)
3. Get Mock USD from [UGF Faucet](https://universalgasframework.com/faucets)
4. Click **"Create Project"** → fill in name + team member wallet addresses
5. Confirm Mock USD payment via UGF (no ETH needed!)
6. Share the project link with your team
7. Each member connects their wallet and clicks **"Log Contribution"**
8. Other members click **"Verify"** on each contribution
9. View the **Dashboard** — see real-time contribution percentages
10. Click **"Share Proof Link"** — share with your teacher/evaluator
11. Verify any transaction on **UGF SCAN**

---

## 🤝 Team

| Name | Role | GitHub |
|---|---|---|
| Soham | Smart Contract + UGF Integration | [@yourusername](https://github.com/yourusername) |
| [Teammate 2] | Frontend Development | [@teammate2](https://github.com/teammate2) |
| [Teammate 3] | UI/UX Design | [@teammate3](https://github.com/teammate3) |

**Institution:** Vishwakarma Institute of Technology, Pune  
**Division:** E · **Batch:** 2024–2028

---

## 📚 Resources Used

| Resource | Link |
|---|---|
| UGF Documentation | [universalgasframework.com/docs](https://universalgasframework.com/docs) |
| UGF Testnet Quickstart | [universalgasframework.com/docs/testnet](https://universalgasframework.com/docs/testnet) |
| Mock USD Faucet | [universalgasframework.com/faucets](https://universalgasframework.com/faucets) |
| UGF JS SDK (npm) | [@tychilabs/ugf-testnet-js](https://www.npmjs.com/package/@tychilabs/ugf-testnet-js) |
| UGF React SDK (npm) | [@tychilabs/react-ugf](https://www.npmjs.com/package/@tychilabs/react-ugf) |
| UGF GitHub | [github.com/TychiWallet/ugf-testnet-js](https://github.com/TychiWallet/ugf-testnet-js) |
| Base Sepolia Explorer | [sepolia.basescan.org](https://sepolia.basescan.org) |
| Remix IDE | [remix.ethereum.org](https://remix.ethereum.org) |

---

## 🗺️ Roadmap (Post-Hackathon)

- [ ] Email/notification when someone verifies your contribution
- [ ] IPFS storage for evidence files (images, PDFs)
- [ ] Teacher dashboard with class-wide project overview
- [ ] Export contribution report as PDF
- [ ] Mobile app (React Native)
- [ ] Mainnet deployment (Base mainnet)
- [ ] Integration with GitHub — auto-log commits as contributions
- [ ] AI-powered contribution summarizer

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [TychiLabs](https://x.com/TychiLabs) for building UGF and making gasless Web3 possible
- [Coinbase](https://www.coinbase.com) for Base and Base Sepolia
- [Vercel](https://vercel.com) for free frontend hosting
- [Remix IDE](https://remix.ethereum.org) for browser-based contract deployment

---

<p align="center">
  Built with ❤️ for the UGF Hackathon · VIT Pune · 2026
</p>

<p align="center">
  <a href="mailto:rishi@tychilabs.com">Contact Organizers</a> ·
  <a href="https://t.me/TychiCommunity">Telegram Community</a> ·
  <a href="https://x.com/TychiLabs">Follow on X</a>
</p>
