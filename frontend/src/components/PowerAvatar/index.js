import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import PowerAvatarRoot from "components/PowerAvatar/PowerAvatarRoot";

const PowerAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <PowerAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of PowerAvatar
PowerAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the PowerAvatar
PowerAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default PowerAvatar;
