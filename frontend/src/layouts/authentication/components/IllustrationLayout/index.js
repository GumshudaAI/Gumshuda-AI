 

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

// Gumshuda AI MUI page layout routes
import pageRoutes from "page.routes";

function IllustrationLayout({ color, header, title, description, button, illustration, children }) {
  return (
    <PageLayout background="white">
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/argon-dashboard-pro-react",
          label: "Buy Now",
          ...button,
        }}
      />
      <Grid container>
        <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
          <ArgonBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <ArgonBox pt={3} px={3}>
              {!header ? (
                <>
                  <ArgonBox mb={1}>
                    <ArgonTypography variant="h4" fontWeight="bold">
                      {title}
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonTypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </ArgonTypography>
                </>
              ) : (
                header
              )}
            </ArgonBox>
            <ArgonBox p={3}>{children}</ArgonBox>
          </ArgonBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ArgonBox
            display={{ xs: "none", lg: "flex" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            position="relative"
            borderRadius="lg"
            textAlign="center"
            m={2}
            px={13}
            sx={{ overflow: "hidden" }}
          >
            <ArgonBox
              component="img"
              src={illustration.image}
              alt="background"
              width="100%"
              position="absolute"
              top={0}
              left={0}
            />
            <ArgonBox
              bgColor={color}
              variant="gradient"
              width="100%"
              height="100%"
              position="absolute"
              topl={0}
              left={0}
              opacity={0.7}
            />
            <ArgonBox position="relative">
              {illustration.title && (
                <ArgonBox mt={6} mb={1}>
                  <ArgonTypography variant="h4" color="white" fontWeight="bold">
                    {illustration.title}
                  </ArgonTypography>
                </ArgonBox>
              )}
              {illustration.description && (
                <ArgonBox mb={1}>
                  <ArgonTypography variant="body2" color="white">
                    {illustration.description}
                  </ArgonTypography>
                </ArgonBox>
              )}
            </ArgonBox>
          </ArgonBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  color: "info",
  header: "",
  title: "",
  description: "",
  button: { color: "info" },
  illustration: {},
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default IllustrationLayout;
