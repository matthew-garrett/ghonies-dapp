import React, { useState, useEffect } from "react";
import logo from "../../images/blueprint-ghonie.svg";
import TopNav from "../TopNav";
import Minter from "../Minter";
import ErrorHandler from "../ErrorHandler";
import Footer from "../Footer";
import RoadMap from "../RoadMap";
import Faq from "../Faq";
import { useDispatch } from "react-redux";
import WalletModal from "../WalletModal";
import { useWeb3React } from "@web3-react/core";
import {
  checkMintStatus,
  checkConnectStatus,
  getTotalsPending,
} from "../../redux/actions";
import { ContentBlock, Logo, Description, HomeWrapper } from "./Home.styled";

const Home = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const handleClose = () => setShowWalletModal(false);
  const { account } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      dispatch(checkMintStatus(account));
      dispatch(getTotalsPending());
    }
  }, [account, dispatch]);

  useEffect(() => {
    dispatch(checkConnectStatus());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <TopNav setShowWalletModal={setShowWalletModal} />
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
      <Minter />
      <ErrorHandler />
      <WalletModal
        showWalletModal={showWalletModal}
        handleClose={handleClose}
      ></WalletModal>
      <RoadMap />
      <Faq />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
