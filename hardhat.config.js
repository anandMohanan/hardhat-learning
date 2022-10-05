require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
// require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: process.env.URL,
      accounts: [process.env.KEY],
    },
  },
  solidity: "0.8.17",
  // etherscan: {
  //   apiKey: {
  //     goerli: process.env.API,
  //   },
  // },
};
