const { ethers, network } = require("hardhat");

require("dotenv").config();

async function main() {
  console.log(`Deployment to ${network.name} network STARTED`);
  if (await deployToNetwork()) {
    console.log(`Deployment to ${network.name} network FINISHED`);
  } else {
    console.log(`Deployment to ${network.name} network FAILED`);
  }
}

const deployToNetwork = async () => {
  let tokenName = "Staking Token";
  let tokenSymbol = "STK";
  console.log(tokenName);
  let tokenSupply = ethers.BigNumber.from(10000); //keeping initial supply of stake token as 10,000
  console.log(tokenSupply);

  // Contracts are deployed using the first signer/account by default
  const [owner] = await ethers.getSigners();

  const StakeContract = await ethers.getContractFactory("StakeToken");
  const stakeContract = await StakeContract.deploy(
    owner.address,
    tokenSupply,
    tokenName,
    tokenSymbol
  );
  console.log(`Stake token contract deployed at: ${stakeContract.address}`);
  return true;
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
