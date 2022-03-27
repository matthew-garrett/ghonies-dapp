import React from "react";
//import { useConnectActive } from "../../redux/selectors";
//import { useWeb3React } from "@web3-react/core";
import SocialLinks from "../SocialLinks";
import {
  TopNavWrapper,
  NavItem,
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
          Road Map
        </NavItem>
        <NavItem
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Faq
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
