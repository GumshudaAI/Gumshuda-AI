 

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Gumshuda AI MUI helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

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
