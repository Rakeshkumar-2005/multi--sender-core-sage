const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners(); // Get the deployer's address

  console.log("Deploying MultiSender contract with deployer:", deployer.address);

  // Get the MultiSender contract factory
  const MultiSender = await hre.ethers.getContractFactory("MultiSender");

  // Deploy the MultiSender contract
  const multiSender = await MultiSender.deploy();

  // Log the deployed contract address
  console.log("✅ MultiSender contract deployed at:", multiSender.target);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
