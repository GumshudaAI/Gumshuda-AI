 

// @mui material components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme }) => {
  const { palette, typography, borders, functions } = theme;

  const { text, white, dark, inputColors, transparent } = palette;
  const { size } = typography;
  const { borderRadius, borderWidth } = borders;
  const { rgba } = functions;

  return {
    display: "flex",
    alignItems: "center",
    border: `${borderWidth[1]} solid ${inputColors.borderColor.main} !important`,
    borderRadius: borderRadius.md,
    backgroundColor: transparent.main,

    "& .dz-default": {
      margin: "0 auto !important",
    },

    "& .dz-default .dz-button": {
      color: `${text.main} !important`,
      fontSize: `${size.sm} !important`,
    },

    "& .dz-preview.dz-image-preview": {
      background: transparent.main,
    },

    "& .dz-preview .dz-details": {
      color: `${dark.main} !important`,
      opacity: "1 !important",

      "& .dz-size span, & .dz-filename span": {
        backgroundColor: `${rgba(white.main, 0.7)} !important`,
      },
    },

    "& .dz-error-message": {
      display: "none !important",
    },

    "& .dz-remove": {
      color: `${dark.main} !important`,
      textDecoration: "none",

      "&:hover, &:focus": {
        textDecoration: "none !important",
      },
    },
  };
});
