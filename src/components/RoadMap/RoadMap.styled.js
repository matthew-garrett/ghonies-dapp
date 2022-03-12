import styled from "styled-components";

export const RoadMapWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  &:after {
    content: "";
    position: absolute;
    width: 1px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
  @media screen and (max-width: 600px) {
    &:after {
      left: 18px;
    }
  }
`;

export const ContainerLeft = styled.div`
  position: relative;
  background-color: inherit;
  width: 50%;
  &:after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    right: -50px;
    top: 15px;
    background-color: #161013;
    border-radius: 50%;
    z-index: 1;
  }
  img {
    position: absolute;
    width: 100px;
    height: 100px;
    right: -50px;
    top: 15px;
    z-index: 2;
  }
  left: 0;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 45px;
    padding-right: 25px;
    padding-top: 6px;

    &:after {
      left: -8px;
      width: 50px;
      height: 50px;
    }
    img {
      left: -8px;
      width: 50px;
      height: 50px;
    }
  }
`;

export const ContainerRight = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  &:after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    right: -17px;
    background-color: #161013;
    border-radius: 50%;
    top: 15px;
    z-index: 1;
  }
  img {
    position: absolute;
    width: 100px;
    height: 100px;
    left: -50px;
    top: 15px;
    z-index: 2;
  }
  left: 50%;
  &:after {
    left: -50px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 45px;
    padding-right: 25px;

    &:after {
      left: -8px;
      width: 50px;
      height: 50px;
    }
    img {
      left: -8px;
      width: 50px;
      height: 50px;
    }
    left: 0%;
  }
`;

export const Content = styled.div`
  padding: 0px 50px;
  position: relative;
  border-radius: 6px;
  color: #e2d8e1;

  @media screen and (max-width: 600px) {
    padding-left: 5px;
    padding-right: 0px;
    margin-right: 40px;
  }
`;

export const ImageHeader = styled.img`
  width: 250px;
  pointer-events: none;
  padding-left: 35px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 600px) {
    padding-left: 0px;
  }
`;

export const Wrapper = styled.div`
  padding: 15px;
  display: block;
  max-width: 1100px;
  margin: auto;
  margin-top: 150px;
`;
