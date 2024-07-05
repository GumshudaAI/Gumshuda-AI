 

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

// Gumshuda AI MUI page layout routes
import pageRoutes from "page.routes";

function CoverLayout({ title, description, image, imgPosition, button, children }) {
  return (
    <PageLayout>
      <ArgonBox mt={1}>
        <DefaultNavbar
          routes={pageRoutes}
          action={{
            type: "external",
            route: "https://creative-tim.com/product/argon-dashboard-pro-material-ui",
            label: "Buy Now",
            ...button,
          }}
          transparent
          light
        />
      </ArgonBox>
      <ArgonBox
        width="calc(100% - 2rem)"
        minHeight="50vh"
        borderRadius="lg"
        mx={2}
        mt={2}
        mb={8}
        pt={18}
        pb={20}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: imgPosition,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={4}>
            <ArgonBox mb={1}>
              <ArgonTypography variant="h1" color="white" fontWeight="bold">
                {title}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonTypography variant="body2" color="white" fontWeight="regular">
                {description}
              </ArgonTypography>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  title: "",
  description: "",
  imgPosition: "center",
  button: { color: "white" },
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  imgPosition: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
