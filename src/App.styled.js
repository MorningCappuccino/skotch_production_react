import styled from "styled-components";

const MainPage = styled.div`
  @font-face {
    font-family: "Ubuntu";
    src: url("./assets/fonts/Ubuntu-Regular.woff2") format("woff2"),
      url("./assets/fonts/Ubuntu-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("./assets/fonts/Ubuntu-Bold.woff2") format("woff2"),
      url("./assets/fonts/Ubuntu-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("./assets/fonts/Ubuntu-Light.woff2") format("woff2"),
      url("./assets/fonts/Ubuntu-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("./assets/fonts/Ubuntu-Medium.woff2") format("woff2"),
      url("./assets/fonts/Ubuntu-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("./assets/fonts/Ubuntu-SemiBold.woff2") format("woff2"),
      url("./assets/fonts/Ubuntu-SemiBold.woff") format("woff");
    font-weight: 550;
    font-style: normal;
  }

  font-family: "Ubuntu";

  a {
    text-decoration: none;
  }
`;

export default MainPage;
