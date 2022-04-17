import styled, { css } from "styled-components";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionWrapper = styled(Accordion)`
  ${() => css`
    background: #2d272a !important;
    color: #e2d8e1 !important;
    font-family: "Montserrat", sans-serif;
    a {
      color: #e2d8e1 !important;
    }
  `}
`;

export const ImageHeader = styled.img`
  width: 167px;
  pointer-events: none;
  margin-top: 50px;
  @media screen and (max-width: 600px) {
    padding-left: 0px;
  }
`;

export const WhitePaperLink = styled.a`
  display: flex;
  justify-content: center;
`;

export const WhitePaperImage = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    width: 290px;
    margin-bottom: 100px;
    display: block;
  }
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
  ${() => css`
    color: #e2d8e1 !important;
  `}
`;

export const FaqWrapper = styled.div`
  padding: 15px;
  display: block;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 250px;
  margin-top: 60px;
  @media screen and (max-width: 600px) {
    margin: 15px;
    padding: 0px;
    margin-bottom: 100px;
  }
`;
