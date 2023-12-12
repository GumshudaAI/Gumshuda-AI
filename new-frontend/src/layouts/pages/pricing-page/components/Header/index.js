 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Gumshuda AI MUI page layout routes
import pageRoutes from "page.routes";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

// Images
import bgImage from "assets/images/pricing-header-bg.jpg";

function Header({ tabValue, tabHandler }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/argon-dashboard-pro-react",
          label: "Buy Now",
          color: "white",
        }}
        transparent
        light
      />
      <ArgonBox
        position="relative"
        height="50vh"
        overflow="hidden"
        pt={12}
        pb={20}
        sx={({ palette: { gradients }, functions: { linearGradient, rgba } }) => ({
          backgroundImage: `${linearGradient(
            rgba(gradients.info.main, 0.5),
            rgba(gradients.info.state, 0.5)
          )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          width: "100%",
        })}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={5}>
            <ArgonBox mt={3} mb={1}>
              <ArgonTypography variant="h3" color="white" fontWeight="bold">
                See our pricing
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonTypography variant="body2" color="white" fontWeight="regular">
                You have Free Unlimited Updates and Premium Support on each package.
              </ArgonTypography>
            </ArgonBox>
            <Grid container item xs={12} sm={10} md={8} lg={7} sx={{ mx: "auto" }}>
              <ArgonBox width="100%" mt={6}>
                <AppBar position="static">
                  <Tabs value={tabValue} onChange={tabHandler}>
                    <Tab
                      id="monthly"
                      label={
                        <ArgonBox color={darkMode ? "white" : "dark"} py={0.5} px={2}>
                          Monthly
                        </ArgonBox>
                      }
                    />
                    <Tab
                      id="annual"
                      label={
                        <ArgonBox color={darkMode ? "white" : "dark"} py={0.5} px={2}>
                          Annual
                        </ArgonBox>
                      }
                    />
                  </Tabs>
                </AppBar>
              </ArgonBox>
            </Grid>
          </Grid>
        </Grid>
      </ArgonBox>
    </>
  );
}

// Typechecking props for the Header
Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  tabHandler: PropTypes.func.isRequired,
};

export default Header;
