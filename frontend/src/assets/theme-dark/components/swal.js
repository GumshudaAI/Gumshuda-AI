 

// Gumshuda AI MUI base styles
import borders from "assets/theme-dark/base/borders";
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";
import boxShadows from "assets/theme-dark/base/boxShadows";

// // Gumshuda AI MUI helper functions
import linearGradient from "assets/theme-dark/functions/linearGradient";
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;
const { fontWeightMedium, fontWeightBold, size } = typography;
const { gradients, transparent, white, background } = colors;
const { buttonBoxShadow } = boxShadows;

const swal = {
  ".swal2-container": {
    zIndex: `${9999} !important`,
  },

  ".swal2-popup": {
    borderRadius: `${borderRadius.xl} !important`,
    backgroundColor: background.dark,
    color: white.main,

    "& .button, & .swal2-confirm": {
      fontSize: `${size.xs} !important`,
      fontWeight: fontWeightBold,
      borderRadius: `${borderRadius.md} !important`,
      padding: `${pxToRem(12)} ${pxToRem(24)}`,
      margin: pxToRem(3.75),
      textAlign: "center",
      textTransform: "uppercase",
      userSelect: "none",
      backgroundSize: "150% !important",
      backgroundPositionX: "25% !important",
      transition: `all 150ms ease-in`,
      backgroundImage: `${linearGradient(gradients.info.main, gradients.info.state)} !important`,
      backgroundColor: transparent.main,
      color: white.main,
      height: pxToRem(40),
      boxShadow: `${buttonBoxShadow.main} !important`,
      border: "none",
      cursor: "pointer",

      "&:hover, &:focus, &:active": {
        backgroundImage: `${linearGradient(gradients.info.main, gradients.info.state)} !important`,
        boxShadow: `${buttonBoxShadow.stateOf} !important`,
      },

      "& .material-icons-round": {
        fontSize: size.sm,
        marginRight: pxToRem(4),
        verticalAlign: "middle",
      },
    },

    "& .button.button-success": {
      backgroundImage: `${linearGradient(
        gradients.success.main,
        gradients.success.state
      )} !important`,

      "&:hover, &:focus, &:active": {
        backgroundImage: `${linearGradient(
          gradients.success.main,
          gradients.success.state
        )} !important`,
      },
    },

    "& .button.button-error": {
      backgroundImage: `${linearGradient(gradients.error.main, gradients.error.state)} !important`,

      "&:hover, &:focus, &:active": {
        backgroundImage: `${linearGradient(
          gradients.error.main,
          gradients.error.state
        )} !important`,
      },
    },

    "& .button-flex": {
      display: "inline-flex !important",
      alignItems: "center",
    },

    "& a, a:visited": {
      color: "#545454",
      textDecoration: "none",
    },

    "& .swal2-image": {
      borderRadius: borderRadius.xl,
      marginBottom: 0,
    },

    "& .swal2-title": {
      fontWeight: fontWeightMedium,
    },
  },
};

export default swal;
