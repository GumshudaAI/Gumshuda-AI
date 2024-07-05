 

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function Socials({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { twitter, facebook, instagram } = formField;
  const { twitter: twitterV, facebook: facebookV, instagram: instagramV } = values;

  return (
    <ArgonBox>
      <ArgonTypography variant="h5" fontWeight="bold">
        Socials
      </ArgonTypography>
      <ArgonBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={twitter.type}
              label={twitter.label}
              name={twitter.name}
              value={twitterV}
              placeholder={twitter.placeholder}
              error={errors.twitter && touched.twitter}
              success={twitterV.length > 0 && !errors.twitter}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={facebook.type}
              label={facebook.label}
              name={facebook.name}
              value={facebookV}
              placeholder={facebook.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={instagram.type}
              label={instagram.label}
              name={instagram.name}
              value={instagramV}
              placeholder={instagram.placeholder}
            />
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

// typechecking props for Socials
Socials.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Socials;
