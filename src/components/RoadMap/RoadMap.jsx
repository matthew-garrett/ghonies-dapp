import React from "react";
import roadmap from "../../roadmap-heading.svg";
import GhoniSix from "../../roadmap-6.svg";
import GhoniFive from "../../roadmap-5.svg";
import GhoniFour from "../../roadmap-4.svg";
import GhoniThree from "../../roadmap-3.svg";
import GhoniTwo from "../../roadmap-2.svg";
import GhoniOne from "../../roadmap-1.svg";
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
            <h2>2017</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </Content>
        </ContainerLeft>
        <ContainerRight>
          <img src={GhoniTwo} alt="ghonie"></img>
          <Content>
            <h2>2016</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </Content>
        </ContainerRight>
        <ContainerLeft>
          <img src={GhoniThree} alt="ghonie"></img>
          <Content>
            <h2>2015</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </Content>
        </ContainerLeft>
        <ContainerRight>
          <img src={GhoniFour} alt="ghonie"></img>
          <Content>
            <h2>2012</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </Content>
        </ContainerRight>
        <ContainerLeft>
          <img src={GhoniFive} alt="ghonie"></img>
          <Content>
            <h2>2011</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </Content>
        </ContainerLeft>
        <ContainerRight>
          <img src={GhoniSix} alt="ghonie"></img>
          <Content>
            <h2>2007</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </Content>
        </ContainerRight>
      </RoadMapWrapper>
    </Wrapper>
  );
};

export default RoadMap;
