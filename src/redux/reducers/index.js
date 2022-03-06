const initialState = {
  addressConnected: false,
  address: "",
  proof: [],
  errorMessage: "",
  whiteListMintActive: false,
  publicMintActive: false,
  mintStatus: "",
  transactionLink: "",
  totalSupply: "",
  maxSupply: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_MINT_STATUS":
      return {
        ...state,
        whiteListMintActive: false,
        publicMintActive: false,
        proof: [],
        errorMessage: "",
        mintStatus: "",
        transactionLink: "",
        whiteListPrice: "0.06",
        publicPrice: "0.09",
      };
    case "WHITE_LIST_MINT_ACTIVE":
      return {
        ...state,
        proof: action.payload.proof,
        whiteListMintActive: true,
      };
    case "PUBLIC_MINT_ACTIVE":
      return {
        ...state,
        publicMintActive: true,
      };
    case "CONNECT_ACTIVE":
      return {
        ...state,
        connectActive: true,
      };
    case "ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case "WHITE_LIST_MINT_PENDING":
      return {
        ...state,
        mintStatus: "PENDING",
        transactionLink: "",
      };
    case "PUBLIC_MINT_PENDING":
      return {
        ...state,
        mintStatus: "PENDING",
        transactionLink: "",
      };
    case "MINT_FAILED":
      return {
        ...state,
        mintStatus: "FAILURE",
        errorMessage: action.payload.errorMessage,
      };
    case "MINT_SUCCESS":
      return {
        ...state,
        mintStatus: "SUCCESS",
        transactionLink: action.payload.transactionLink,
      };
    case "MINT_RESET":
      return {
        ...state,
        mintStatus: "",
        transactionLink: "",
        errorMessage: "",
      };
    case "SET_TOTALS":
      return {
        ...state,
        maxSupply: action.payload.maxSupply,
        totalSupply: action.payload.totalSupply,
      };
    default:
      return state;
  }
};
export default reducer;
