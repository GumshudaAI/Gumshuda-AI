 

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function Template({ title, action }) {
  return (
    <Card>
      <ArgonBox p={3} textAlign="center">
        <ArgonBox mb={2}>
          <ArgonTypography variant="body2" color="text">
            {title}
          </ArgonTypography>
        </ArgonBox>
        <ArgonButton variant="gradient" color="info" onClick={action}>
          Try Me!
        </ArgonButton>
      </ArgonBox>
    </Card>
  );
}

// Typechecking props for the Template
Template.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Template;
