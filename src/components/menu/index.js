import React from "react";

import { LaptopMenu, Sign, Nav, SocialLinks, Burger } from "./style";
import { MobileMenu, CloseBtn, MobileNav } from "./style";

const Menu = () => (
  <React.Fragment>
    <LaptopMenu>
      <Burger>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      <Sign>Skotch production</Sign>
      <Nav>
        <ul>
          <li>
            <a href="#main-screen">Главная</a>
          </li>
          <li>
            <a href="#about-us">О нас</a>
          </li>
          <li>
            <a href="#pd">Этапы производства</a>
          </li>
          <li>
            <a href="#works-2">Наши работы</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </Nav>
      <SocialLinks>
        <a // eslint-disable-line jsx-a11y/anchor-has-content
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCfUGwm_YEC2QAwyMN57eWoA"
          aria-label="Skotch production youtube"
          aria-hidden="true"
          alt="Skotch production youtube"
        ></a>
        <a // eslint-disable-line jsx-a11y/anchor-has-content
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/skotch.production"
        ></a>
      </SocialLinks>
    </LaptopMenu>

    <MobileMenu>
      <CloseBtn />
      <MobileNav>
        <ul>
          <li>
            <a href="#main-screen">Главная</a>
          </li>
          <li>
            <a href="#about-us">О нас</a>
          </li>
          <li>
            <a href="#pd">Этапы производства</a>
          </li>
          <li>
            <a href="#works-2">Наши работы</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </MobileNav>
    </MobileMenu>
  </React.Fragment>
);

export default Menu;
