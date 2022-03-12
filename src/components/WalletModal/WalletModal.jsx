import React from "react";
import { useWeb3React } from "@web3-react/core";
import MetaMask from "../../images/metamask.svg";
import {
  CustomModal,
  ModalContentWrapper,
  MetaMaskOption,
  WalletOptionsWrapper,
  CoinBaseOption,
  WalletConnectOption,
  MetaMaskIcon,
} from "./WalletModal.styled";
import { injected, walletlink, walletConnect } from "../../utils/wallet";

const WalletModal = ({ showWalletModal, handleClose }) => {
  const { activate } = useWeb3React();
  const walletConnectConnector = walletConnect;

  const handleWalletConnect = async (walletType) => {
    if (walletType === "coinbase") {
      await activate(walletlink);
    } else if (walletType === "metamask") {
      await activate(injected);
    } else {
      // TODO: fix this
      await activate(walletConnectConnector);
    }
    handleClose();
  };

  return (
    <>
      <CustomModal
        open={showWalletModal}
        onClose={handleClose}
        onBackdropClick={handleClose}
      >
        <ModalContentWrapper>
          <MetaMaskOption onClick={() => handleWalletConnect("metamask")}>
            <div>
              <div>METAMASK</div>
              <MetaMaskIcon src={MetaMask}></MetaMaskIcon>
            </div>
          </MetaMaskOption>
          <WalletOptionsWrapper>
            <CoinBaseOption onClick={() => handleWalletConnect("coinbase")}>
              COINBASE WALLET
            </CoinBaseOption>
            <WalletConnectOption
              onClick={() => handleWalletConnect("walletconnect")}
            >
              WALLET CONNECT
            </WalletConnectOption>
          </WalletOptionsWrapper>
        </ModalContentWrapper>
      </CustomModal>
    </>
  );
};

export default WalletModal;
