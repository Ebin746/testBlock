const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  // Candidate names for the constructor
  const candidateNames = ["Alice", "Bob", "Charlie"];

  // Deploy VotingSystem Contract
  const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");
  const votingSystem = await VotingSystem.deploy(candidateNames);
  await votingSystem.waitForDeployment(); // Required for ethers v6
  console.log(`VotingSystem deployed to: ${await votingSystem.getAddress()}`);
}

// Run deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
