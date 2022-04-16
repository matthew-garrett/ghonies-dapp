import React from "react";
import roadmap from "../../images/roadmap-letters-cropped.svg";
import faqLogo from "../../images/faq-cropped.svg";
import SocialLinks from "../SocialLinks";
import { useConnectWallet } from "@web3-onboard/react";
import {
  TopNavWrapper,
  NavItem,
  FaqItem,
  RoadmapItem,
  NavItemWrapper,
  ActionButton,
} from "./TopNav.styled";

const TopNav = ({ setShowWalletModal }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
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
        {wallet === null && (
          <ActionButton onClick={() => connect()}>CONNECT</ActionButton>
        )}
      </div>
    </TopNavWrapper>
  );
};

export default TopNav;
