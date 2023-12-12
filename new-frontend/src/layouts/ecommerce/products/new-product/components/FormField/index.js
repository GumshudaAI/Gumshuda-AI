 

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";

function FormField({ label, ...rest }) {
  return (
    <>
      <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <ArgonTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </ArgonTypography>
      </ArgonBox>
      <ArgonInput {...rest} />
    </>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;
