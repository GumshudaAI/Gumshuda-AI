 

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import PieChart from "examples/Charts/PieChart";

// Data
import channelChartData from "layouts/ecommerce/overview/components/ChannelsChart/data";

function ChannelsChart() {
  return (
    <Card sx={{ overflow: "visible" }}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6">Channels</ArgonTypography>
        <Tooltip title="See traffic channels" placement="bottom" arrow>
          <ArgonButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </ArgonButton>
        </Tooltip>
      </ArgonBox>
      <ArgonBox p={2} mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart chart={channelChartData} height="172px" />
          </Grid>
          <Grid item xs={5}>
            <ArgonBox px={1}>
              <ArgonBox mb={0.5}>
                <ArgonBadgeDot color="info" size="sm" badgeContent="Facebook" />
              </ArgonBox>
              <ArgonBox mb={0.5}>
                <ArgonBadgeDot color="primary" size="sm" badgeContent="Direct" />
              </ArgonBox>
              <ArgonBox mb={0.5}>
                <ArgonBadgeDot color="dark" size="sm" badgeContent="Organic" />
              </ArgonBox>
              <ArgonBox mb={0.5}>
                <ArgonBadgeDot color="secondary" size="sm" badgeContent="Referral" />
              </ArgonBox>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox
        pt={4}
        pb={2}
        px={2}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        mt="auto"
      >
        <ArgonBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            More than <strong>1,200,000</strong> developers used Creative Tim&apos;s products and
            over <strong>700,000</strong> projects were created.
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox width={{ xs: "100%", sm: "40%" }} textAlign="right" mt={{ xs: 2, sm: "auto" }}>
          <ArgonButton color="light">Read More</ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ChannelsChart;
