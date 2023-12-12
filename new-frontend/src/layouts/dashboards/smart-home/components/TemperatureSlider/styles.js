 
function circularSlider(theme, { color }) {
  const { palette, transitions } = theme;

  const { circleSliderColors, transparent } = palette;

  return {
    "& svg": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -40%)`,
    },

    "& path:first-of-type": {
      stroke: circleSliderColors.background,
      strokeWidth: 1,
    },

    "& path": {
      stroke: palette[color].main,
      strokeWidth: 1,
    },

    "& circle": {
      stroke: transparent.main,
      strokeWidth: 0,
      filter: "none",
      fill: palette[color].main,
      cursor: "pointer",
      transition: transitions.create(["stroke", "stroke-width"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.complex,
      }),

      "&:active": {
        stroke: palette[color].main,
        strokeWidth: 5,
      },
    },
  };
}

export default circularSlider;
