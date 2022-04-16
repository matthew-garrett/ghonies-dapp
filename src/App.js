import React from "react";
import Home from "./components/Home";
import {
  init,
  useConnectWallet,
  useSetChain,
  useWallets,
} from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import trezorModule from "@web3-onboard/trezor";
import ledgerModule from "@web3-onboard/ledger";
import walletConnectModule from "@web3-onboard/walletconnect";
import walletLinkModule from "@web3-onboard/coinbase";
import IconOne from "./images/newRoadMap/icon1.svg";
import logo from "./images/ghonies-footer-logo.svg";
import "./App.css";

const injected = injectedModule();
const walletLink = walletLinkModule();
const walletConnect = walletConnectModule();

const ledger = ledgerModule();

const trezorOptions = {
  email: "test@test.com",
  appUrl: "https://www.blocknative.com",
};

const trezor = trezorModule(trezorOptions);

const INFURA_ID = process.env.REACT_APP_INFURA_ID;

init({
  wallets: [ledger, trezor, walletConnect, walletLink, injected],
  chains: [
    //   {
    //     id: "0x1",
    //     token: "ETH",
    //     label: "Ethereum Mainnet",
    //     rpcUrl: "https://mainnet.infura.io/v3/ababf9851fd845d0a167825f97eeb12b",
    //   },
    {
      id: "0x4",
      token: "rETH",
      label: "Ethereum Rinkeby Testnet",
      rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
    },
  ],
  appMetadata: {
    // app name
    // name: string
    // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
    // icon: string
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    // logo?: string
    // description of app
    // description?: string
    // url to a getting started guide for app
    // gettingStartedGuide?: string
    // url that points to more information about app
    // explore?: string
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    // recommendedInjectedWallets?: RecommendedInjectedWallets[]

    name: "Ghonies Dapp",
    icon: IconOne,
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    logo: logo,
    description: "Ghonies NFT minting dapp",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
  },
  i18n: {
    en: {
      connect: {
        selectingWallet: {
          header: "custom text header",
          sidebar: {
            heading: "new stuff",
            subheading: "more stuff",
            paragraph: "paragraph",
          },
        },
      },
    },
  },
});

function App() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();
  const connectedWallets = useWallets();

  // <div style={{ background: "gray" }}>
  //   <button onClick={() => connect()}>
  //     {connecting ? "connecting" : "connect"}
  //   </button>
  //   {wallet && (
  //     <div>
  //       <label>Switch Chain</label>
  //       {settingChain ? (
  //         <span>Switching chain...</span>
  //       ) : (
  //         <select
  //           onChange={({ target: { value } }) =>
  //             console.log("onChange called") || setChain({ chainId: value })
  //           }
  //           value={connectedChain?.id}
  //         >
  //           {chains.map(({ id, label }) => {
  //             return <option value={id}>{label}</option>;
  //           })}
  //         </select>
  //       )}
  //       <button onClick={() => disconnect(wallet)}>Disconnect Wallet</button>
  //     </div>
  //   )}

  //   {connectedWallets.map(({ label, accounts }, index) => {
  //     return (
  //       <div key={index}>
  //         <div>{label}</div>
  //         <div>Accounts: {JSON.stringify(accounts, null, 2)}</div>
  //       </div>
  //     );
  //   })}
  // </div>

  return <Home />;
}

export default App;
