 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonTypography from "components/ArgonTypography";

function DefaultCell({ value, suffix }) {
  return (
    <ArgonTypography variant="caption" fontWeight="medium" color="text">
      {value}
      {suffix && (
        <ArgonTypography variant="caption" fontWeight="medium" color="secondary">
          &nbsp;&nbsp;{suffix}
        </ArgonTypography>
      )}
    </ArgonTypography>
  );
}

// Setting default values for the props of DefaultCell
DefaultCell.defaultProps = {
  suffix: "",
};

// Typechecking props for the DefaultCell
DefaultCell.propTypes = {
  value: PropTypes.string.isRequired,
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default DefaultCell;
