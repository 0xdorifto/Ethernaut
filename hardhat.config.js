require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
const INFURA_API_KEY = fs.readFileSync(".infura").toString().trim();
const SEPOLIA_PRIVATE_KEY = fs.readFileSync(".secret").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
