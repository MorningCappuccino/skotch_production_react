import styled from "styled-components";
import React from "react";

import { device } from "../../variables";
import bgImg from "./img/road.jpg";
import logoImg from "./img/logo-new.svg";

const Wrapper = styled.div`
  position: relative;
`;

const Bg = styled.div`
  height: 700px;
  background-position: center 20%;
  background-image: url(${bgImg});

  @media ${device.mobileL} {
    background-position: center 34%
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;

  @media ${device.mobileL} {
      width: 70%;
  }
`;

function MainScreen() {
  return (
    <Wrapper>
      <Bg />
      <Logo>
        <img src={logoImg} alt="Skotch production logo" />
      </Logo>
    </Wrapper>
  );
}

export default MainScreen;
