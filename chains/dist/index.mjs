// src/chains/chains.ts
import { rinkeby, mainnet, goerli } from "wagmi/chains";
var avalandche = {
  id: 43114,
  name: "Avalanche C-Chain",
  network: "avalanche",
  rpcUrls: {
    default: "https://rpc.ankr.com/avalanche"
  },
  nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
  blockExplorers: {
    default: {
      name: "snowtrace",
      url: "https://snowtrace.io/"
    }
  }
};
var avalandcheFuji = {
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  rpcUrls: {
    default: "https://rpc.ankr.com/avalanche_fuji"
  },
  nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
  blockExplorers: {
    default: {
      name: "snowtrace",
      url: "https://testnet.snowtrace.io/"
    }
  },
  testnet: true
};
var fantomOpera = {
  id: 250,
  name: "Fantom Opera",
  network: "fantom",
  nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
  rpcUrls: {
    default: "https://rpc.ftm.tools"
  },
  blockExplorers: {
    default: {
      name: "FTMScan",
      url: "https://ftmscan.com"
    }
  }
};
var fantomTestnet = {
  id: 4002,
  name: "Fantom Testnet",
  network: "fantom-testnet",
  nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
  rpcUrls: {
    default: "https://rpc.testnet.fantom.network"
  },
  blockExplorers: {
    default: {
      name: "FTMScan",
      url: "https://testnet.ftmscan.com"
    }
  },
  testnet: true
};
var bscExplorer = { name: "BscScan", url: "https://bscscan.com" };
var bsc = {
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  rpcUrls: {
    public: "https://bsc-dataseed1.binance.org",
    default: "https://bsc-dataseed1.binance.org"
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer
  },
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18
  },
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 15921452
  }
};
var bscTest = {
  id: 97,
  name: "DEMO NETWORK",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Chain Native Token",
    symbol: "tBNB"
  },
  rpcUrls: {
    public: "https://data-seed-prebsc-1-s2.binance.org:8545/",
    default: "https://data-seed-prebsc-1-s2.binance.org:8545/"
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://testnet.bscscan.com" }
  },
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 17422483
  },
  testnet: true
};
export {
  avalandche,
  avalandcheFuji,
  bsc,
  bscTest,
  fantomOpera,
  fantomTestnet,
  goerli,
  mainnet,
  rinkeby
};
