import React from "react";
//import { useConnectActive } from "../../redux/selectors";
//import { useWeb3React } from "@web3-react/core";
import roadmap from "../../images/roadmap-letters-cropped.svg";
import faqLogo from "../../images/faq-cropped.svg";
import SocialLinks from "../SocialLinks";
import {
  TopNavWrapper,
  NavItem,
  FaqItem,
  RoadmapItem,
  NavItemWrapper,
  // ActionButton,
} from "./TopNav.styled";

const TopNav = ({ setShowWalletModal }) => {
  // const connectActive = useConnectActive();
  // const { account } = useWeb3React();
  return (
    <TopNavWrapper id="top">
      <NavItemWrapper>
        {/* <NavItem
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          duration={1000}
        >
          The Ghonies
        </NavItem> */}

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
      {/* {connectActive && (
        <ActionButton onClick={() => setShowWalletModal(true)}>
          {account ? account : "CONNECT"}
        </ActionButton>
      )} */}
    </TopNavWrapper>
  );
};

export default TopNav;
