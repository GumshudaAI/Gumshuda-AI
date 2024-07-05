 

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for ArgonSocialButton
import ArgonSocialButtonRoot from "components/ArgonSocialButton/ArgonSocialButtonRoot";

const ArgonSocialButton = forwardRef(
  ({ color, size, iconOnly, circular, children, ...rest }, ref) => (
    <ArgonSocialButtonRoot
      {...rest}
      ref={ref}
      variant="contained"
      color="primary"
      size={size}
      ownerState={{ color, size, iconOnly, circular }}
    >
      {children}
    </ArgonSocialButtonRoot>
  )
);

// Setting default values for the props of ArgonSocialButton
ArgonSocialButton.defaultProps = {
  size: "medium",
  color: "facebook",
  iconOnly: false,
  circular: false,
};

// Typechecking props for the ArgonSocialButton
ArgonSocialButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "pinterest",
    "youtube",
    "github",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
  ]),
  iconOnly: PropTypes.bool,
  circular: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ArgonSocialButton;
