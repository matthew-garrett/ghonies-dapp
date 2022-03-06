export const whiteListMintActive = (proof) => ({
  type: "WHITE_LIST_MINT_ACTIVE",
  payload: { proof },
});

export const checkConnectStatus = () => ({
  type: "CHECK_CONNECT_STATUS",
});

export const connectActive = () => ({
  type: "CONNECT_ACTIVE",
});

export const publicMintActive = () => ({
  type: "PUBLIC_MINT_ACTIVE",
});

export const checkMintStatus = (address) => ({
  type: "CHECK_MINT_STATUS",
  payload: { address },
});

export const setErrorMessage = (errorMessage) => ({
  type: "ERROR_MESSAGE",
  payload: { errorMessage },
});

export const whiteListMintPending = (account, tokenCount, proof) => ({
  type: "WHITE_LIST_MINT_PENDING",
  payload: { account, tokenCount, proof },
});

export const publicMintPending = (account, tokenCount) => ({
  type: "PUBLIC_MINT_PENDING",
  payload: { account, tokenCount },
});

export const mintReset = () => ({
  type: "MINT_RESET",
});

export const mintFailed = (errorMessage) => ({
  type: "MINT_FAILED",
  payload: { errorMessage },
});

export const mintSuccess = (transactionLink) => ({
  type: "MINT_SUCCESS",
  payload: { transactionLink },
});

export const getTotalsPending = () => ({
  type: "GET_TOTALS_PENDING",
});

export const setTotals = (totalSupply, maxSupply) => {
  return {
    type: "SET_TOTALS",
    payload: { totalSupply, maxSupply },
  };
};
