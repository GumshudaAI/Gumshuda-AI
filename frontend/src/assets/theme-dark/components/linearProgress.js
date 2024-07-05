 

// Gumshuda AI MUI base styles
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Gumshuda AI MUI helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;
const { grey } = colors;

const linearProgress = {
  styleOverrides: {
    root: {
      height: pxToRem(3),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative",
    },

    colorPrimary: {
      backgroundColor: grey[400],
    },

    colorSecondary: {
      backgroundColor: grey[400],
    },

    bar: {
      height: "100%",
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: `translate(0, 0) !important`,
      transition: "width 0.6s ease !important",
    },
  },
};

export default linearProgress;
