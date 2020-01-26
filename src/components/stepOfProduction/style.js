import styled from "styled-components";

import { palette, device } from "../../variables";

const Wrapper = styled.div``;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 0;

  .owl-nav {
    @media ${device.mobileL} {
      display: none;
    }

    > div {
      width: 30px;
      height: 30px;
      border: 8px solid ${palette.black};
      transform: rotate(45deg);
      position: absolute;
      top: 50%;
      transition: border-color 0.2s;

      &:hover {
        border-color: ${device.mobileL}-red;
      }

      &.disabled {
        opacity: 0.5;

        &:hover {
          border-color: ${palette.black};
        }
      }
    }

    .owl-next {
      right: -30px;
      border-bottom: none;
      border-left: none;
    }

    .owl-prev {
      left: -30px;
      border-top: none;
      border-right: none;
    }
  }

  .owl-dots {
    display: none;
    justify-content: center;

    @media ${device.mobileL} {
      display: flex;
    }

    .owl-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${palette.black};
      margin-right: 10px;
      transition: background 0.1s;

      &:hover,
      &.active {
        background: ${device.mobileL}-red;
      }
    }
  }
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 30px;
`;

const OwlItem = styled.div`
  box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
  margin: 20px;

  img {
    width: 100%;
    display: block;
  }
`;

export { Wrapper, Content, Title, OwlItem };
