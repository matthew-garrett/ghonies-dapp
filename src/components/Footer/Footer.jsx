import React from "react";
import MailChimpWrapper from "../MailChimpWrapper";
import discord from "../../discord-logo.svg";
import insta from "../../instagram-logo.svg";
import twitter from "../../twitter-logo.svg";
import youtube from "../../youtube-logo.svg";
import logo from "../../ghonies-logo.svg";
import {
  FooterWrapper,
  SocialWrapper,
  FooterText,
  CenterWrapper,
  Logo,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <MailChimpWrapper />
      <Logo src={logo} alt="logo"></Logo>
      <CenterWrapper>
        <SocialWrapper className="social">
          <img src={discord} className="social-logo" alt="logo" />
          <img src={insta} className="social-logo" alt="logo" />
          <img src={twitter} className="social-logo" alt="logo" />
          <img src={youtube} className="social-logo" alt="logo" />
        </SocialWrapper>
        <FooterText className="footer-text">&copy; 2021 Ghonies</FooterText>
      </CenterWrapper>
    </FooterWrapper>
  );
};

export default Footer;
