 
// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";
import colorsDark from "assets/theme-dark/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import bordersDark from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme/base/boxShadows";
import boxShadowsDark from "assets/theme-dark/base/boxShadows";

// Gumshuda AI MUI helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";
import rgba from "assets/theme/functions/rgba";

// @emotion/react components
import { keyframes } from "@emotion/react";

export default (selectSize, selectError, selectSuccess, darkMode) => {
  const { dark, white, text, light, inputColors, gradients, transparent, background } = darkMode
    ? colorsDark
    : colors;
  const { size, fontWeightRegular } = typography;
  const { borderWidth, borderRadius } = darkMode ? bordersDark : borders;
  const { inputBoxShadow, lg } = darkMode ? boxShadowsDark : boxShadows;

  let borderColorValue = inputColors.borderColor.main;
  let borderColorFocused = inputColors.borderColor.focus;
  let boxShadowValue;
  let selectSizeValue;

  if (selectError) {
    borderColorValue = inputColors.error;
    borderColorFocused = inputColors.error;
  } else if (selectSuccess) {
    borderColorValue = inputColors.success;
    borderColorFocused = inputColors.success;
  } else {
    borderColorValue = inputColors.borderColor.main;
    borderColorFocused = inputColors.borderColor.focus;
  }

  if (selectError) {
    boxShadowValue = `${boxShadow([0, 3], [9, 0], inputColors.error, 0)}, ${boxShadow(
      [3, 4],
      [8, 0],
      inputColors.error,
      0.1
    )}`;
  } else if (selectSuccess) {
    boxShadowValue = `${boxShadow([0, 3], [9, 0], inputColors.success, 0)}, ${boxShadow(
      [3, 4],
      [8, 0],
      inputColors.success,
      0.1
    )}`;
  } else {
    boxShadowValue = inputBoxShadow;
  }

  if (selectSize === "small") {
    selectSizeValue = pxToRem(32);
  } else if (selectSize === "large") {
    selectSizeValue = pxToRem(48);
  } else {
    selectSizeValue = pxToRem(40);
  }

  // animations
  const prespective = keyframes`
    from {
      opacity: 0;
      transform: perspective(999px) rotateX(-10deg) translateZ(0) translate3d(0, 0, 0);
    }
    to {
      opacity: 1;
      transform: perspective(999px) rotateX(0deg) translateZ(0) translate3d(0, 0, 5px);
    }
  `;

  return {
    control: (provided, state) => ({
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: selectSizeValue,
      padding: 0,
      fontSize: selectSize === "small" ? size.xs : size.sm,
      fontWeight: fontWeightRegular,
      backgroundColor: darkMode ? darkMode.main : white.main,
      backgroundClip: "padding-box",
      border: `${borderWidth[1]} solid`,
      appearance: "none",
      borderRadius: borderRadius.md,
      transition: "box-shadow 150ms ease, border-color 150ms ease",
      cursor: "pointer",
      borderColor: state.isFocused ? borderColorFocused : borderColorValue,
      boxShadow: state.isFocused ? boxShadowValue : "none",
    }),

    valueContainer: () => ({
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "max-content",
      padding: `0 ${pxToRem(12)}`,
      color: dark.main,
    }),

    placeholder: () => ({
      position: "absolute",
      top: selectSize === "small" ? "52%" : "51%",
      transform: "translateY(-50%)",
      marginLeft: 0,
      marginRight: 0,
      color: darkMode ? white.main : dark.main,
      opacity: 0.5,
    }),

    singleValue: () => ({
      position: "absolute",
      top: selectSize === "small" ? "52%" : "51%",
      transform: "translateY(-50%)",
      color: text.main,
    }),

    input: () => ({
      color: dark.main,
      position: "relative",
      margin: 0,
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: (provided, state) => ({
      display: "flex",
      padding: pxToRem(12),

      "& svg": {
        fill: text.main,
        width: pxToRem(14),
        height: pxToRem(14),
        strokeWidth: 1,
        stroke: text.main,
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
        transition: "transform 250ms ease",
      },
    }),

    menu: (provided) => ({
      ...provided,
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: darkMode ? background.dark : white.main,
      borderRadius: borderRadius.md,
      transformOrigin: "50% 0",
      animation: `${prespective} 250ms ease forwards !important`,
    }),

    menuList: (provided) => ({
      ...provided,
      padding: 0,
    }),

    option: (provided, state) => ({
      ...provided,
      position: "relative",
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(100)} ${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      backgroundColor: state.isSelected ? rgba(light.main, darkMode ? 0.1 : 1) : transparent.main,
      color: darkMode ? white.main : text.main,
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      opacity: state.isDisabled ? 0.5 : 1,
      userSelect: state.isDisabled ? "none" : "auto",
      transition: "background-color 300ms ease, color 300ms ease",

      "&:after": {
        content: "'Press to select'",
        display: "block",
        fontSize: size.xs,
        position: "absolute",
        right: pxToRem(10),
        top: "52%",
        color: text.main,
        opacity: 0,
        transform: "translateY(-50%)",
        transition: "opacity 300ms ease",
      },

      "&:hover, &:focus": {
        backgroundColor: state.isDisabled ? transparent.main : rgba(light.main, darkMode ? 0.1 : 1),
        color: state.isDisabled ? "currentColor" : darkMode ? white.main : dark.main,

        "&:after": {
          content: state.isDisabled && "''",
          opacity: 0.5,
        },
      },
    }),

    multiValue: (provided) => ({
      ...provided,
      margin: 0,
      marginRight: pxToRem(4),
      borderRadius: borderRadius.section,
      display: "flex",
      alignItems: "center",
      backgroundColor: gradients.dark.state,
      color: white.main,
      padding: `${pxToRem(2)} 0 ${pxToRem(2)} ${pxToRem(4)}`,

      "& div:first-of-type": {
        color: white.main,
        paddingTop: pxToRem(4),
        paddingBottom: pxToRem(2),
      },

      "& div:last-of-type": {
        paddingTop: pxToRem(1.5),
        opacity: 0.8,

        "&:hover": {
          backgroundColor: transparent.main,
          color: white.main,
        },
      },
    }),
  };
};
