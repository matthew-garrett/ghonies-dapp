import React, { useState, useEffect } from "react";
import logo from "../../images/blueprint-ghonie.svg";
import TopNav from "../TopNav";
import TokenCounter from "../TokenCounter";
// import Footer from "../Footer";
// import RoadMap from "../RoadMap";
// import Faq from "../Faq";
import { css } from "@emotion/react";
import WalletModal from "../WalletModal";
import { useWeb3React } from "@web3-react/core";
import { whiteListMint, publicMint, getNetworkId } from "../../utils/wallet";
import PuffLoader from "react-spinners/PuffLoader";
import {
  ContentBlock,
  Logo,
  Description,
  HomeWrapper,
  ActionButton,
  ButtonWrapper,
  MintInProgress,
} from "./Home.styled";

const Home = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [tokenCount, setTokenCount] = useState(1);
  const [whiteListProof, setWhiteListProof] = useState([]);
  const [validProof, setValidProof] = useState(false);
  const [mintStatus, setMintStatus] = useState({ status: "", data: {} });
  const handleClose = () => setShowWalletModal(false);
  const { account } = useWeb3React();
  // Whitelist Mint flow:
  // - Get account
  // - Get proof from account
  // - Get NFT amount and ETH amount to send
  // - Call whitelist mint funtion with NFT amount and ETH amount and whitelist proof

  useEffect(() => {
    if (account) {
      fetch(
        `https://okinddneqb.execute-api.us-east-2.amazonaws.com/proof/${account}`,
        { mode: "cors" }
      )
        .then((resp) => resp.json())
        .then((proof) => {
          if (proof.length) {
            console.log({ proof });
            setWhiteListProof(proof);
            setValidProof(true);
          } else {
            setValidProof(false);
          }
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [account, setValidProof]);

  const handleWhiteListMint = () => {
    setMintStatus({ status: "pending", data: {} });
    whiteListMint(account, tokenCount, whiteListProof).then((data) => {
      if (data.success === true) {
        setMintStatus({ status: "success", data: data.resp });
      } else {
        setMintStatus({ status: "error", data: data.resp });
      }
    });
  };

  // const handlePublicMint = () => {
  //   setMintStatus({ status: "pending", data: {} });
  //   publicMint(account, tokenCount).then((data) => {
  //     if (data.success === true) {
  //       setMintStatus({ status: "success", data: data.resp });
  //     } else {
  //       setMintStatus({ status: "error", data: data.resp });
  //     }
  //   });
  // };

  const override = css`
    display: block;
    margin: 30px auto;
    border-color: red;
  `;
  // const loading = account && mintStatus.status === "pending";
  return (
    <HomeWrapper>
      <TopNav setShowWalletModal={setShowWalletModal} account={account} />
      <ContentBlock>
        <Logo src={logo} className="logo" alt="logo"></Logo>
        <Description>
          <h2>Arriving early 2022</h2>
          10,000 brutally affectionate NFT’s on the Ethereum blockchain.
          Hand-drawn and programmatically assembled in Brooklyn, New York.
          Community-centered through revenue sharing, IRL milestones,
          transparency and a long-term vision. Fulfill your pastriotic duty and
          join us!
        </Description>
      </ContentBlock>
      <ButtonWrapper>
        {account && mintStatus.status === "pending" && (
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
        {account && mintStatus.status === "success" && (
          <>
            <div>Mint success!</div>
            <a href={mintStatus.data} target="_blank" rel="noopener noreferrer">
              Etherscan transaction
            </a>
          </>
        )}
        {account && validProof && mintStatus.status === "" && (
          <>
            <TokenCounter
              setTokenCount={setTokenCount}
              tokenCount={tokenCount}
            ></TokenCounter>
            <ActionButton onClick={() => handleWhiteListMint()}>
              MINT WHITELIST
            </ActionButton>
          </>
        )}
        {account && !validProof && mintStatus.status === "" && (
          <MintInProgress>Sorry you're not on the whitelist</MintInProgress>
        )}
        {/* {account && (
          <ActionButton onClick={() => handlePublicMint()}>
            PUBLIC MINT
          </ActionButton>
        )} */}
      </ButtonWrapper>

      <WalletModal
        showWalletModal={showWalletModal}
        handleClose={handleClose}
      ></WalletModal>
      {/* <RoadMap /> */}
      {/* <Faq /> */}
      {/* <Footer /> */}
    </HomeWrapper>
  );
};

export default Home;
