 

// Gumshuda AI MUI base styles
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";

// Gumshuda AI MUI helper functions
// import pxToRem from "assets/theme-dark/functions/pxToRem";

const { size } = typography;
const { text } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

export default dialogContentText;
