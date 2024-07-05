 

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Gumshuda AI MUI page layout routes
import pageRoutes from "page.routes";

// Images
const bgIamge =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/verification-basic.jpg";

function Basic() {
  return (
    <PageLayout>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/argon-dashboard-pro-material-ui",
          label: "Buy Now",
          color: "white",
        }}
        transparent
        light
      />
      <ArgonBox position="relative" width="100vw" height="100vh" sx={{ overflow: "hidden" }}>
        <ArgonBox
          component="img"
          src={bgIamge}
          alt="background-image"
          position="absolute"
          width="100%"
          height="100%"
          sx={{ objectFit: "cover", objectPosition: "center" }}
        />
        <ArgonBox
          position="absolute"
          width="100%"
          height="100%"
          bgColor="dark"
          variant="gradient"
          opacity={0.6}
        />
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={11} md={6} lg={3}>
            <Card>
              <ArgonBox textAlign="center" p={6}>
                <ArgonBox
                  display="grid"
                  justifyContent="center"
                  alignItems="center"
                  width="6.25rem"
                  height="6.25rem"
                  borderRadius="50%"
                  shadow="md"
                  fontSize="2.5rem"
                  color="white"
                  bgColor="info"
                  variant="gradient"
                  mx="auto"
                  mb={3}
                >
                  <i className="ni ni-spaceship" />
                </ArgonBox>
                <ArgonBox mb={3} px={1}>
                  <ArgonTypography variant="h2" fontWeight="bold">
                    2-Step Verification
                  </ArgonTypography>
                </ArgonBox>
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
                  <ArgonButton variant="gradient" color="info" fullWidth>
                    Send Code
                  </ArgonButton>
                </ArgonBox>
                <ArgonTypography variant="button" color="text" fontWeight="regular">
                  Haven&apos;t received it?{" "}
                  <ArgonTypography component="a" href="#verification" variant="button">
                    Resend a new code
                  </ArgonTypography>
                  .
                </ArgonTypography>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
    </PageLayout>
  );
}

export default Basic;
