import Yoshi from "../contracts/Yoshi.json";
import Web3 from "web3";

const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
const NFT_ADDRESS = process.env.REACT_APP_NFT_ADDRESS;

const web3 = new Web3(Web3.givenProvider);
export const YoshiContract = new web3.eth.Contract(Yoshi.abi, NFT_ADDRESS);

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
