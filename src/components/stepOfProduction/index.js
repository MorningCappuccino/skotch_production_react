import React from "react";
import OwlCarousel from "react-owl-carousel2";

import { Wrapper, Content, Title, OwlItem } from "./style";

import prodImg_1 from "./img/prod-1.jpg";
import prodImg_2 from "./img/prod-2.jpg";
import prodImg_3 from "./img/prod-3.jpg";
import prodImg_4 from "./img/prod-4.jpg";
import prodImg_5 from "./img/prod-5.jpg";
import prodImg_6 from "./img/prod-6.jpg";
import prodImg_7 from "./img/prod-7.jpg";

const owlOptions = {
  items: 1,
  loop: false,
  nav: true,
  navText: ["", ""]
};

const StepOfProduction = () => (
  <Wrapper id="pd">
    <Content>
      <Title>Этапы производства</Title>
      <OwlCarousel options={owlOptions}>
        <OwlItem>
          <img src={prodImg_1} alt="Разработка сценария" />
        </OwlItem>
        <OwlItem>
          <img src={prodImg_2} alt="Подбор актёров" />
        </OwlItem>
        <OwlItem>
          <img src={prodImg_3} alt="Выбор локации и мест съёмок" />
        </OwlItem>
        <OwlItem>
          <img src={prodImg_4} alt="Фото и видео съёмка" />
        </OwlItem>
        <OwlItem>
          <img src={prodImg_5} alt="Звуко-монтаж" />
        </OwlItem>
        <OwlItem>
          <img src={prodImg_6} alt="Видео-монтаж" />
        </OwlItem>
        <OwlItem>
          <img src={prodImg_7} alt="Цвето-коррекция" />
        </OwlItem>
      </OwlCarousel>
    </Content>
  </Wrapper>
);

export default StepOfProduction;
