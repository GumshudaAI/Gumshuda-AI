 

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";

// VR dashboards components
import BaseLayout from "layouts/dashboards/virtual-reality/components/BaseLayout";

// VRInfo dashboards components
import TodoList from "layouts/dashboards/virtual-reality/vr-info/components/TodoList";
import TodoCard from "layouts/dashboards/virtual-reality/vr-info/components/TodoCard";
import Emails from "layouts/dashboards/virtual-reality/vr-info/components/Emails";
import MediaPlayer from "layouts/dashboards/virtual-reality/vr-info/components/MediaPlayer";
import Messages from "layouts/dashboards/virtual-reality/vr-info/components/Messages";

// Images
import team1 from "assets/images/team-1.jpg";
import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";

function VRInfo() {
  const { d1, h2, fontWeightMedium } = typography;

  return (
    <BaseLayout>
      <ArgonBox
        minHeight="100vh"
        ml={{ xs: 0, md: 6 }}
        mt={{ xs: 0, md: 4 }}
        pt={{ xs: 16, md: 32 }}
        pb={{ xs: 0, md: 3 }}
        sx={{ transform: "scale(1.1)" }}
      >
        <Grid container>
          <Grid item xs={12} md={1}>
            <ArgonBox
              display="flex"
              flexDirection={{ xs: "row", md: "column" }}
              justifyContent="center"
              alignItems="center"
              px={2}
              mb={{ xs: 8, md: 0 }}
            >
              <Tooltip title="My Profile" placement="right">
                <ArgonAvatar
                  src={team1}
                  alt="Profile Picture"
                  size="lg"
                  variant="rounded"
                  sx={{ cursor: "pointer" }}
                />
              </Tooltip>

              <ArgonBox my={{ xs: 0, md: 2 }} mx={{ xs: 2, md: 0 }}>
                <Tooltip title="Home" placement="right">
                  <ArgonButton
                    size="large"
                    iconOnly
                    sx={({ palette: { dark }, borders: { borderRadius } }) => ({
                      color: dark.main,
                      borderRadius: borderRadius.lg,
                    })}
                  >
                    <Icon>home</Icon>
                  </ArgonButton>
                </Tooltip>
              </ArgonBox>
              <ArgonBox mb={{ xs: 0, md: 2 }} mr={{ xs: 2, md: 0 }}>
                <Tooltip title="Search" placement="right">
                  <ArgonButton
                    size="large"
                    iconOnly
                    sx={({ palette: { dark }, borders: { borderRadius } }) => ({
                      color: dark.main,
                      borderRadius: borderRadius.lg,
                    })}
                  >
                    <Icon>search</Icon>
                  </ArgonButton>
                </Tooltip>
              </ArgonBox>
              <Tooltip title="Minimize" placement="right">
                <ArgonButton
                  size="large"
                  iconOnly
                  sx={({ palette: { dark }, borders: { borderRadius } }) => ({
                    color: dark.main,
                    borderRadius: borderRadius.lg,
                  })}
                >
                  <Icon>more_horiz</Icon>
                </ArgonButton>
              </Tooltip>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={11} lg={10} xl={9} ml={6} mt={-6}>
            <ArgonBox
              display="flex"
              justifyContent="space-between"
              alignItems={{ xs: "center", md: "flex-end" }}
              ml={{ xs: 1, md: 4 }}
              mt={-1}
            >
              <ArgonBox>
                <ArgonBox
                  fontSize={{ xs: h2.fontSize, lg: d1.fontSize }}
                  fontWeight={fontWeightMedium}
                  lineHeight={1}
                  color="white"
                >
                  28&deg;C
                </ArgonBox>
                <ArgonTypography
                  variant="h6"
                  color="white"
                  fontWeight="medium"
                  textTransform="uppercase"
                >
                  cloudy
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox component="img" src={sunCloud} width="30%" />
            </ArgonBox>
            <ArgonBox mt={3} mb={8} ml={{ xs: 1, md: 4 }} mr={{ xs: 1, md: 0 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <TodoList />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ArgonBox mb={3}>
                    <TodoCard />
                  </ArgonBox>
                  <Emails />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ArgonBox mb={3}>
                    <MediaPlayer />
                  </ArgonBox>
                  <Messages />
                </Grid>
              </Grid>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
    </BaseLayout>
  );
}

export default VRInfo;
