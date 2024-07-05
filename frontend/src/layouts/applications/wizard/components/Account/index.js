 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function Account() {
  const [design, setDesign] = useState(false);
  const [code, setCode] = useState(false);
  const [develop, setDevelop] = useState(false);

  const handleSetDesign = () => setDesign(!design);
  const handleSetCode = () => setCode(!code);
  const handleSetDevelop = () => setDevelop(!develop);

  const customButtonStyles = ({
    functions: { pxToRem, rgba },
    borders: { borderWidth },
    palette: { transparent, dark, secondary },
  }) => ({
    width: pxToRem(150),
    height: pxToRem(120),
    borderWidth: borderWidth[2],
    mb: 1,
    ml: 0.5,

    "&.MuiButton-contained, &.MuiButton-contained:hover": {
      boxShadow: "none",
      border: `${borderWidth[2]} solid ${transparent.main}`,
    },

    "&:hover": {
      backgroundColor: `${transparent.main} !important`,
      border: `${borderWidth[2]} solid ${secondary.main} !important`,

      "& i": {
        color: rgba(dark.main, 0.75),
      },
    },
  });

  return (
    <ArgonBox>
      <ArgonBox width="80%" textAlign="center" mx="auto" mb={4}>
        <ArgonBox mb={1}>
          <ArgonTypography variant="h5" fontWeight="regular">
            What are you doing? (checkboxes)
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="body2" fontWeight="regular" color="text">
          Give us more details about you. What do you enjoy doing in your spare time?
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox mt={2}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <ArgonBox textAlign="center">
              <ArgonButton
                color="secondary"
                variant={design ? "contained" : "outlined"}
                onClick={handleSetDesign}
                sx={customButtonStyles}
              >
                <ArgonBox
                  component="i"
                  fontSize="24px"
                  color={design ? "white" : "dark"}
                  className="ni ni-settings-gear-65"
                />
              </ArgonButton>
              <ArgonTypography variant="h6">Design</ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <ArgonBox textAlign="center">
              <ArgonButton
                color="secondary"
                variant={code ? "contained" : "outlined"}
                onClick={handleSetCode}
                sx={customButtonStyles}
              >
                <ArgonBox
                  component="i"
                  fontSize="24px"
                  color={code ? "white" : "dark"}
                  className="ni ni-app"
                />
              </ArgonButton>
              <ArgonTypography variant="h6">Code</ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <ArgonBox textAlign="center">
              <ArgonButton
                color="secondary"
                variant={develop ? "contained" : "outlined"}
                onClick={handleSetDevelop}
                sx={customButtonStyles}
              >
                <ArgonBox
                  component="i"
                  fontSize="24px"
                  color={develop ? "white" : "dark"}
                  className="ni ni-spaceship"
                />
              </ArgonButton>
              <ArgonTypography variant="h6">Develop</ArgonTypography>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

export default Account;
