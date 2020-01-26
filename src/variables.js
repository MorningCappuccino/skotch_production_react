export const palette = {
  white: "#fff",
  black: "#000",
  sBlack: "#262626",
  sRed: "#a53030",
  lightGray: "#f0f0f0"
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1366px",
  laptopL: "1440px",
  desktopS: "1600px",
  desktopM: "1920px",
  desktopL: "2560px"
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktopS: `(max-width: ${size.desktopS})`,
  desktopM: `(max-width: ${size.desktopM})`,
  desktopL: `(max-width: ${size.desktopL})`
};
