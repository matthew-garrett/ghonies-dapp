import styled from "styled-components";

export const ActionButton = styled.button`
  z-index: 2;
  font-size: 20px;
  padding: 15px;
  border-radius: 7px;
  cursor: pointer;
`;

export const HomeWrapper = styled.div`
  margin-top: 20vh;
  @media screen and (max-width: 600px) {
    margin-top: 50px;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const ContentBlock = styled.div`
  padding: 15px;
  display: flex;
  max-width: 1100px;
  margin: auto;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  height: 350px;
  pointer-events: none;
  flex: 1;
  @media screen and (max-width: 600px) {
    height: 260px;
  }
`;

export const Description = styled.div`
  flex: 2;
  margin-top: 10px;
  text-align: left;
  font-size: 20px;
  width: 80%;
  line-height: 35px;
  color: white;
  padding: 35px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 10px;
    h3 {
      font-size: 16px;
    }
  }
`;
