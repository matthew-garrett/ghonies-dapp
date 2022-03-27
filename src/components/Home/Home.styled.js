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
  justify-content: center;
`;

export const Logo = styled.img`
  height: 500px;
  pointer-events: none;
  @media screen and (max-width: 600px) {
    height: 260px;
  }
`;

export const GhoniesJumbo = styled.img`
  height: 280px;
  pointer-events: none;
  margin: auto;

  @media screen and (max-width: 1000px) {
    height: 30vw;
  }
`;

export const Description = styled.div`
  width: 75%;
  text-align: center;
  margin-top: 50px;
  font-size: 16px;
  line-height: 45px;
  font-weight: bold;
  color: #e2d8e1;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 10px;
    h1 {
      font-size: 16px;
    }
  }
`;
