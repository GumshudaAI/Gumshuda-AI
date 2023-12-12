 

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// Gumshuda AI MUI page layout routes
import pageRoutes from "page.routes";

// Images
import bgImage from "assets/images/illustrations/404.svg";

function Error404() {
  const { d1, d3, d4, d5 } = typography;

  return (
    <PageLayout white>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/argon-dashboard-pro-material-ui",
          label: "Buy Now",
          color: "dark",
          variant: "gradient",
        }}
      />
      <ArgonBox
        minHeight="100vh"
        sx={{
          display: "grid",
          placeItems: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} md={7} lg={6} sx={{ textAlign: "center", mx: "auto" }}>
            <ArgonBox
              color="info"
              fontWeight="bold"
              fontSize={{ xs: d5.fontSize, sm: d4.fontSize, md: d3.fontSize, lg: d1.fontSize }}
              lineHeight={1.2}
              mb={2}
            >
              Error 404
            </ArgonBox>
            <ArgonTypography variant="h2" color="dark" fontWeight="bold">
              Erm. Page not found
            </ArgonTypography>
            <ArgonTypography variant="body1" color="text">
              We suggest you to go to the homepage while we solve this issue.
            </ArgonTypography>
            <ArgonButton variant="gradient" color="dark" sx={{ mt: 5 }}>
              Go to Homepage
            </ArgonButton>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </PageLayout>
  );
}

export default Error404;
