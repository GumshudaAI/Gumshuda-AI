 

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = () => setVisible(!visible);

  return (
    <Card id="profile">
      <ArgonBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <ArgonAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <ArgonBox height="100%" mt={0.5} lineHeight={1}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Alex Thompson
              </ArgonTypography>
              <ArgonTypography variant="button" color="text" fontWeight="medium">
                CEO / Co-Founder
              </ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <ArgonBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              <ArgonTypography variant="caption" fontWeight="regular">
                Switch to {visible ? "invisible" : "visible"}
              </ArgonTypography>
              <ArgonBox mx={1}>
                <Switch checked={visible} onChange={handleSetVisible} />
              </ArgonBox>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
    </Card>
  );
}

export default Header;
