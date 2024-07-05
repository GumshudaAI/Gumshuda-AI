 

// Gumshuda AI MUI base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// Gumshuda AI MUI helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(256),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(256),
      backgroundColor: background.dark,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: `${pxToRem(16)} 0 ${pxToRem(16)} ${pxToRem(16)}`,
      borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};

export default sidenav;
