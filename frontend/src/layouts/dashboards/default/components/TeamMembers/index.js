import { Fragment } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerAvatar from "components/PowerAvatar";
import PowerBadge from "components/PowerBadge";
import PowerButton from "components/PowerButton";
import PowerTypography from "components/PowerTypography";

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
      <PowerBox p={3}>
        <PowerTypography variant="h5" textTransform="capitalize">
          Team members
        </PowerTypography>
      </PowerBox>
      <PowerBox pb={3} px={3}>
        <PowerBox
          component="ul"
          display="flex"
          flexDirection="column"
          m={0}
          p={0}
          sx={{ listStyle: "none" }}
        >
          {data.map(({ img, name, status, badge }, key) => (
            <Fragment key={key}>
              <PowerBox component="li" py={1}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item alignItems="center">
                    <PowerAvatar src={img} alt={name} variant="rounded" />
                  </Grid>
                  <Grid item lineHeight={1.4}>
                    <PowerTypography variant="h6">{name}</PowerTypography>
                    <PowerBadge
                      variant="contained"
                      color={badge}
                      badgeContent={status}
                      size="xs"
                      container
                    />
                  </Grid>
                  <Grid item ml="auto">
                    <PowerButton
                      href="https://www.twitter.com/whynesspower2"
                      variant="outlined"
                      color="info"
                      size="small"
                      target="__blank"
                    >
                      Add
                    </PowerButton>
                  </Grid>
                </Grid>
              </PowerBox>
              {key !== data.length - 1 && (
                <PowerBox
                  component="hr"
                  sx={({ palette: { grey } }) => ({
                    borderTop: `1px solid ${grey[300]}`,
                    borderBottom: 0,
                  })}
                />
              )}
            </Fragment>
          ))}
        </PowerBox>
      </PowerBox>
    </Card>
  );
}

export default TeamMembers;
