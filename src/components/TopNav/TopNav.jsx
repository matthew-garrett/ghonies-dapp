import React from "react";
import { TopNavWrapper, NavItem, NavItemWrapper } from "./TopNav.styled";

const TopNav = () => {
  return (
    <TopNavWrapper id="top">
      <NavItemWrapper>
        <NavItem
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          duration={1000}
        >
          The Ghonies
        </NavItem>
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
      </NavItemWrapper>
    </TopNavWrapper>
  );
};

export default TopNav;
