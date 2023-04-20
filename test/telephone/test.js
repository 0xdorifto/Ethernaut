const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Telephone Attack", async function () {
  it("should have changed owner", async function () {
    // Deploy the telephone smart contract
    const Telephone = await ethers.getContractFactory("Telephone");
    const telephone = await Telephone.deploy();

    // Deploy the relay smart contract
    const Relay = await ethers.getContractFactory("Relay");
    const relay = await Relay.deploy();

    // Deploy the telephoneAttacker smart contract
    const TelephoneAttacker = await ethers.getContractFactory(
      "TelephoneAttacker"
    );
    const telephoneAttacker = await TelephoneAttacker.deploy(relay.address);

    // Owner address before attack is different from after the attack
    const initialOwner = await telephone.owner();
    expect(initialOwner).to.not.equal(relay.address);

    // Perform attack
    await telephoneAttacker.attack(telephone.address);

    const finalOwner = await telephone.owner();
    expect(finalOwner).to.equal(relay.address);
  });
});
