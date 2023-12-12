import { Fragment } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Data
const data = [
  { img: team1, name: "Yashraj Shukla", status: "online", badge: "success" },
  // { img: team2, name: "Alex Smith", status: "in meeting", badge: "warning" },
  // { img: team3, name: "Samantha Ivy", status: "offline", badge: "error" },
  // { img: team4, name: "John Michael", status: "online", badge: "success" },
];

function TeamMembers() {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <ArgonBox p={3}>
        <ArgonTypography variant="h5" textTransform="capitalize">
          Team members
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
          {data.map(({ img, name, status, badge }, key) => (
            <Fragment key={key}>
              <ArgonBox component="li" py={1}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item alignItems="center">
                    <ArgonAvatar src={img} alt={name} variant="rounded" />
                  </Grid>
                  <Grid item lineHeight={1.4}>
                    <ArgonTypography variant="h6">{name}</ArgonTypography>
                    <ArgonBadge
                      variant="contained"
                      color={badge}
                      badgeContent={status}
                      size="xs"
                      container
                    />
                  </Grid>
                  <Grid item ml="auto">
                    <ArgonButton
                      href="https://www.twitter.com/whynesspower2"
                      variant="outlined"
                      color="info"
                      size="small"
                      target="__blank"
                    >
                      Add
                    </ArgonButton>
                  </Grid>
                </Grid>
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

export default TeamMembers;
