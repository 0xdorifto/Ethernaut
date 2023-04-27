const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GatekeeperOne Attack", async function () {
  it("should have correct gas value", async function () {
    // Deploy the gatekeeperOne smart contract
    const GatekeeperOne = await ethers.getContractFactory("GatekeeperOne");
    const gatekeeperOne = await GatekeeperOne.deploy();

    // Deploy the gatekeeperOneAttacker smart contract
    const GatekeeperOneAttacker = await ethers.getContractFactory(
      "GatekeeperOneAttacker"
    );
    const gatekeeperOneAttacker = await GatekeeperOneAttacker.deploy();

    // Perform attack
    for (let i = 0; i < 8191; i++) {
      try {
        await gatekeeperOneAttacker.attack(gatekeeperOne.address, i);
        console.log("GAS:", i);
        return;
      } catch {}
    }
  });
});
