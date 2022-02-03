import React, { useState, useEffect } from "react";
import logo from "../../images/blueprint-ghonie.svg";
// import TopNav from "../TopNav";
// import Footer from "../Footer";
// import RoadMap from "../RoadMap";
// import Faq from "../Faq";
import WalletModal from "../WalletModal";
import { useWeb3React } from "@web3-react/core";
import {
  ContentBlock,
  Logo,
  Description,
  HomeWrapper,
  ActionButton,
  ButtonWrapper,
} from "./Home.styled";

const Home = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [whiteListProof, setWhiteListProof] = useState([]);
  const [validWhiteListUser, setValidWhiteListUser] = useState([]);
  const handleClose = () => setShowWalletModal(false);
  const { active, account } = useWeb3React();

  // Whitelist Mint flow:
  // - Get account
  // - Get proof from account
  // - Get NFT amount and ETH amount to send
  // - Call whitelist mint funtion with NFT amount and ETH amount and whitelist proof

  useEffect(() => {
    if (account) {
      fetch(
        `https://g3jy4in7b7.execute-api.us-east-2.amazonaws.com/proof/${account}`
      )
        .then((resp) => resp.json())
        .then((whiteListProof) => {
          console.log({ whiteListProof });
          if (whiteListProof.length) {
            setValidWhiteListUser(true);
            setWhiteListProof(whiteListProof);
          }
          setValidWhiteListUser(false);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [active, account]);

  return (
    <HomeWrapper>
      {/* <TopNav /> */}
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
        <ActionButton onClick={() => setShowWalletModal(!showWalletModal)}>
          CONNECT
        </ActionButton>
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
