 

// Gumshuda AI MUI base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme-dark/base/boxShadows";

// Gumshuda AI MUI helper functions
import rgba from "assets/theme-dark/functions/rgba";
import pxToRem from "assets/theme-dark/functions/pxToRem";
import linearGradient from "assets/theme-dark/functions/linearGradient";

const { white, light, gradients } = colors;
const { borderWidth } = borders;
const { md } = boxShadows;

const switchButton = {
  defaultProps: {
    disableRipple: true,
  },

  styleOverrides: {
    root: {
      width: pxToRem(40),
      height: pxToRem(20),
      margin: `${pxToRem(4)} 0`,
      padding: 0,
      borderRadius: pxToRem(160),
      transition: "transform 250ms ease-in",
    },

    switchBase: {
      padding: 0,
      top: "50%",
      transform: `translate(${pxToRem(2)}, -50%)`,
      transition: `transform 250ms ease-in-out`,

      "&.Mui-checked": {
        transform: `translate(${pxToRem(22)}, -50%)`,

        "& + .MuiSwitch-track": {
          backgroundColor: `${rgba(gradients.info.state, 0.95)} !important`,
          borderColor: `${rgba(gradients.info.state, 0.95)} !important`,
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      width: pxToRem(16),
      height: pxToRem(16),
      backgroundColor: white.main,
      boxShadow: md,
      top: "50%",
    },

    track: {
      backgroundColor: rgba(gradients.dark.state, 0.1),
      border: `${borderWidth[1]} solid ${light.main}`,
      borderRadius: pxToRem(160),
      opacity: 1,
      transition: `background-color 250ms ease, border-color 200ms ease`,
    },

    checked: {},
  },
};

export default switchButton;
