import styled, { css } from "styled-components";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionWrapper = styled(Accordion)`
  ${() => css`
    background: #2d272a !important;
    color: #e2d8e1 !important;
    font-family: "Montserrat", sans-serif;
  `}
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
  ${() => css`
    color: #e2d8e1 !important;
  `}
`;

export const FaqWrapper = styled.div`
  padding: 15px;
  display: block;
  max-width: 1100px;
  margin: auto;
  margin-bottom: 250px;
  margin-top: 150px;
  @media screen and (max-width: 600px) {
    margin: 15px;
    padding: 0px;
    margin-bottom: 150px;
  }
`;

export const ImageHeader = styled.img`
  height: 45px;
  pointer-events: none;
  margin-top: 50px;
  margin-bottom: 50px;
`;
