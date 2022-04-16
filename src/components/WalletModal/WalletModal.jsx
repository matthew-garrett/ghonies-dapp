import React from "react";
import { useConnect, useAccount } from "wagmi";
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

const WalletModal = ({ showWalletModal, handleClose }) => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  const handleConnect = (connector) => {
    handleClose();
    connect(connector);
  };

  return (
    <>
      <CustomModal
        open={showWalletModal}
        onClose={handleClose}
        onBackdropClick={handleClose}
      >
        <ModalContentWrapper>
          {!connectData.connected &&
            connectData.connectors.map((connector) => {
              return (
                <MetaMaskOption
                  disabled={!connector.ready}
                  key={connector.id}
                  onClick={() => handleConnect(connector)}
                >
                  {connector.name}
                  {!connector.ready && " (unsupported)"}
                </MetaMaskOption>
              );
            })}
          {connectData.connected && (
            <MetaMaskOption onClick={disconnect}>
              Disconnect Wallet
            </MetaMaskOption>
          )}

          {connectError && (
            <div>{connectError?.message ?? "Failed to connect"}</div>
          )}
        </ModalContentWrapper>
        {/* <ModalContentWrapper>
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
        </ModalContentWrapper> */}
      </CustomModal>
    </>
  );
};

export default WalletModal;
