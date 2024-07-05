import { Fragment } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonProgress from "components/ArgonProgress";
import ArgonTypography from "components/ArgonTypography";

// Images
import img1 from "assets/images/small-logos/logo-jira.svg";
import img2 from "assets/images/small-logos/logo-asana.svg";
import img3 from "assets/images/small-logos/logo-spotify.svg";
import img4 from "assets/images/small-logos/bootstrap.svg";

// Data
const data = [
  { img: img1, name: "React Material Dashboard", progress: 90, color: "info" },
  { img: img2, name: "Argon Design System", progress: 60, color: "error" },
  { img: img3, name: "VueJs Now UI Kit PRO", progress: 100, color: "success" },
  { img: img4, name: "Soft UI Dashboard", progress: 72, color: "info" },
];

function ProgressTrack() {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <ArgonBox p={3}>
        <ArgonTypography variant="h5" textTransform="capitalize">
          Progress Track
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pb={3} px={3}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          m={0}
          p={0}
          sx={{ listStyle: "none" }}
        >
          {data.map(({ img, name, progress, color }, key) => (
            <Fragment key={key}>
              <ArgonBox component="li" py={1}>
                <ArgonBox display="flex" alignItems="center" width="100%">
                  <ArgonAvatar src={img} alt={name} variant="rounded" />
                  <ArgonBox width="100%" ml={3}>
                    <ArgonTypography variant="h6" mb={1}>
                      {name}
                    </ArgonTypography>
                    <ArgonProgress value={progress} color={color} />
                  </ArgonBox>
                </ArgonBox>
              </ArgonBox>
              {key !== data.length - 1 && (
                <ArgonBox
                  component="hr"
                  sx={({ palette: { grey } }) => ({
                    borderTop: `1px solid ${grey[300]}`,
                    borderBottom: 0,
                  })}
                />
              )}
            </Fragment>
          ))}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ProgressTrack;
