import * as dotenv from "dotenv";

dotenv.config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;

const HardhatUserConfig = {
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [
        "eccc28c7eb9e8a099996fc71eab170589413525518199712d3e8b29b07badf7c",
      ],
    },
  },
};
