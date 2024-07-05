 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function ProductCell({ image, name, checked }) {
  return (
    <ArgonBox display="flex" alignItems="center">
      <Checkbox defaultChecked={checked} />
      <ArgonBox mx={2} width="3.75rem">
        <ArgonBox component="img" src={image} alt={name} width="100%" />
      </ArgonBox>
      <ArgonTypography variant="button" fontWeight="medium">
        {name}
      </ArgonTypography>
    </ArgonBox>
  );
}

// Setting default value for the props of ProductCell
ProductCell.defaultProps = {
  checked: false,
};

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default ProductCell;
