import React from "react";
import styled from "styled-components";

import { palette, device } from "../../variables";

import fortexImg from "./img/preview-fortex.png";
import megaBonusImg from "./img/preview-megabonus.png";
import youtubeIcon from "./img/youtube-red.svg";

const Wrapper = styled.div`
  background: ${palette.lightGray};
  padding: 30px 0;

  @media ${device.mobileL} {
    padding: 30px 20px;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const WorkItems = styled.div``;

const WorkItem = styled.div`
  box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 300px;
  display: block;
  margin-bottom: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;

  @media ${device.mobileL} {
    background-position: center;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: radial-gradient(white, black);
    opacity: 0.5;
    transition: all 0.3s;
  }

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 30px;
    background: url(${youtubeIcon}) no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    &::before {
      opacity: 0.3;
    }
  }
`;

const Fortex = styled(WorkItem)`
  background-image: url(${fortexImg});
`;

const MegaBonus = styled(WorkItem)`
  background-image: url(${megaBonusImg});
`;

const OurWork = () => (
  <Wrapper id="works-2">
    <Content>
      <Title>Наши работы</Title>
      <WorkItems>
        <Fortex
          thumbnail="https://loremflickr.com/320/240"
          data-fancybox
          href="https://youtu.be/Qr3yOKYdIEE"
        ></Fortex>
        <MegaBonus
          data-fancybox
          href="https://youtu.be/IffzVyWPDek"
        ></MegaBonus>
      </WorkItems>
    </Content>
  </Wrapper>
);

export default OurWork;
