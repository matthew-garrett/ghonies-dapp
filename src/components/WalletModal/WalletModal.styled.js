import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const CustomModal = styled(Modal)``;

export const ModalContentWrapper = styled.div`
  width: 700px;
  height: 300px;
  margin: auto;
  margin-top: 10%;
  background-color: #e2d8e1;
  color: #161013;
  border-radius: 10px;
  cursor: pointer;
`;

export const MetaMaskOption = styled.div`
  width: 100%;
  height: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  transition: ease 0.5s;
  &:hover {
    background: #b4acb4;
  }
`;
export const WalletOptionsWrapper = styled.div`
  display: flex;
  height: 50%;
  border-top: 1px solid #161013;
  text-align: center;
`;
export const CoinBaseOption = styled.div`
  width: 50%;
  border-right: 1px solid #161013;
  border-bottom-left-radius: 10px;
  transition: ease 0.5s;
  &:hover {
    background: #b4acb4;
  }
`;

export const WalletConnectOption = styled.div`
  width: 50%;
  border-bottom-right-radius: 10px;
  transition: ease 0.5s;
  &:hover {
    background: #b4acb4;
  }
`;

export const MetaMaskIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px;
`;
