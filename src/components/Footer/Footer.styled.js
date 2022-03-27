import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 100px;
  max-width: 1100px;
  border-top: 1px solid #e2d8e1;
  bottom: 0;
  padding-top: 2%;
  padding-bottom: 2%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const CenterWrapper = styled.div`
  flex: 1;
  margin: auto;
  text-align: right;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const SocialWrapper = styled.div`
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin: 10px;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 40px;
      height: 40px;
      margin: 15px;
    }
  }
`;

export const FooterText = styled.div`
  font-size: 10px;
  color: #e2d8e1;
  margin-right: 10px;
`;

export const Logo = styled.img`
  pointer-events: none;
  flex: 1;
  margin: auto;
  height: 100px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
`;
