import { put, takeEvery, all } from "redux-saga/effects";
import { testNFT, whiteListMint, publicMint } from "../../utils/wallet";
import {
  whiteListMintActive,
  setErrorMessage,
  mintSuccess,
  connectActive,
  mintReset,
  publicMintActive,
  setTotals,
} from "../actions";

// WALLET CONNECT NOTES;
// - Connect Wallet (handled in UI)
// - Listen for wallet connected

// - CHECK if publicMint is paused or not
// - IF publicMint is active display public mint stuff
// - IF publicMint is paused display nothing

// - IF publicMint is paused check if whiteListMint is active
// - IF whiteListMint is paused display nothing
// - IF whiteListMint is active check merkle proof
// - IF merkle proof is valid display whiteListMint stuff
// - IF merkle proof is invalid display error "you are not on the whitelist"

function* whiteListMintStatus(address) {
  const whiteListMintPaused = yield testNFT.methods
    .whiteListMintPaused()
    .call();
  if (!whiteListMintPaused) {
    const proof = yield fetch(
      `https://okinddneqb.execute-api.us-east-2.amazonaws.com/proof/${address}`,
      { mode: "cors" }
    ).then((resp) => resp.json());
    if (proof.length) {
      yield put(whiteListMintActive(proof));
    } else {
      yield put(setErrorMessage("Sorry, you are not on the whitelist"));
    }
  }
}

function* checkMintStatus({ payload: { address } }) {
  const publicMintPaused = yield testNFT.methods.publicMintPaused().call();
  if (publicMintPaused) {
    yield whiteListMintStatus(address);
  } else {
    yield put(publicMintActive());
  }
}

function* getTotals() {
  const totalSupply = yield testNFT.methods.totalSupply().call();
  const maxSupply = yield testNFT.methods.maxSupply().call();
  yield put(setTotals(totalSupply, maxSupply));
}

function* checkConnectStatus() {
  const publicMintPaused = yield testNFT.methods.publicMintPaused().call();
  const whiteListMintPaused = yield testNFT.methods
    .whiteListMintPaused()
    .call();
  if (!publicMintPaused || !whiteListMintPaused) {
    yield put(connectActive());
  }
}

function* handleWhiteListMint({ payload: { account, tokenCount, proof } }) {
  const result = yield whiteListMint(account, tokenCount, proof).then(
    (data) => data
  );
  if (result.success) {
    yield put(mintSuccess(result.transactionLink));
  } else {
    yield put(mintReset(result.message));
  }
}

function* handlePublicMint({ payload: { account, tokenCount } }) {
  const result = yield publicMint(account, tokenCount).then((data) => data);
  if (result.success) {
    yield put(mintSuccess(result.transactionLink));
  } else {
    yield put(mintReset(result.message));
  }
}

function* actionWatcher() {
  yield takeEvery("CHECK_MINT_STATUS", checkMintStatus);
  yield takeEvery("WHITE_LIST_MINT_PENDING", handleWhiteListMint);
  yield takeEvery("PUBLIC_MINT_PENDING", handlePublicMint);
  yield takeEvery("CHECK_CONNECT_STATUS", checkConnectStatus);
  yield takeEvery("GET_TOTALS_PENDING", getTotals);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
