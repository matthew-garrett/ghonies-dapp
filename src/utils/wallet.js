import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import TestNFT from "../contracts/TestNFT.json";
import Web3 from "web3";

const INFURA_ID = process.env.REACT_APP_INFURA_ID;
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
const NFT_ADDRESS = process.env.REACT_APP_NFT_ADDRESS;

const acceptedChains = ENVIRONMENT === "development" ? [4] : [1, 2, 4];
const web3 = new Web3(Web3.givenProvider);
export const testNFT = new web3.eth.Contract(TestNFT.abi, NFT_ADDRESS);
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
  console.log("minting whitelist...");
  const amount = (numberOfTokens * 0.02).toString();
  const amountToWei = web3.utils.toWei(amount, "ether");
  console.log("METHODS: ", testNFT.methods);
  const result = testNFT.methods
    .whiteListMint(numberOfTokens, proof)
    .send({ from: account, value: amountToWei })
    .then((result) => {
      console.log(`https://rinkeby.etherscan.io/tx/${result.transactionHash}`);
      return {
        success: true,
        resp: `https://rinkeby.etherscan.io/tx/${result.transactionHash}`,
      };
    })
    .catch((err) => {
      console.log("Mint transaction failed!");
      return {
        success: false,
        resp: "Something went wrong: " + err.message,
      };
    });

  return result;
};

export const publicMint = (account, numberOfTokens) => {
  console.log("minting whitelist...");
  const amount = (numberOfTokens * 0.02).toString();
  const amountToWei = web3.utils.toWei(amount, "ether");
  const result = testNFT.methods
    .publicMint(numberOfTokens)
    .send({ from: account, value: amountToWei })
    .then((result) => {
      console.log(`https://rinkeby.etherscan.io/tx/${result.transactionHash}`);
      return {
        success: true,
        resp: `https://rinkeby.etherscan.io/tx/${result.transactionHash}`,
      };
    })
    .catch((err) => {
      console.log("Mint transaction failed!");
      return {
        success: false,
        resp: "Something went wrong: " + err.message,
      };
    });

  return result;
};
