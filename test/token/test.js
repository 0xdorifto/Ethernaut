const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Attack", async function () {
  it("should have more tokens than initially", async function () {
    // Deploy the token smart contract
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(100000000000);

    // Deploy the tokenAttacker smart contract
    const TokenAttacker = await ethers.getContractFactory("TokenAttacker");
    const tokenAttacker = await TokenAttacker.deploy(token.address);

    // Setup
    const value = 20;
    await token.transfer(tokenAttacker.address, 20);

    // Perform attack
    await tokenAttacker.attack(value + 1);

    const attackBalance = await token.balanceOf(tokenAttacker.address);
    expect(attackBalance).to.be.above(20);
  });
});
