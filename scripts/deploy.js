const { ethers } = require("hardhat");

async function main() {
  const Fallback = await ethers.getContractFactory("Fallback");
  const fallback = await Fallback.deploy();

  console.log("Fallback address:", fallback.address);

  const FallbackAttacker = await ethers.getContractFactory("Attacker");
  const fallbackAttacker = await FallbackAttacker.deploy(fallback.address);

  console.log("Fallback Attacker address:", fallbackAttacker.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
