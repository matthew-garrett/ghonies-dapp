import styled from "styled-components";

export const EmailWrapper = styled.div`
  flex: 1;
  margin: auto;
  @media screen and (max-width: 600px) {
    margin: 20px;
    display: none;
  }
`;

export const EmailLabel = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 12px;
`;
