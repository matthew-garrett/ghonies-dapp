import React, { useState, useEffect } from "react";
import ghonie155 from "../../images/ghonies/155-nobg.png";
import ghonie197 from "../../images/ghonies/197-nobg.png";
import ghonie668 from "../../images/ghonies/668-nobg.png";
import ghonie730 from "../../images/ghonies/730-nobg.png";
import ghonie818 from "../../images/ghonies/818-nobg.png";
import ghonie789 from "../../images/ghonies/789-nobg.png";
import ghonie635 from "../../images/ghonies/635-nobg.png";
import ghoniesHeaderAlt from "../../images/ghonies-jumbo-alt.png";
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
import {
  ContentBlock,
  Description,
  HomeWrapper,
  GhoniesJumbo,
  GhoniesWrapper,
  DisplayGhonie,
} from "./Home.styled";

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
        <GhoniesJumbo src={ghoniesHeaderAlt} />
        <ContentBlock style={{ marginTop: "20px" }}>
          <GhoniesWrapper>
            <DisplayGhonie src={ghonie155}></DisplayGhonie>
            <DisplayGhonie src={ghonie635}></DisplayGhonie>
            <DisplayGhonie src={ghonie668}></DisplayGhonie>
            <DisplayGhonie src={ghonie730}></DisplayGhonie>
            <DisplayGhonie src={ghonie818}></DisplayGhonie>
            <DisplayGhonie src={ghonie789}></DisplayGhonie>
            <DisplayGhonie src={ghonie197}></DisplayGhonie>
          </GhoniesWrapper>
          <Description>
            <h3>Arriving early 2022</h3>
            10,000 brutally affectionate NFT’s on the Ethereum blockchain.
            Hand-drawn and programmatically assembled in Brooklyn, New York.
            Community-centered through revenue sharing, IRL milestones,
            transparency and a long-term vision. Fulfill your pastriotic duty
            and join us!
          </Description>
        </ContentBlock>
        {/* <Description>
            <h3>Arriving early 2022</h3>
            10,000 brutally affectionate NFT’s on the Ethereum blockchain.
            Hand-drawn and programmatically assembled in Brooklyn, New York.
            Community-centered through revenue sharing, IRL milestones,
            transparency and a long-term vision. Fulfill your pastriotic duty
            and join us!
          </Description> */}
        {/* <Logo src={logo} className="logo" alt="logo"></Logo> */}
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
