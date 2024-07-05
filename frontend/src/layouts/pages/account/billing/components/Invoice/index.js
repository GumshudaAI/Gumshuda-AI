 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function Invoice({ date, id, price, noGutter }) {
  return (
    <ArgonBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <ArgonBox lineHeight={1.125}>
        <ArgonTypography display="block" variant="button" fontWeight="medium">
          {date}
        </ArgonTypography>
        <ArgonTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox display="flex" alignItems="center">
        <ArgonTypography variant="button" fontWeight="regular" color="text">
          {price}
        </ArgonTypography>
        <ArgonBox
          display="flex"
          alignItems="center"
          lineHeight={1}
          ml={3}
          sx={{ cursor: "pointer" }}
        >
          <Icon fontSize="small">picture_as_pdf</Icon>
          <ArgonTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
