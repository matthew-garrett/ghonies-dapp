import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import Box from "@mui/material/Box";

export const TraitContainer = styled.div`
  margin-left: 40px;
  @media screen and (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const CustomCloseIcon = styled(CloseIcon)`
  position: absolute;
  color: white;

  cursor: pointer;
  @media screen and (max-width: 600px) {
    left: 75%;
    top: 0;
  }
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  color: white;
  height: 750px;
  width: 750px;
  z-index: 1;
  @media screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  z-index: 9;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    padding: 60px 10px;
    background: #161013;
    border-radius: 15px;
    width: 80%;
  }
`;

export const TraitText = styled(Box)`
  text-align: left;
  margin-top: 20px;
  bgcolor: none;
  border: none;
  outline: none;
  p: 4;
  width: 100%;
  font-size: 20px;
`;

export const GhoniesWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  max-width: 900px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ModalGhonie = styled("img")(
  ({ open }) => `
  height: 400px;
  z-index: 1;
  outline: none !important;
  border: none !important;
  margin: 0px !important;
  padding: 0 !important;
  background-color: transparent;
  border-image-width: 0px;
  
  :focus-visible {
    outline: none !important;
    border: none !important;
    margin: 0px !important;
    padding: 0 !important;
    background-color: transparent;
    border-image-width: 0px;
  }
  :focus {
    outline: none !important;
    border: none !important;
    margin: 0px !important;
    padding: 0 !important;
    background-color: transparent;
    border-image-width: 0px;
  }
  :active {
    outline: none !important;
    border: none !important;
    margin: 0px !important;
    padding: 0 !important;
    background-color: transparent;
    border-image-width: 0px;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
    display: ${!open ? "none" : ""}
  }
`
);

export const DisplayGhonie = styled("img")(
  ({ type }) => `
  height: ${type === "filled" ? "130px" : "120px"};
  margin: 25px;
  padding: 10px;
  cursor: pointer;
  transition-duration: 0.2s;
  transform: scale(1);
  @media screen and (min-width: 600px) {
    :hover {
      transition-duration: 0.2s;
      transform: scale(1.5);
    }
  }
  @media screen and (max-width: 600px) {
    height: ${type === "filled" ? "94px" : "90px"};
    padding: ${type === "filled" ? "9px" : "10px"};
  }
  @media screen and (max-width: 375px) {
    height: ${type === "filled" ? "74px" : "70px"};
    padding: ${type === "filled" ? "10px" : "10px"};
    margin: 10px;
  }
  `
);
