 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
const orderImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/smartwatch.jpg";

function OrderInfo() {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonAvatar variant="rounded" size="xxl" src={orderImage} alt="Smart Watch" />
          </ArgonBox>
          <ArgonBox lineHeight={1}>
            <ArgonTypography variant="h6" fontWeight="medium">
              Smart Watch
            </ArgonTypography>
            <ArgonBox mb={2}>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                Order was delivered 2 days ago.
              </ArgonTypography>
            </ArgonBox>
            <ArgonBadge
              variant="gradient"
              color="success"
              size="xs"
              badgeContent="delivered"
              container
            />
          </ArgonBox>
        </ArgonBox>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
        <ArgonButton variant="gradient" color="info">
          Contact Us
        </ArgonButton>
        <ArgonBox mt={0.5}>
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Do you like the product? Leave us a review{" "}
            <ArgonTypography component="a" href="#" variant="button" fontWeight="regular">
              here
            </ArgonTypography>
            .
          </ArgonTypography>
        </ArgonBox>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
