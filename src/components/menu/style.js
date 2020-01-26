import styled from "styled-components";
import { palette, device } from "../../variables";

import youtubeIcon from "./img/youtube.svg";
import instagramIcon from "./img/instagram.svg";

const LaptopMenu = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 5px 40px;
  align-items: center;
  background: ${palette.white};

  @media ${device.laptop} {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
  }

  @media ${device.mobileL} {
    padding: 5px 20px;
  }

  @media ${device.mobileM} {
    padding: 5px 15px;
  }
`;

const Sign = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;

  @media ${device.mobileS} {
    display: none;
  }
`;

const Nav = styled.nav`
  @media ${device.laptop} {
    display: none;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      border-right: 1px solid #d8d8d8;
      padding: 0 15px;

      &:last-of-type {
        border-right: none;
      }

      a {
        color: ${palette.sBlack};
        font-size: 20px;
        transition: ease 0.3s;
        border-bottom: 1px solid transparent;
        font-weight: 500;

        &:hover {
          border-color: ${palette.sRed};
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  width: 151px; //like logo for align
  justify-content: flex-end;

  @media ${device.mobileL} {
    width: auto;
  }

  a {
    display: block;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    margin-right: 20px;

    @media ${device.mobileM} {
      margin-right: 15px;
    }

    @media ${device.mobileL} {
      height: 23px;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &:first-child {
      background-image: url(${youtubeIcon});
      width: 42px;

      @media ${device.mobileL} {
        width: 32px;
      }
    }

    &:last-child {
      background-image: url(${instagramIcon});
    }
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media ${device.laptop} {
    display: block;
  }

  &:hover {
    span {
      background: ${palette.sRed};
    }
  }

  span {
    display: block;
    width: 30px;
    height: 4px;
    background: ${palette.black};
    margin-bottom: 8px;
    transition: background 0.2s;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${palette.white};
  z-index: 200;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  &:hover {
    cursor: pointer;

    &::before,
    &::after {
      background-color: ${palette.sRed};
    }
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 5px;
    background-color: ${palette.black};
    transition: background 0.2s;
    position: relative;
  }

  &::before {
    transform: rotate(45deg);
    top: 5px;
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const MobileNav = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    height: 300px;
    justify-content: space-evenly;

    li {
      a {
        color: ${palette.sBlack};
        font-size: 20px;
        transition: ease 0.3s;
        border-bottom: 1px solid transparent;
        font-weight: 500;

        &:hover {
          color: ${palette.sRed};
        }
      }
    }
  }
`;

export {
  LaptopMenu,
  Sign,
  Nav,
  SocialLinks,
  Burger,
  MobileMenu,
  CloseBtn,
  MobileNav
};
