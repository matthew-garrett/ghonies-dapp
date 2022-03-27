import styled from "styled-components";

export const SocialWrapper = styled.div`
  text-align: right;
  margin: auto;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-bottom: 50px;
    margin-top: 10px;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 10px;
`;
