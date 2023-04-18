const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Fallout Attack", async function () {
  it("should have drained all funds", async function () {
    const accounts = await ethers.getSigners();

    // Deploy the fallout smart contract and fund it 1 ETH
    const Fallout = await ethers.getContractFactory("Fallout");
    const fallout = await Fallout.deploy();
    await accounts[0].sendTransaction({
      to: fallout.address,
      value: ethers.utils.parseEther("1"),
    });

    console.log("fallout address", fallout.address);

    // Deploy the falloutAttacker smart contract and fund it 1 ETH
    const FalloutAttacker = await ethers.getContractFactory("FalloutAttacker");
    const falloutAttacker = await FalloutAttacker.deploy(fallout.address);
    await accounts[0].sendTransaction({
      to: falloutAttacker.address,
      value: ethers.utils.parseEther("1"),
    });

    // Perform attack
    falloutAttacker.attack();

    const falloutBalance = await ethers.provider.getBalance(fallout.address);
    expect(falloutBalance).to.equal("0");

    const attackBalance = await ethers.provider.getBalance(
      falloutAttacker.address
    );
    expect(attackBalance).to.be.above(ethers.utils.parseEther("1"));
    expect(attackBalance).to.be.below(ethers.utils.parseEther("2"));
  });
});
