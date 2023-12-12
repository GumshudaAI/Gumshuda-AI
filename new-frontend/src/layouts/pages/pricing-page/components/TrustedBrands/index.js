 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Images
import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

function PricingCards() {
  return (
    <ArgonBox mt={8}>
      <ArgonBox textAlign="center">
        <ArgonTypography variant="h6" opacity={0.5}>
          More than 50+ brands trust Soft
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} lg={2}>
            <ArgonBox
              component="img"
              src={coinbase}
              alt="coinbase"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <ArgonBox component="img" src={nasa} alt="nasa" width="90%" opacity={0.9} mb={3} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <ArgonBox
              component="img"
              src={netflix}
              alt="netflix"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <ArgonBox
              component="img"
              src={pinterest}
              alt="pinterest"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <ArgonBox
              component="img"
              src={spotify}
              alt="spotify"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <ArgonBox
              component="img"
              src={vodafone}
              alt="vodafone"
              width="90%"
              opacity={0.9}
              mb={3}
            />
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

export default PricingCards;
