const { ethers } = require("hardhat");
// Deploy the contract of the token
async function main() {
  const perc20 = await ethers.deployContract("MortsPrivy");
  await perc20.waitForDeployment();

  console.log(`PERC20Sample was deployed to ${perc20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});