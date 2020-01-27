import React, { useEffect } from "react";
import { findDOMNode } from "react-dom";
import $ from "jquery";

import { LaptopMenu, Sign, Nav, SocialLinks, Burger } from "./style";
import { MobileMenu, CloseBtn, MobileNav } from "./style";

const Menu = () => {
  const burgerRef = React.createRef(),
    mobileMenuRef = React.createRef(),
    mobileMenuCloseBtnRef = React.createRef(),
    mobileNav = React.createRef();

  {
    /* Main Menu */
  }
  useEffect(() => {
    $(".skotch-menu nav a").on("click", function(ev) {
      let link = $(ev.target).attr("href");
      var targetScrollTop = $(link).offset().top;
      $("html, body").animate({ scrollTop: targetScrollTop }, 1000);
    });
  });

  {
    /* Mobile Menu */
  }
  useEffect(() => {
    console.log("Jquery: ", $);
    const burger = findDOMNode(burgerRef.current),
      mobileMenu = findDOMNode(mobileMenuRef.current),
      mobileMenuCloseBtn = findDOMNode(mobileMenuCloseBtnRef.current);

    $(burger).on("click", function() {
      $(mobileMenu).fadeIn();
    });

    $(mobileMenuCloseBtn).on("click", function() {
      $(mobileMenu).fadeOut();
    });

    $(".mobile-nav a").on("click", function(ev) {
      let link = $(ev.target).attr("href");
      var targetScrollTop = $(link).offset().top;
      $("html, body").animate({ scrollTop: targetScrollTop }, 1000);

      $(mobileMenu).fadeOut();
    });
  });

  return (
    <React.Fragment>
      <LaptopMenu className="skotch-menu">
        <Burger ref={burgerRef}>
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

      <MobileMenu ref={mobileMenuRef}>
        <CloseBtn ref={mobileMenuCloseBtnRef} />
        <MobileNav ref={mobileNav}>
          <ul className="mobile-nav">
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
};

export default Menu;
