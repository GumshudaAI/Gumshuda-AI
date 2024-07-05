 

// react-leaflet map components
import { MapContainer, TileLayer } from "react-leaflet";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Hidden from "@mui/material/Hidden";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import ArgonAvatar from "components/ArgonAvatar";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

// Images
import curved10 from "assets/images/curved-images/curved10.jpg";
import spotifyLogo from "assets/images/small-logos/logo-spotify.svg";

function AutomotiveMonitor() {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <Card sx={{ position: "relative" }}>
      <ArgonBox p={3}>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={4}>
            <ArgonInput
              size="large"
              startAdornment={
                <i
                  className="ni ni-zoom-split-in"
                  aria-hidden="true"
                  style={{ marginRight: "8px" }}
                />
              }
              placeholder="Search anything..."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} my="auto" ml="auto">
            <ArgonBox display="flex" justifyContent="flex-end" alignItems="center">
              <ArgonBox color="text" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Tooltip title="Headphones connected" placement="top" arrow>
                  <Icon fontSize="default">headphones</Icon>
                </Tooltip>
              </ArgonBox>
              <ArgonBox color="text" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Tooltip title="Music is playing" placement="top" arrow>
                  <Icon fontSize="large">play_arrow</Icon>
                </Tooltip>
              </ArgonBox>
              <ArgonBox color="text" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Tooltip title="Start radio" placement="top" arrow>
                  <Icon fontSize="default">power_settings_new</Icon>
                </Tooltip>
              </ArgonBox>
              <ArgonBox color="text" lineHeight={0} ml={{ xs: 1, sm: 2 }}>
                <Tooltip title="Time tracker" placement="top" arrow>
                  <Icon fontSize="default">timer</Icon>
                </Tooltip>
              </ArgonBox>
              <ArgonBox ml={{ xs: 1.5, sm: 3 }}>
                <ArgonTypography variant="h4" color="text">
                  10:45
                </ArgonTypography>
              </ArgonBox>
            </ArgonBox>
          </Grid>
        </Grid>
        <Divider light />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ArgonBox display="flex" alignItems="center" position="relative">
              <ArgonTypography variant="h3" color="text" fontWeight="bold">
                11:13
              </ArgonTypography>
              <ArgonBox ml={2}>
                <ArgonTypography variant="body2" color="text" opacity={0.8}>
                  Estimated arrival time
                </ArgonTypography>
              </ArgonBox>
              <Hidden smDown>
                <ArgonBox ml="auto" height="2.5rem">
                  <Divider orientation="vertical" light />
                </ArgonBox>
              </Hidden>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ArgonBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <ArgonBox ml={{ md: "auto" }}>
                <ArgonTypography variant="h3" color="text" fontWeight="bold">
                  2.4
                  <ArgonTypography variant="button" color="text" verticalAlign="top">
                    Km
                  </ArgonTypography>
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox ml={2} mr="auto">
                <ArgonTypography variant="body2" color="text" opacity={0.8}>
                  Turn right in 2.4 miles
                </ArgonTypography>
              </ArgonBox>
              <Hidden mdDown>
                <ArgonBox height="2.5rem">
                  <Divider orientation="vertical" light />
                </ArgonBox>
              </Hidden>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ArgonBox display="flex" alignItems="center" position="relative">
              <ArgonBox ml={{ xs: 0, lg: "auto" }}>
                <ArgonTypography variant="h3" color="text" fontWeight="bold">
                  6.3
                  <ArgonTypography variant="button" color="text" verticalAlign="top">
                    Km
                  </ArgonTypography>
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox ml={2}>
                <ArgonTypography variant="body2" color="text" opacity={0.8}>
                  Distance to Creative Tim
                </ArgonTypography>
              </ArgonBox>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox width="100%" height="16rem">
        <MapContainer
          center={[38.89, -77.03]}
          zoom={11}
          maxZoom={19}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
        </MapContainer>
      </ArgonBox>
      <ArgonBox p={3}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} lg={4}>
            <ArgonBox display="flex" alignItems="center">
              <ArgonBox position="relative">
                <ArgonAvatar src={curved10} alt="kal" size="lg" />
                <ArgonBox
                  component="img"
                  src={spotifyLogo}
                  alt="spotify logo"
                  position="absolute"
                  right={0}
                  bottom={-7}
                  width="60%"
                  mr={-2}
                />
              </ArgonBox>
              <ArgonBox px={2}>
                <ArgonTypography component="p" variant="button" fontWeight="medium" color="text">
                  You&apos;re Mines Still (feat Drake)
                </ArgonTypography>
                <ArgonTypography
                  component="p"
                  variant="caption"
                  color="text"
                  opacity={0.8}
                  gutterBottom
                >
                  Yung Bleu - Hip-Hop
                </ArgonTypography>
              </ArgonBox>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ArgonBox display="flex" alignItems="center" justifyContent="center">
              <ArgonButton
                variant="outlined"
                color={darkMode ? "white" : "dark"}
                size="large"
                circular
                iconOnly
                sx={{
                  mx: 1.5,

                  "& .material-icons": {
                    fontSize: "2rem",
                  },
                }}
              >
                <Icon>skip_previous</Icon>
              </ArgonButton>
              <ArgonButton
                variant="outlined"
                color={darkMode ? "white" : "dark"}
                size="large"
                circular
                iconOnly
                sx={{
                  mx: 1.5,

                  "& .material-icons": {
                    fontSize: "2rem",
                  },
                }}
              >
                <Icon>pause</Icon>
              </ArgonButton>
              <ArgonButton
                variant="outlined"
                color={darkMode ? "white" : "dark"}
                size="large"
                circular
                iconOnly
                sx={{
                  mx: 1.5,

                  "& .material-icons": {
                    fontSize: "2rem",
                  },
                }}
              >
                <Icon>skip_next</Icon>
              </ArgonButton>
            </ArgonBox>
          </Grid>
          <Grid item xs={8} md={6} lg={2}>
            <ArgonBox mb={-2}>
              <ArgonTypography variant="body2" color="text">
                Volume
              </ArgonTypography>
              <Slider
                defaultValue={50}
                sx={{
                  py: 1.25,

                  "& .MuiSlider-rail": {
                    opacity: 1,
                  },
                }}
              />
            </ArgonBox>
          </Grid>
          <Grid item xs={4} md={6} lg={1} sx={{ ml: "auto" }}>
            <ArgonBox display="flex" alignItems="center">
              <ArgonBox color="text" lineHeight={0}>
                <Tooltip title="Hide menu" placement="top" arrow>
                  <Icon fontSize="small">format_list_bulleted</Icon>
                </Tooltip>
              </ArgonBox>
              <ArgonBox color="text" lineHeight={0} ml={2}>
                <Tooltip title="Track messages" placement="top" arrow>
                  <Icon fontSize="small">mode_comment</Icon>
                </Tooltip>
              </ArgonBox>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
    </Card>
  );
}

export default AutomotiveMonitor;
