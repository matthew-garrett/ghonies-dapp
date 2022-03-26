import React from "react";
import roadmap from "../../images/roadmap-heading.svg";
import { RoadMapData } from "./roadMapConfig";
import {
  RoadMapWrapper,
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
        {RoadMapData.map((data, index) => (
          <ContainerLeft key={index}>
            <img src={data.image} alt="ghonie"></img>
            <Content>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </Content>
          </ContainerLeft>
        ))}
      </RoadMapWrapper>
    </Wrapper>
  );
};

export default RoadMap;
