import { useSelector } from "react-redux";

const selectWhiteListMintStatus = (state) => state.whiteListMintActive;

export const useWhiteListMintActive = () => {
  return useSelector(selectWhiteListMintStatus);
};

const selectPublicMintStatus = (state) => state.publicMintActive;

export const usePublicMintStatus = () => {
  return useSelector(selectPublicMintStatus);
};

const selectProof = (state) => state.proof;

export const useProof = () => {
  return useSelector(selectProof);
};

const selectMintStatus = (state) => state.mintStatus;

export const useMintStatus = () => {
  return useSelector(selectMintStatus);
};

const selectTranactionLink = (state) => state.transactionLink;

export const useTranactionLink = () => {
  return useSelector(selectTranactionLink);
};

const selectErrorMessage = (state) => state.errorMessage;

export const useErrorMessage = () => {
  return useSelector(selectErrorMessage);
};

const selectWhiteListPrice = (state) => state.whiteListPrice;

export const useWhiteListPrice = () => {
  return useSelector(selectWhiteListPrice);
};

const selectPublicPrice = (state) => state.publicPrice;

export const usePublicPrice = () => {
  return useSelector(selectPublicPrice);
};

const selectConnectActive = (state) => state.connectActive;

export const useConnectActive = () => {
  return useSelector(selectConnectActive);
};

const selectTotalSupply = (state) => state.totalSupply;

export const useTotalSupply = () => {
  return useSelector(selectTotalSupply);
};

const selectMaxSupply = (state) => state.maxSupply;

export const useMaxSupply = () => {
  return useSelector(selectMaxSupply);
};
