/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import ArgonProgress from "components/ArgonProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <ArgonBox display="flex" alignItems="center">
      <ArgonTypography variant="caption" color="text">
        {value}%
      </ArgonTypography>
      <ArgonBox width="8rem" ml={1}>
        <ArgonProgress value={value} color={color} label={false} />
      </ArgonBox>
    </ArgonBox>
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
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $2,500
        </ArgonTypography>
      ),
      status: <ArgonBadgeDot color="info" badgeContent="working" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: [logoInvesion, "Invesion"],
      budget: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $5,000
        </ArgonTypography>
      ),
      status: <ArgonBadgeDot color="success" badgeContent="done" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: [logoJira, "Jira"],
      budget: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $3,400
        </ArgonTypography>
      ),
      status: <ArgonBadgeDot color="error" badgeContent="canceled" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: [logoSlack, "Slack"],
      budget: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $1,400
        </ArgonTypography>
      ),
      status: <ArgonBadgeDot color="error" badgeContent="canceled" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      project: [logoWebDev, "Webdev"],
      budget: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $14,000
        </ArgonTypography>
      ),
      status: <ArgonBadgeDot color="info" badgeContent="working" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: [logoXD, "Adobe XD"],
      budget: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          $2,300
        </ArgonTypography>
      ),
      status: <ArgonBadgeDot color="success" badgeContent="done" size="xs" sx={{ px: 0 }} />,
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};

export default projectsTableData;
