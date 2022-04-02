import React from "react";
// import discord from "../../images/discord-logo.svg";
import insta from "../../images/instagram-logo.svg";
import twitter from "../../images/twitter-logo.svg";
// import youtube from "../../images/youtube-logo.svg";
import { SocialWrapper, SocialLink, SocialIcon } from "./SocialLinks.styled";

export const SocialLinks = () => {
  return (
    <SocialWrapper>
      {/* <SocialLink href="https://discord.gg/EWUfA2tYyb" target="_blank">
        <SocialIcon src={discord} className="social-logo" alt="discord" />
      </SocialLink> */}
      <SocialLink href="https://twitter.com/GhoniesCrypto" target="_blank">
        <SocialIcon src={twitter} className="social-logo" alt="logo" />
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/ghoniescrypto/"
        target="_blank"
      >
        <SocialIcon src={insta} className="social-logo" alt="insta" />
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/channel/UCsYluGQY2asATEQIknK2Clg"
        target="_blank"
      >
        {/* <SocialIcon src={youtube} className="social-logo" alt="logo" /> */}
      </SocialLink>
    </SocialWrapper>
  );
};

export default SocialLinks;
