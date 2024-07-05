/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";
import PowerBadgeDot from "components/PowerBadgeDot";
import PowerProgress from "components/PowerProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <PowerBox display="flex" alignItems="center">
      <PowerTypography variant="caption" color="text">
        {value}%
      </PowerTypography>
      <PowerBox width="8rem" ml={1}>
        <PowerProgress value={value} color={color} label={false} />
      </PowerBox>
    </PowerBox>
  );
}

const action = (
  <Icon
    sx={{
      cursor: "pointer",
      fontWeight: "bold",
      mt: 0.625,
      color: ({ palette: { dark } }) => dark.main,
    }}
    fontSize="small"
  >
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "project", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: [logoSpotify, "Spotift"],
      budget: (
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          $2,500
        </PowerTypography>
      ),
      status: <PowerBadgeDot color="info" badgeContent="working" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: [logoInvesion, "Invesion"],
      budget: (
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          $5,000
        </PowerTypography>
      ),
      status: <PowerBadgeDot color="success" badgeContent="done" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: [logoJira, "Jira"],
      budget: (
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          $3,400
        </PowerTypography>
      ),
      status: <PowerBadgeDot color="error" badgeContent="canceled" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: [logoSlack, "Slack"],
      budget: (
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          $1,400
        </PowerTypography>
      ),
      status: <PowerBadgeDot color="error" badgeContent="canceled" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      project: [logoWebDev, "Webdev"],
      budget: (
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          $14,000
        </PowerTypography>
      ),
      status: <PowerBadgeDot color="info" badgeContent="working" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: [logoXD, "Adobe XD"],
      budget: (
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          $2,300
        </PowerTypography>
      ),
      status: <PowerBadgeDot color="success" badgeContent="done" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};

export default projectsTableData;
