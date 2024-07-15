import { Fragment } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerButton from "components/PowerButton";
import PowerTypography from "components/PowerTypography";

function BuyMeACoffee() {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <PowerBox p={3}>
        <PowerTypography variant="h5" textTransform="capitalize">
          Buy Me a Coffee
        </PowerTypography>
      </PowerBox>
      <PowerBox pb={3} px={3}>
        <PowerBox
          component="div"
          display="flex"
          flexDirection="column"
          alignItems="center"
          m={0}
          p={0}
        >
          <PowerTypography variant="body1" color="text" gutterBottom>
            If you like my work, consider buying me a coffee!
          </PowerTypography>
          <PowerButton
            href="https://www.buymeacoffee.com/whynesspower"
            variant="contained"
            color="info"
            size="large"
            target="_blank"
            startIcon={<Icon>local_cafe</Icon>}
          >
            Buy Me a Coffee
          </PowerButton>
        </PowerBox>
      </PowerBox>
    </Card>
  );
}

export default BuyMeACoffee;
