import React from "react";
import styled from "styled-components";

import { palette, device } from "../../variables";

const Wrapper = styled.div`
  background: ${palette.lightGray};

  @media ${device.mobileL} {
    padding: 0 20px;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 30px;
`;

const Text = styled.div`
  line-height: 2em;
`;

const AboutUs = () => (
  <Wrapper>
    <Content>
      <Title>О нас</Title>
      <Text>
        Продакшн-студия, занимающаяся полным циклом видеопроизводства, начиная
        от&nbsp;разработки идеи и&nbsp;написания сценария, заканчивая
        постпродакшном ролика. Наш профиль&nbsp;&mdash; это создание
        презентационных, рекламных, игровых видеороликов, а&nbsp;так&nbsp;же
        съемка мероприятий. Если у&nbsp;вас имеются творческие идеи, которые
        вы&nbsp;хотите реализовать, но&nbsp;не&nbsp;знаете как,
        мы&nbsp;обязательно рассмотрим их&nbsp;и&nbsp;постараемся помочь.
      </Text>
    </Content>
  </Wrapper>
);

export default AboutUs;
