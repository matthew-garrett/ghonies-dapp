import styled from "styled-components";

export const ActionButton = styled.button`
  padding: 15px;
  border-radius: 7px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  background: #e2d8e1;
  color: #434043;
  font-weight: 700;
  font-size: 20px;
  border: none;
  transition: ease 0.5s;
  &:hover {
    background: #b4acb4;
  }
`;

export const HomeWrapper = styled.div`
  @media screen and (max-width: 600px) {
    margin-top: 50px;
  }
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
