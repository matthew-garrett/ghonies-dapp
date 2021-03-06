import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import Yoshi from "../contracts/Yoshi.json";
import Web3 from "web3";

const INFURA_ID = process.env.REACT_APP_INFURA_ID;
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
const NFT_ADDRESS = process.env.REACT_APP_NFT_ADDRESS;

const acceptedChains = ENVIRONMENT === "development" ? [4] : [1, 2, 4];
const web3 = new Web3(Web3.givenProvider);
export const YoshiContract = new web3.eth.Contract(Yoshi.abi, NFT_ADDRESS);

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

export const getNetworkId = async () => {
  let result;
  await web3.eth.net.getId().then((networkId) => {
    result = networkId;
  });
  return result;
};

export const whiteListMint = (account, numberOfTokens, proof) => {
  const amount = (numberOfTokens * 0.06).toString();
  const amountToWei = web3.utils.toWei(amount, "ether");
  const result = YoshiContract.methods
    .whitelistMint(numberOfTokens, proof)
    .send({ from: account, value: amountToWei })
    .then((result) => {
      return {
        success: true,
        transactionLink: `https://rinkeby.etherscan.io/tx/${result.transactionHash}`,
      };
    })
    .catch((err) => {
      return {
        success: false,
        message: "Something went wrong: " + err.message,
      };
    });

  return result;
};

export const publicMint = (account, numberOfTokens) => {
  const amount = (numberOfTokens * 0.09).toString();
  const amountToWei = web3.utils.toWei(amount, "ether");
  const result = YoshiContract.methods
    .publicMint(numberOfTokens)
    .send({ from: account, value: amountToWei })
    .then((result) => {
      return {
        success: true,
        transactionLink: `https://rinkeby.etherscan.io/tx/${result.transactionHash}`,
      };
    })
    .catch((err) => {
      return {
        success: false,
        resp: "Something went wrong: " + err.message,
      };
    });

  return result;
};
