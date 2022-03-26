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

export const GhoniesWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DisplayGhonie = styled.img`
  height: 230px;
  padding: 10px;
  cursor: pointer;
  transition-duration: 0.2s;
  transform: scale(1);
  :hover {
    transition-duration: 0.2s;
    transform: scale(1.5);
  }
`;

export const Logo = styled.img`
  height: 500px;
  pointer-events: none;
  @media screen and (max-width: 600px) {
    height: 260px;
  }
`;

export const GhoniesJumbo = styled.img`
  height: 350px;
  pointer-events: none;
  margin: auto;

  @media screen and (max-width: 600px) {
    height: 150px;
  }
`;

export const Description = styled.div`
  width: 75%;
  margin-top: 10px;
  text-align: left;
  font-size: 16px;
  line-height: 35px;
  font-weight: bold;
  color: #e2d8e1;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 10px;
    h3 {
      font-size: 16px;
    }
  }
`;
