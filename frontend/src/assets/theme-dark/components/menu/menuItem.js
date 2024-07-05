 

// Gumshuda AI MUI base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import typography from "assets/theme-dark/base/typography";

// Gumshuda AI MUI helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { light, text, white } = colors;
const { borderRadius } = borders;
const { size } = typography;

const menuItem = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: rgba(light.main, 0.1),
        color: white.main,
      },
    },
  },
};

export default menuItem;
