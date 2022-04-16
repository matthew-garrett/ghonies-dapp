import React from "react";
import { useAccount, useConnect } from "wagmi";
import roadmap from "../../images/roadmap-letters-cropped.svg";
import faqLogo from "../../images/faq-cropped.svg";
import SocialLinks from "../SocialLinks";
import {
  TopNavWrapper,
  NavItem,
  FaqItem,
  RoadmapItem,
  NavItemWrapper,
  ActionButton,
} from "./TopNav.styled";

const TopNav = ({ setShowWalletModal }) => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  return (
    <TopNavWrapper id="top">
      <NavItemWrapper>
        <NavItem
          activeClass="active"
          to="roadmap"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <RoadmapItem src={roadmap} alt="roadmap" />
        </NavItem>
        <NavItem
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <FaqItem src={faqLogo} alt="faq" />
        </NavItem>
        <SocialLinks />
      </NavItemWrapper>
      <div style={{ margin: "auto" }}>
        <ActionButton onClick={() => setShowWalletModal(true)}>
          {!connectData.connected ? "CONNECT" : accountData.address}
        </ActionButton>
      </div>
    </TopNavWrapper>
  );
};

export default TopNav;
