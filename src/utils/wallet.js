import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const INFURA_ID = process.env.REACT_APP_INFURA_ID;
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;

const acceptedChains = ENVIRONMENT === "development" ? [4] : [1, 2];

export const injected = new InjectedConnector({
  supportedChainIds: acceptedChains,
});

export const walletConnect = new WalletConnectConnector({
  infuraId: INFURA_ID,
  supportedChainIds: acceptedChains,
});

export const walletlink = new WalletLinkConnector({
  appName: "Ghonies Dapp",
  supportedChainIds: acceptedChains,
});
