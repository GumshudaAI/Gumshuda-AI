 

// Gumshuda AI MUI Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import boxShadows from "assets/theme/base/boxShadows";

// Gumshuda AI MUI Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { white, text, info, secondary } = colors;
const { size } = typography;
const { buttonBoxShadow } = boxShadows;

const contained = {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(40),
    color: text.main,
    boxShadow: buttonBoxShadow.main,
    padding: `${pxToRem(10)} ${pxToRem(20)}`,

    "&:hover": {
      backgroundColor: white.main,
      boxShadow: buttonBoxShadow.stateOf,
    },

    "&:focus": {
      boxShadow: buttonBoxShadow.stateOf,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: buttonBoxShadow.stateOf,
    },

    "&:disabled": {
      boxShadow: buttonBoxShadow.main,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(8)} ${pxToRem(32)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(14)} ${pxToRem(64)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: info.main,

    "&:hover": {
      backgroundColor: info.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: info.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },
};

export default contained;
