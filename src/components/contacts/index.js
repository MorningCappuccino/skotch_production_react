import React from "react";
import styled from "styled-components";

import { palette } from "../../variables";

const Wrapper = styled.div`
  background: ${palette.white};
  padding: 30px 0 50px;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  color: ${palette.black};
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: space-around;
  line-height: 1.3em;
  margin-bottom: 30px;
`;

const Left = styled.div`
  text-align: left;

  a {
    color: ${palette.sRed};
  }
`;

const Year = styled.div`
  text-align: center;

  a {
    text-transform: uppercase;
    color: ${palette.sRed};
  }
`;

const Contacts = () => (
  <Wrapper id="contacts">
    <Content>
      <ContentTop>
        <Left>
          Беларусь, Минск <br />
          <a // eslint-disable-line jsx-a11y/anchor-is-valid
            href="mailto:kotch.pd@gmail.com"
          >
            skotch.pd@gmail.com
          </a>
        </Left>
        <div>
          +375 (29) 894-20-95
          <br />
          {/* + 79263051820 */}
          +375 (29) 562-43-90
        </div>
      </ContentTop>
      <Year>
        © by <a href="#">Skotch production</a>
      </Year>
    </Content>
  </Wrapper>
);

export default Contacts;
