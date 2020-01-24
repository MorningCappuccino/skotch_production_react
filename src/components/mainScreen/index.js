import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  position: relative;
`;

const Bg = styled.div`
  height: 700px;
  background-position: center;
`;

function MainScreen() {
  return (
    <Wrapper>
      <Bg />
    </Wrapper>
  );
}

export default MainScreen;
