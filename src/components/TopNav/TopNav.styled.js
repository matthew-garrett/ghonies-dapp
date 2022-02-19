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
  margin-bottom: 10vh;
  padding-bottom: 20px;
  border-bottom: 1px solid;
`;

export const ActionButton = styled.button`
  padding: 15px;
  border-radius: 7px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  background: #e2d8e1;
  color: #434043;
  white-space: nowrap;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 20px;
  margin-right: 40px;
  border: none;
  transition: ease 0.5s;
  &:hover {
    background: #b4acb4;
  }
`;
