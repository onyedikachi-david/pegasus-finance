import BigNumber from "bignumber.js";

interface Chains {
  [key: string]: {
    name: string;
    rpcUrl: string;
    iconUrl: string;
    currency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    contracts: {
      vaultManager: string;
      pegasusUSD: string;
    };
    subgraphEndpoint?: string;
  };
}

export const TEST_ETH_PRICE = 2200;

export const Q64 = new BigNumber(2).pow(64);
export const Q64_MUL_100 = new BigNumber(100).multipliedBy(Q64);

export const CHAINS: Chains = {
  "0x106a": {
    name: "Lisk Sepolia Sepolia",
    rpcUrl: "https://rpc.sepolia-api.lisk.com",
    iconUrl: "https://chainlist.org/unknown-logo.png",
    currency: { name: "ETH", symbol: "ETH", decimals: 18 },
    subgraphEndpoint:
      "https://api.studio.thegraph.com/query/60908/pegaus-sepolia/version/latest",
    contracts: {
      vaultManager: "0xb7738817DbD16F9e588b4F493D283d1C729cd682",
      pegasusUSD: "0x7099cC53821104484F7fDD51992C87715afF95a3",
    },
  },
};

export const DEFAULT_NETWORK = "0x106a";
