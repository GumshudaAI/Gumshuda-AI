 

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

// Images
import tesla from "assets/images/tesla.png";
import patternLeft from "assets/images/shapes/pattern-left.png";
import patternRight from "assets/images/shapes/pattern-right.png";

function AutomotiveDetails() {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <Card
      position="relative"
      sx={{ position: "relative", py: 3, px: { xs: 3, sm: 6 }, mt: 3, overflow: "visible" }}
    >
      <ArgonBox
        component="img"
        src={patternLeft}
        alt="pattern-left"
        height="100%"
        position="absolute"
        left="0"
        top="0"
        opacity={0.4}
        borderRadius="xl"
      />
      <ArgonBox
        component="img"
        src={patternRight}
        alt="pattern-right"
        height="100%"
        position="absolute"
        right="0"
        top="0"
        opacity={0.4}
        borderRadius="xl"
      />
      <Grid container alignItems="center" position="relative">
        <Grid item xs={12} lg={3} my="auto">
          <ArgonBox px={{ xs: 0, md: 1.5 }}>
            <ArgonTypography
              variant="h4"
              color="text"
              textTransform="capitalize"
              textAlign="center"
              opacity={0.9}
            >
              since last charge
            </ArgonTypography>
            <Divider light sx={{ mt: 1 }} />
            <ArgonBox display="flex" justifyContent="center">
              <ArgonBox textAlign="center">
                <ArgonTypography variant="h6" color="text" textTransform="capitalize" opacity={0.7}>
                  distance
                </ArgonTypography>
                <ArgonTypography variant="h3" color="text" fontWeight="bold">
                  145{" "}
                  <ArgonTypography variant="button" color="text" verticalAlign="top">
                    Km
                  </ArgonTypography>
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox ml={{ xs: 3, md: 8 }} mb={{ xs: 1, md: 0 }} textAlign="center">
                <ArgonTypography variant="h6" color="text" textTransform="capitalize" opacity={0.7}>
                  average energy
                </ArgonTypography>
                <ArgonTypography variant="h3" color="text" fontWeight="bold">
                  300{" "}
                  <ArgonTypography variant="button" color="text" verticalAlign="top">
                    Kw
                  </ArgonTypography>
                </ArgonTypography>
              </ArgonBox>
            </ArgonBox>
          </ArgonBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ArgonBox textAlign="center">
            <ArgonBox
              component="img"
              src={tesla}
              alt="car image"
              display={{ xs: "none", md: "block" }}
              width="100%"
              mt={{ xs: 0, lg: -16 }}
            />
            <ArgonBox
              display="flex"
              justifyContent={{ xs: "flex-start", md: "center" }}
              alignItems="center"
              mb={1}
            >
              <ArgonTypography
                variant="h4"
                color={darkMode ? "white" : "text"}
                textTransform="capitalize"
                opacity={0.7}
              >
                available range
              </ArgonTypography>
              <ArgonBox ml={1}>
                <ArgonTypography variant="h2" color="text" fontWeight="bold">
                  47
                  <ArgonTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    verticalAlign="top"
                  >
                    %
                  </ArgonTypography>
                </ArgonTypography>
              </ArgonBox>
            </ArgonBox>
          </ArgonBox>
        </Grid>
        <Grid item xs={12} lg={3}>
          <ArgonBox px={{ xs: 0, md: 1.5 }}>
            <ArgonTypography variant="h4" color="text" textTransform="capitalize" opacity={0.9}>
              nearest charger
            </ArgonTypography>
            <Divider light sx={{ mt: 1 }} />
            <ArgonBox display="flex" alignItems="center">
              <ArgonBox>
                <ArgonTypography variant="h6" color="text">
                  Miclan, DW
                </ArgonTypography>
                <ArgonTypography variant="h6" color="text">
                  891 Limarenda road
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox ml={8}>
                <ArgonButton
                  variant="outlined"
                  color={darkMode ? "white" : "dark"}
                  circular
                  iconOnly
                >
                  <i className="ni ni-map-big" aria-hidden="true" />
                </ArgonButton>
              </ArgonBox>
            </ArgonBox>
          </ArgonBox>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AutomotiveDetails;
