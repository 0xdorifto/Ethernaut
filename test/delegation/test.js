const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Delegation Attack", async function () {
  it("should have attacker become the owner", async function () {
    let owner;
    const accounts = await ethers.getSigners();

    // Deploy the delegation smart contract
    const Delegate = await ethers.getContractFactory("Delegate");
    const delegate = await Delegate.deploy(accounts[0].address);

    const Delegation = await ethers.getContractFactory("Delegation");
    const delegation = await Delegation.deploy(delegate.address);

    // Owner should be accounts[0]
    owner = await delegation.owner();
    expect(owner).to.equal(accounts[0].address);

    // Deploy the delegationAttacker smart contract
    const DelegationAttacker = await ethers.getContractFactory(
      "DelegationAttacker"
    );
    const delegationAttacker = await DelegationAttacker.deploy(
      delegation.address
    );

    // After the attack, the owner should be the attacker contract
    owner = await delegation.owner();
    expect(owner).to.not.equal(delegationAttacker.address);
  });
});
