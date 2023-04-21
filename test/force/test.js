const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Force Attack", async function () {
  it("should have balance not be zero", async function () {
    // Deploy the force smart contract
    const Force = await ethers.getContractFactory("Force");
    const force = await Force.deploy();

    const initialBalance = await ethers.provider.getBalance(force.address);
    expect(initialBalance).to.equal(0);

    // Deploy the forceAttacker smart contract
    const ForceAttacker = await ethers.getContractFactory("ForceAttacker");
    const forceAttacker = await ForceAttacker.deploy(force.address, {
      value: 1,
    });

    const finalBalance = await ethers.provider.getBalance(force.address);
    expect(finalBalance).to.not.equal(0);
  });
});
