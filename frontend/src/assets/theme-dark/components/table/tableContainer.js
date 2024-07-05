 

// Gumshuda AI MUI base styles
import colors from "assets/theme-dark/base/colors";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";

const { background } = colors;
const { cardBoxShadow } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: background.dark,
      boxShadow: cardBoxShadow,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
