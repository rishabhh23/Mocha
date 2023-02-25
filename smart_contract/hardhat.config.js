require("@nomiclabs/hardhat-waffle");

const HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/_DdgKq4f_bZvMVmT8Z3NphU0MVW8F4zq",
      accounts: [
        "eccc28c7eb9e8a099996fc71eab170589413525518199712d3e8b29b07badf7c",
      ],
    },
  },
};
