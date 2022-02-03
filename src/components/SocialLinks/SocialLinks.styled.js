import styled from "styled-components";

export const SocialWrapper = styled.div`
  text-align: center;
  position: absolute;
  margin: auto;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  z-index: 2;
  @media screen and (max-width: 600px) {
    margin-bottom: 50px;
    margin-top: 10px;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
`;

export const SocialIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px;
`;
