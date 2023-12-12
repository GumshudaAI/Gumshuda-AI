 

// Gumshuda AI MUI base styles
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";

// Gumshuda AI MUI helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { grey, dark, secondary } = colors;

const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.md,
      color: grey[300],

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${dark.main} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${secondary.main} !important`,
      },
    },
  },
};

export default stepLabel;
