const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Telephone Attack", async function () {
  it("should have changed owner", async function () {
    // Deploy the telephone smart contract
    const Telephone = await ethers.getContractFactory("Telephone");
    const telephone = await Telephone.deploy();

    // Deploy the telephoneRelay smart contract
    const TelephoneRelay = await ethers.getContractFactory("TelephoneRelay");
    const telephoneRelay = await TelephoneRelay.deploy();

    // Deploy the telephoneAttacker smart contract
    const TelephoneAttacker = await ethers.getContractFactory(
      "TelephoneAttacker"
    );
    const telephoneAttacker = await TelephoneAttacker.deploy(
      telephoneRelay.address
    );

    // Owner address before attack is different from after the attack
    const initialOwner = await telephone.owner();
    expect(initialOwner).to.not.equal(telephoneRelay.address);

    // Perform attack
    await telephoneAttacker.attack(telephone.address);

    const finalOwner = await telephone.owner();
    expect(finalOwner).to.equal(telephoneRelay.address);
  });
});
