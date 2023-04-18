const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Fallback Attack", async function () {
  it("should have drained all funds", async function () {
    const accounts = await ethers.getSigners();

    // Deploy the fallback smart contract and fund it 1 ETH
    const Fallback = await ethers.getContractFactory("Fallback");
    const fallback = await Fallback.deploy();
    await accounts[0].sendTransaction({
      to: fallback.address,
      value: ethers.utils.parseEther("1"),
    });

    // Deploy the fallbackAttacker smart contract and fund it 1 ETH
    const FallbackAttacker = await ethers.getContractFactory(
      "FallbackAttacker"
    );
    const fallbackAttacker = await FallbackAttacker.deploy(fallback.address);
    await accounts[0].sendTransaction({
      to: fallbackAttacker.address,
      value: ethers.utils.parseEther("1"),
    });

    // Perform attack
    fallbackAttacker.attack();

    const fallbackBalance = await ethers.provider.getBalance(fallback.address);
    expect(fallbackBalance).to.equal("0");

    const attackBalance = await ethers.provider.getBalance(
      fallbackAttacker.address
    );
    expect(attackBalance).to.be.above(ethers.utils.parseEther("1"));
    expect(attackBalance).to.be.below(ethers.utils.parseEther("2"));
  });
});
