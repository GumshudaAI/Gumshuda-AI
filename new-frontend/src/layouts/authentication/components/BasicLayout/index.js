 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
// Gumshuda AI MUI page layout routes
import pageRoutes from "page.routes";

function BasicLayout({ button, image, children }) {
  return (
    <PageLayout>
      {/* <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/argon-dashboard-pro-mui",
          label: "Buy Now",
          ...button,
        }}
      /> */}
      <ArgonBox
        display="grid"
        alignItems="center"
        width="100%"
        height="100vh"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ArgonBox px={1} width="100%" mx="auto">
          <Grid container justifyContent="center">
            <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
              {children}
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
      {/* <Footer /> */}
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
  button: { color: "info" },
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  button: PropTypes.object,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  
};

export default BasicLayout;
