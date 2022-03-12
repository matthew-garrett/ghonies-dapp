import React from "react";
import roadmap from "../../images/roadmap-heading.svg";
import GhoniSix from "../../images/roadmap-6.svg";
import GhoniFive from "../../images/roadmap-5.svg";
import GhoniFour from "../../images/roadmap-4.svg";
import GhoniThree from "../../images/roadmap-3.svg";
import GhoniTwo from "../../images/roadmap-2.svg";
import GhoniOne from "../../images/roadmap-1.svg";
import {
  RoadMapWrapper,
  ContainerRight,
  ContainerLeft,
  ImageHeader,
  Content,
  Wrapper,
} from "./RoadMap.styled";

const RoadMap = () => {
  return (
    <Wrapper id="roadmap">
      <ImageHeader src={roadmap} alt="roadmap" />
      <RoadMapWrapper>
        <ContainerLeft>
          <img src={GhoniOne} alt="ghonie"></img>
          <Content>
            <h2>10%</h2>
            <p>2 dozen Ghonie give away</p>
          </Content>
        </ContainerLeft>
        <ContainerRight>
          <img src={GhoniTwo} alt="ghonie"></img>
          <Content>
            <h2>20%</h2>
            <p>12 Eth in giveaways</p>
          </Content>
        </ContainerRight>
        <ContainerLeft>
          <img src={GhoniThree} alt="ghonie"></img>
          <Content>
            <h2>30%</h2>
            <p>1 Dirty Half Dozen NFT dropped to a random whitelisted minter</p>
          </Content>
        </ContainerLeft>
        <ContainerRight>
          <img src={GhoniFour} alt="ghonie"></img>
          <Content>
            <h2>50%</h2>
            <p>2 contests to win a Dirty Half Dozen NFT</p>
          </Content>
        </ContainerRight>
        <ContainerLeft>
          <img src={GhoniFive} alt="ghonie"></img>
          <Content>
            <h2>60%</h2>
            <p>
              Create DAO to distrubte 12% of sales royalties (1% each) to DD
              holders
            </p>
          </Content>
        </ContainerLeft>
        <ContainerRight>
          <img src={GhoniSix} alt="ghonie"></img>
          <Content>
            <h2>100%</h2>
            <p>Charity 100k give away</p>
          </Content>
        </ContainerRight>
      </RoadMapWrapper>
    </Wrapper>
  );
};

export default RoadMap;
