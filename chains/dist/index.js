var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/chains/index.ts
var chains_exports = {};
__export(chains_exports, {
  avalandche: () => avalandche,
  avalandcheFuji: () => avalandcheFuji,
  bsc: () => bsc,
  bscTest: () => bscTest,
  fantomOpera: () => fantomOpera,
  fantomTestnet: () => fantomTestnet,
  goerli: () => import_chains.goerli,
  mainnet: () => import_chains.mainnet,
  rinkeby: () => import_chains.rinkeby
});
module.exports = __toCommonJS(chains_exports);

// src/chains/chains.ts
var import_chains = require("wagmi/chains");
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
  name: "BNB Smart Chain Testnet",
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  avalandche,
  avalandcheFuji,
  bsc,
  bscTest,
  fantomOpera,
  fantomTestnet,
  goerli,
  mainnet,
  rinkeby
});
