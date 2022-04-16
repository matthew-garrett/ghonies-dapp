import React, { useState } from "react";
import ghoniesHeaderAlt from "../../images/ghonies-jumbo-alt.png";
import TopNav from "../TopNav";
import Footer from "../Footer";
import RoadMap from "../RoadMap";
import Faq from "../Faq";
import WalletModal from "../WalletModal";
import GhonieViewer from "../GhonieViewer";
import Minter from "../Minter";
import ErrorHandler from "../ErrorHandler";
import {
  ContentBlock,
  Description,
  HomeWrapper,
  GhoniesJumbo,
} from "./Home.styled";

const Home = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const handleClose = () => setShowWalletModal(false);

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
