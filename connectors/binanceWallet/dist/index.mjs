// src/connectors/binanceWallet/binanceWallet.ts
import {
  ConnectorNotFoundError,
  ResourceUnavailableError,
  UserRejectedRequestError,
  SwitchChainNotSupportedError
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { hexValue } from "@ethersproject/bytes";
var mappingNetwork = {
  1: "eth-mainnet",
  56: "bsc-mainnet",
  97: "bsc-testnet"
};
var BinanceWalletConnector = class extends InjectedConnector {
  constructor({
    chains: _chains
  } = {}) {
    const options = {
      name: "Binance",
      shimDisconnect: true,
      shimChainChangedDisconnect: true
    };
    const chains = _chains == null ? void 0 : _chains.filter((c) => !!mappingNetwork[c.id]);
    super({
      chains,
      options
    });
    this.id = "bsc";
    this.ready = typeof window !== "undefined" && !!window.BinanceChain;
  }
  async connect({ chainId } = {}) {
    try {
      const provider = await this.getProvider();
      if (!provider)
        throw new ConnectorNotFoundError();
      if (provider.on) {
        provider.on("accountsChanged", this.onAccountsChanged);
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect);
      }
      this.emit("message", { type: "connecting" });
      const account = await this.getAccount();
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId);
        id = chain.id;
        unsupported = this.isChainUnsupported(id);
      }
      return { account, chain: { id, unsupported }, provider };
    } catch (error) {
      if (this.isUserRejectedRequestError(error))
        throw new UserRejectedRequestError(error);
      if (error.code === -32002)
        throw new ResourceUnavailableError(error);
      throw error;
    }
  }
  async getProvider() {
    if (typeof window !== "undefined") {
      this.provider = window.BinanceChain;
    }
    return this.provider;
  }
  async switchChain(chainId) {
    var _a, _b;
    const provider = await this.getProvider();
    if (!provider)
      throw new ConnectorNotFoundError();
    const id = hexValue(chainId);
    if (mappingNetwork[chainId]) {
      try {
        await ((_a = provider.switchNetwork) == null ? void 0 : _a.call(provider, mappingNetwork[chainId]));
        return (_b = this.chains.find((x) => x.id === chainId)) != null ? _b : {
          id: chainId,
          name: `Chain ${id}`,
          network: `${id}`,
          rpcUrls: { default: "" }
        };
      } catch (error) {
        if (error.error === "user rejected") {
          throw new UserRejectedRequestError(error);
        }
      }
    }
    throw new SwitchChainNotSupportedError({ connector: this });
  }
};
export {
  BinanceWalletConnector
};
