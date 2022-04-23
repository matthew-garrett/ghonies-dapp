import React from "react";
import MailChimpWrapper from "../MailChimpWrapper";
import discord from "../../images/discord-logo.svg";
import insta from "../../images/instagram-logo.svg";
import twitter from "../../images/twitter-logo.svg";
// import youtube from "../../images/youtube-logo.svg";
import logo from "../../images/ghonies-footer-logo.svg";
import {
  FooterWrapper,
  SocialWrapper,
  FooterText,
  CenterWrapper,
  SocialLink,
  Logo,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <MailChimpWrapper />
      <Logo src={logo} alt="logo"></Logo>
      <CenterWrapper>
        <SocialWrapper className="social">
          <SocialLink href="https://discord.gg/rjsz6sKz63" target="_blank">
            <img src={discord} className="social-logo" alt="logo" />
          </SocialLink>
          <SocialLink href="https://twitter.com/GhoniesCrypto" target="_blank">
            <img src={twitter} className="social-logo" alt="logo" />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/ghoniescrypto/"
            target="_blank"
          >
            <img src={insta} className="social-logo" alt="logo" />
          </SocialLink>
          {/* <SocialLink
            href="https://www.youtube.com/channel/UCsYluGQY2asATEQIknK2Clg"
            target="_blank"
          >
            <img src={youtube} className="social-logo" alt="logo" />
          </SocialLink> */}
        </SocialWrapper>
        <FooterText className="footer-text">&copy; 2022 Ghonies</FooterText>
      </CenterWrapper>
    </FooterWrapper>
  );
};

export default Footer;
