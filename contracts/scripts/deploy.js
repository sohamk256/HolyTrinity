const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying EventBadge to Base Sepolia...\n");

  const signers = await hre.ethers.getSigners();
  if (signers.length === 0) {
    console.error("❌ Error: No deployer account found!");
    console.error("💡 Please ensure that you have added your PRIVATE_KEY to the contracts/.env file.");
    console.error("   Open contracts/.env and set: PRIVATE_KEY=0xYourPrivateKey...");
    process.exit(1);
  }

  const deployer = signers[0];
  console.log("📋 Deployer address:", deployer.address);

  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("💰 Deployer balance:", hre.ethers.formatEther(balance), "ETH\n");

  // Deploy the contract
  const EventBadge = await hre.ethers.getContractFactory("EventBadge");
  const badge = await EventBadge.deploy();
  await badge.waitForDeployment();

  const contractAddress = await badge.getAddress();

  console.log("✅ EventBadge deployed successfully!");
  console.log("📍 Contract address:", contractAddress);
  console.log("🔗 BaseScan:", `https://sepolia.basescan.org/address/${contractAddress}`);
  console.log("\n────────────────────────────────────────");
  console.log("📝 Next steps:");
  console.log(`   1. Copy this address: ${contractAddress}`);
  console.log("   2. Paste it into your frontend .env file as VITE_CONTRACT_ADDRESS");
  console.log("   3. Run: npm run dev");
  console.log("────────────────────────────────────────\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
