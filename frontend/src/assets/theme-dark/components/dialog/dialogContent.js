 

// Gumshuda AI MUI base styles
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Gumshuda AI MUI helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

const dialogContent = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};

export default dialogContent;
