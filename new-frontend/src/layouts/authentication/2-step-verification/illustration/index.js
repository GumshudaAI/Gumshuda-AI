 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/verification-ill.jpg";

function Illustration() {
  return (
    <IllustrationLayout
      color="warning"
      header={
        <ArgonBox px={5} textAlign="center">
          <ArgonTypography variant="h2" fontWeight="bold">
            2-Step Verification
          </ArgonTypography>
        </ArgonBox>
      }
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
      button={{ color: "warning" }}
    >
      <ArgonBox component="form" role="form" px={3}>
        <ArgonBox mb={2}>
          <Grid container spacing={2}>
            <Grid item xs>
              <ArgonInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <ArgonInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <ArgonInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <ArgonInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonButton color="warning" fullWidth>
            Send Code
          </ArgonButton>
        </ArgonBox>
        <ArgonBox textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Haven&apos;t received it?{" "}
            <ArgonTypography component="a" href="#verification" variant="button">
              Resend a new code
            </ArgonTypography>
            .
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
