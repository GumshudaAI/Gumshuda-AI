 

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// formik components
import { ErrorMessage, Field } from "formik";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";

function FormField({ label, name, ...rest }) {
  return (
    <ArgonBox mb={1.5}>
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
      <Field {...rest} name={name} as={ArgonInput} />
      <ArgonBox mt={0.75}>
        <ArgonTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
