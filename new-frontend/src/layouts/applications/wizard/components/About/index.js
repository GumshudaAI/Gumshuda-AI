 

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonButton from "components/ArgonButton";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

// Images
import team2 from "assets/images/team-2.jpg";

function About() {
  return (
    <ArgonBox>
      <ArgonBox width="80%" textAlign="center" mx="auto" mb={4}>
        <ArgonBox mb={1}>
          <ArgonTypography variant="h5" fontWeight="regular">
            Let&apos;s start with the basic information
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="body2" fontWeight="regular" color="text">
          Let us know your name and email address. Use an address you don&apos;t mind other users
          contacting you at
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <ArgonBox position="relative" height="max-content" mx="auto">
              <ArgonAvatar src={team2} alt="profile picture" size="xxl" variant="rounded" />
              <ArgonBox alt="spotify logo" position="absolute" right={0} bottom={0} mr={-1} mb={-1}>
                <ArgonButton variant="gradient" color="light" size="small" iconOnly>
                  <Icon>edit</Icon>
                </ArgonButton>
              </ArgonBox>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} sm={8}>
            <ArgonBox mb={2}>
              <FormField type="text" label="first name" placeholder="Eg. Michael" />
            </ArgonBox>
            <ArgonBox mb={2}>
              <FormField type="text" label="last name" placeholder="Eg. Tomson" />
            </ArgonBox>
            <ArgonBox>
              <FormField type="text" label="email address" placeholder="Eg. soft@dashboard.com" />
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

export default About;
