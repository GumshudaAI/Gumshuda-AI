 

// Gumshuda AI MUI base styles
import colors from "assets/theme-dark/base/colors";

// Gumshuda AI MUI helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { transparent } = colors;

const stepper = {
  styleOverrides: {
    root: {
      margin: `${pxToRem(48)} 0`,
      padding: `0 ${pxToRem(12)}`,

      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
