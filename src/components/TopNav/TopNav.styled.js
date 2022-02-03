import styled, { css } from "styled-components";
import { Link } from "react-scroll";
export const NavItemWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

export const NavItem = styled(Link)`
  ${() => css`
    float: left;
    font-family: "Montserrat", sans-serif;
    margin-left: 20px;
    font-weight: 700;
    cursor: pointer;
  `}
`;

export const TopNavWrapper = styled.nav`
  display: flex;
  max-width: 1100px;
  margin: auto;
  margin-top: 20px;
`;
