const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CoinFlip Attack", async function () {
  it("should have 10 consecutive wins", async function () {
    const accounts = await ethers.getSigners();

    // Deploy the coinFlip smart contract
    const CoinFlip = await ethers.getContractFactory("CoinFlip");
    const coinFlip = await CoinFlip.deploy();

    // Deploy the coinFlipAttacker smart contract
    const CoinFlipAttacker = await ethers.getContractFactory(
      "CoinFlipAttacker"
    );
    const coinFlipAttacker = await CoinFlipAttacker.deploy(coinFlip.address);

    // Perform attack
    let transaction;
    for (let i = 0; i < 10; i++) {
      transaction = await coinFlipAttacker.attack();
      transaction.wait();
    }

    const consecutiveWins = await coinFlip.consecutiveWins();
    expect(consecutiveWins).to.equal("10");
  });
});
