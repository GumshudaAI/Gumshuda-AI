 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Sweet Alerts page components
import Basic from "layouts/pages/sweet-alerts/components/Basic";
import Success from "layouts/pages/sweet-alerts/components/Success";
import CustomHtml from "layouts/pages/sweet-alerts/components/CustomHtml";
import GithubAvatarRequest from "layouts/pages/sweet-alerts/components/GithubAvatarRequest";
import TitleWithText from "layouts/pages/sweet-alerts/components/TitleWithText";
import AutoClose from "layouts/pages/sweet-alerts/components/AutoClose";
import WithAttachedFunction from "layouts/pages/sweet-alerts/components/WithAttachedFunction";
import WithSuccessAttachedFunction from "layouts/pages/sweet-alerts/components/WithSuccessAttachedFunction";
import RtlLanguarge from "layouts/pages/sweet-alerts/components/RtlLanguarge";

function SweetAlerts() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mt={3} mb={14} position="relative">
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <ArgonBox textAlign="center">
              <ArgonTypography variant="h2" color="white" fontWeight="bold">
                Sweet Alert
              </ArgonTypography>
              <ArgonBox mt={1} mb={2}>
                <ArgonTypography variant="body2" color="white">
                  A beautiful plugin, that replace the classic alert, Handcrafted by our friend{" "}
                  <ArgonTypography
                    component="a"
                    href="https://twitter.com/t4t5"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="white"
                  >
                    Tristan Edwards.
                  </ArgonTypography>{" "}
                  Please check out the{" "}
                  <ArgonTypography
                    component="a"
                    href="https://sweetalert2.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="white"
                  >
                    full documentation.
                  </ArgonTypography>
                </ArgonTypography>
              </ArgonBox>
            </ArgonBox>
          </Grid>
        </Grid>
        <ArgonBox mt={1}>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8} container spacing={3}>
              <Grid item xs={12} md={4}>
                <Basic />
              </Grid>
              <Grid item xs={12} md={4}>
                <Success />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomHtml />
              </Grid>
              <Grid item xs={12} md={4}>
                <GithubAvatarRequest />
              </Grid>
              <Grid item xs={12} md={4}>
                <TitleWithText />
              </Grid>
              <Grid item xs={12} md={4}>
                <AutoClose />
              </Grid>
              <Grid item xs={12} md={4}>
                <WithAttachedFunction />
              </Grid>
              <Grid item xs={12} md={4}>
                <WithSuccessAttachedFunction />
              </Grid>
              <Grid item xs={12} md={4}>
                <RtlLanguarge />
              </Grid>
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SweetAlerts;
