import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import Box from "@mui/material/Box";

export const TraitContainer = styled.div`
  margin-left: 40px;
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
  z-index: 1;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    top: 35%;
    display: block;
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

export const DisplayGhonie = styled.img`
  height: 120px;
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
    height: 90px;
  }
`;

export const ModalGhonie = styled.img`
  height: 400px;
  outline: none;
  border: none;
  z-index: 9;
  background-color: transparent;
  :focus {
    outline: none;
    border: none;
    background-color: transparent;
  }
  :active {
    background-color: transparent;
    outline: none;
    border: none;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
  }
`;
