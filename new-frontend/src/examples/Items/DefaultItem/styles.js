function defaultItemIconBox(theme, ownerState) {
  const { functions, palette, borders } = theme;
  const { color } = ownerState;

  const { pxToRem, rgba } = functions;
  const { gradients } = palette;
  const { borderRadius } = borders;

  return {
    display: "grid",
    placeItems: "center",
    width: pxToRem(48),
    height: pxToRem(48),
    borderRadius: borderRadius.md,
    backgroundColor: gradients[color]
      ? rgba(gradients[color].main, 0.03)
      : rgba(gradients.info.main, 0.03),
  };
}

function defaultItemIcon(theme, ownerState) {
  const { functions, palette } = theme;
  const { color } = ownerState;

  const { linearGradient } = functions;
  const { gradients, transparent } = palette;

  return {
    backgroundImage: gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.info.main, gradients.info.state),
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
  };
}

export { defaultItemIconBox, defaultItemIcon };
