import styled from "styled-components";

export const MinterContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;
export const MintInProgress = styled.div`
  margin-top: 50px;
`;

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

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const TranactionLink = styled.a`
  color: #e2d8e1;
`;

export const MintSuccessWrapper = styled.div`
  line-height: 2;
`;
