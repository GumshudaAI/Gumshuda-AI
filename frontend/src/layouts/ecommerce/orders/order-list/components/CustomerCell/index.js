 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

function CustomerCell({ image, name, color }) {
  return (
    <ArgonBox display="flex" alignItems="center">
      <ArgonBox mr={1}>
        <ArgonAvatar bgColor={color} src={image} alt={name} size="xs" />
      </ArgonBox>
      <ArgonTypography variant="caption" fontWeight="medium" color="text" sx={{ lineHeight: 0 }}>
        {name}
      </ArgonTypography>
    </ArgonBox>
  );
}

// Setting default value for the props of CustomerCell
CustomerCell.defaultProps = {
  image: "",
  color: "dark",
};

// Typechecking props for the CustomerCell
CustomerCell.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
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
};

export default CustomerCell;
