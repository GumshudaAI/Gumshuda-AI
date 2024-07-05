 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function IdCell({ id, checked }) {
  return (
    <ArgonBox display="flex" alignItems="center">
      <Checkbox defaultChecked={checked} />
      <ArgonBox ml={1}>
        <ArgonTypography variant="caption" fontWeight="medium" color="text">
          {id}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default value for the props of IdCell
IdCell.defaultProps = {
  checked: false,
};

// Typechecking props for the IdCell
IdCell.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default IdCell;
