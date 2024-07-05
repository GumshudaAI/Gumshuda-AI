 

// @mui material components
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export default styled(InputBase)(({ theme, ownerState }) => {
  const { palette, functions, typography, borders, boxShadows } = theme;
  const { size, error, success, iconDirection, disabled, darkMode } = ownerState;

  const { inputColors, grey, white, transparent, info, text, dark } = palette;
  const { inputBoxShadow } = boxShadows;
  const { pxToRem, boxShadow } = functions;
  const { size: fontSize } = typography;
  const { borderRadius } = borders;

  // styles for the input with size="small"
  const smallStyles = () => ({
    fontSize: fontSize.xs,
    padding: `${pxToRem(4)} ${pxToRem(12)}`,
  });

  // styles for the input with size="large"
  const largeStyles = () => ({
    padding: pxToRem(12),
  });

  // styles for the input with error={true}
  const errorStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
  });

  // styles for the input with success={true}
  const successStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
  });

  // styles for the input containing an icon
  const withIconStyles = () => ({
    borderColor: transparent.main,
    borderRadius: borderRadius.md,
  });

  let borderColor = inputColors.borderColor.main;
  let boxShadowValue = inputBoxShadow;
  let focusedBorderColor = info.main;

  if (error) {
    borderColor = inputColors.error;
    focusedBorderColor = inputColors.error;
    boxShadowValue = `${boxShadow([0, 3], [9, 0], inputColors.error, 0)}, ${boxShadow(
      [3, 4],
      [8, 0],
      inputColors.error,
      0.1
    )}`;
  } else if (success) {
    borderColor = inputColors.success;
    focusedBorderColor = inputColors.success;
    boxShadowValue = `${boxShadow([0, 3], [9, 0], inputColors.success, 0)}, ${boxShadow(
      [3, 4],
      [8, 0],
      inputColors.success,
      0.1
    )}`;
  }

  return {
    backgroundColor: disabled ? `${grey[200]} !important` : white.main,
    borderColor,
    pointerEvents: disabled ? "none" : "auto",
    ...(size === "small" && smallStyles()),
    ...(size === "large" && largeStyles()),
    ...(error && errorStyles()),
    ...(success && successStyles()),
    ...((iconDirection === "left" || iconDirection === "right") && withIconStyles()),

    input: {
      padding: 0,
      color: darkMode ? white.main : dark.main,

      "::placeholder": {
        color: `${darkMode ? white.main : text.main} !important`,
      },
    },

    "&.Mui-focused": {
      outline: 0,
      borderColor: focusedBorderColor,
      boxShadow: boxShadowValue,
    },

    "&.MuiInputBase-multiline": {
      padding: `${pxToRem(10)} ${pxToRem(12)}`,
    },
  };
});
