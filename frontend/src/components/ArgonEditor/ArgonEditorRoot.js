 

// @mui material components
import { styled } from "@mui/material/styles";

export default styled("div")(({ theme }) => {
  const { palette, borders, typography } = theme;

  const { borderRadius } = borders;
  const { size } = typography;
  const { text } = palette;

  return {
    "& .ql-toolbar": {
      borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0`,
    },

    "& .ql-container": {
      borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
    },

    "& .ql-editor": {
      "& p": {
        fontSize: size.md,
        color: text.main,
      },

      "& ul li": {
        color: text.main,
      },
    },
  };
});
