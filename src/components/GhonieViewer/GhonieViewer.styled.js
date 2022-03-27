import styled from "styled-components";
import Box from "@mui/material/Box";

export const TraitContainer = styled.div`
  position: absolute;
  top: 38%;
  left: 95%;
  @media screen and (max-width: 600px) {
    top: 80%;
    left: 55%;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  p: 4;
  @media screen and (max-width: 600px) {
    top: 35%;
  }
`;

export const TraitText = styled(Box)`
  text-align: left;
  margin-top: 20px;
  transform: translate(-50%, -50%);
  bgcolor: none;
  border: none;
  outline: none;
  p: 4;
  width: 200px;
  font-size: 20px;
`;

export const GhoniesWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DisplayGhonie = styled.img`
  height: 230px;
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
    height: 145px;
  }
`;

export const ModalGhonie = styled.img`
  height: 700px;
  outline: none;
  border: none;
  :focus {
    outline: none;
    border: none;
  }
  :active {
    outline: none;
    border: none;
  }
  @media screen and (max-width: 600px) {
    height: 400px;
  }
`;
