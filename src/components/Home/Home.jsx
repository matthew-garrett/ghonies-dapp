import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkConnectStatus } from "../../redux/actions";
import ghoniesHeaderAlt from "../../images/ghonies-jumbo-alt.png";
import TopNav from "../TopNav";
import Footer from "../Footer";
import RoadMap from "../RoadMap";
import Faq from "../Faq";
import Minter from "../Minter";
import WalletModal from "../WalletModal";
import GhonieViewer from "../GhonieViewer";
import {
  ContentBlock,
  Description,
  HomeWrapper,
  GhoniesJumbo,
} from "./Home.styled";

// checkConnectStatus

const Home = () => {
  const dispatch = useDispatch();
  const [showWalletModal, setShowWalletModal] = useState(false);
  const handleClose = () => setShowWalletModal(false);

  useEffect(() => {
    dispatch(checkConnectStatus());
  }, [dispatch, checkConnectStatus]);

  return (
    <HomeWrapper>
      <TopNav setShowWalletModal={setShowWalletModal} />
      <ContentBlock>
        <GhoniesJumbo src={ghoniesHeaderAlt} />
        <ContentBlock style={{ marginTop: "20px" }}>
          <GhonieViewer />
          <Description>
            <h1>
              10,000 galactic forefathers of modern-day donuts coming to the
              Ethereum blockchain.{" "}
            </h1>
          </Description>
        </ContentBlock>
      </ContentBlock>
      <Minter />
      {/* <ErrorHandler /> */}
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
