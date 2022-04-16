import React, { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { useDispatch } from "react-redux";
import TokenCounter from "../TokenCounter";
import { css } from "@emotion/react";
import {
  MintInProgress,
  ActionButton,
  ButtonWrapper,
  MinterContainer,
  TranactionLink,
  MintSuccessWrapper,
} from "./Minter.styled";
import {
  useWhiteListMintActive,
  useProof,
  useMintStatus,
  useTranactionLink,
  usePublicMintStatus,
} from "../../redux/selectors";
import {
  whiteListMintPending,
  publicMintPending,
  checkMintStatus,
} from "../../redux/actions";
import { useWeb3React } from "@web3-react/core";
export const Minter = () => {
  const { account, chainId } = useWeb3React();
  const [tokenCount, setTokenCount] = useState(1);
  const whiteListMintActive = useWhiteListMintActive();
  const publicMintActive = usePublicMintStatus();
  const tranactionLink = useTranactionLink();
  const mintStatus = useMintStatus();
  const dispatch = useDispatch();
  const proof = useProof();

  const override = css`
    display: block;
    margin: 30px auto;
  `;

  const handleMint = () => {
    if (publicMintActive) {
      dispatch(publicMintPending(account, tokenCount));
    }
    if (whiteListMintActive) {
      dispatch(whiteListMintPending(account, tokenCount, proof));
    }
  };
  const showMinter = whiteListMintActive || publicMintActive;

  return (
    <MinterContainer>
      {showMinter && chainId === 4 && mintStatus === "" && (
        <ButtonWrapper>
          <TokenCounter
            setTokenCount={setTokenCount}
            tokenCount={tokenCount}
          ></TokenCounter>
          <ActionButton onClick={() => handleMint()}>MINT</ActionButton>
        </ButtonWrapper>
      )}
      {mintStatus === "PENDING" && (
        <MintInProgress>
          <div>Mint in progress</div>
          <PuffLoader
            color={"#e2d8e1"}
            loading={true}
            size={100}
            css={override}
          />
        </MintInProgress>
      )}
      {mintStatus === "SUCCESS" && (
        <MintSuccessWrapper>
          <div>Mint success!</div>
          <TranactionLink
            href={tranactionLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Etherscan transaction
          </TranactionLink>
        </MintSuccessWrapper>
      )}
    </MinterContainer>
  );
};

export default Minter;
