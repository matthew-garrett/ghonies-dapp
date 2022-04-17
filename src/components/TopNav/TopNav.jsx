import React from "react";
import roadmap from "../../images/roadmap-letters-cropped.svg";
import faqLogo from "../../images/faq-cropped.svg";
import whitepaperLogo from "../../images/whitepaper-cropped.svg";
import SocialLinks from "../SocialLinks";
import {
  TopNavWrapper,
  NavLink,
  NavItem,
  FaqItem,
  RoadmapItem,
  NavItemWrapper,
  WhitePaperItem,
  // ActionButton,
} from "./TopNav.styled";

const TopNav = ({ setShowWalletModal }) => {
  return (
    <TopNavWrapper id="top">
      <NavItemWrapper>
        <NavLink
          activeClass="active"
          to="roadmap"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <RoadmapItem src={roadmap} alt="roadmap" />
        </NavLink>
        <NavLink
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <FaqItem src={faqLogo} alt="faq" />
        </NavLink>
        <NavItem
          activeClass="active"
          target="_blank"
          href="https://ghonies-dapp.s3.us-east-2.amazonaws.com/whitepaper.pdf"
        >
          <WhitePaperItem src={whitepaperLogo} alt="whitepaper" />
        </NavItem>
        <SocialLinks />
      </NavItemWrapper>
      {/* {connectActive && (
        <ActionButton onClick={() => setShowWalletModal(true)}>
          {account ? account : "CONNECT"}
        </ActionButton>
      )} */}
    </TopNavWrapper>
  );
};

export default TopNav;
