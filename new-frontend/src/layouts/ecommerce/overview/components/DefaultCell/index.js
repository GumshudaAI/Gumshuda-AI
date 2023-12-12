 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonTypography from "components/ArgonTypography";

function DefaultCell({ children }) {
  return (
    <ArgonTypography variant="button" fontWeight="medium" color="text">
      {children}
    </ArgonTypography>
  );
}

// Typechecking props for the DefaultCell
DefaultCell.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DefaultCell;
