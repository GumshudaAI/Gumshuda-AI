/* eslint-disable react/prop-types */
// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";
import PowerAvatar from "components/PowerAvatar";
import PowerBadge from "components/PowerBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <PowerBox display="flex" alignItems="center" px={1} py={0.5}>
      <PowerBox mr={2}>
        <PowerAvatar src={image} alt={name} size="sm" variant="rounded" />
      </PowerBox>
      <PowerBox display="flex" flexDirection="column">
        <PowerTypography variant="button" fontWeight="medium">
          {name}
        </PowerTypography>
        <PowerTypography variant="caption" color="secondary">
          {email}
        </PowerTypography>
      </PowerBox>
    </PowerBox>
  );
}

function Function({ job, org }) {
  return (
    <PowerBox display="flex" flexDirection="column">
      <PowerTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </PowerTypography>
      <PowerTypography variant="caption" color="secondary">
        {org}
      </PowerTypography>
    </PowerBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      function: <Function job="Manager" org="Organization" />,
      status: <PowerBadge variant="contained" badgeContent="online" color="success" size="xs" />,
      employed: (
        <PowerTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </PowerTypography>
      ),
      action: (
        <PowerTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </PowerTypography>
      ),
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: <PowerBadge variant="contained" badgeContent="offline" color="secondary" size="xs" />,
      employed: (
        <PowerTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </PowerTypography>
      ),
      action: (
        <PowerTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </PowerTypography>
      ),
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      function: <Function job="Executive" org="Projects" />,
      status: <PowerBadge variant="contained" badgeContent="online" color="success" size="xs" />,
      employed: (
        <PowerTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </PowerTypography>
      ),
      action: (
        <PowerTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </PowerTypography>
      ),
    },
    {
      author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: <PowerBadge variant="contained" badgeContent="online" color="success" size="xs" />,
      employed: (
        <PowerTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </PowerTypography>
      ),
      action: (
        <PowerTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </PowerTypography>
      ),
    },
    {
      author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: <PowerBadge variant="contained" badgeContent="offline" color="secondary" size="xs" />,
      employed: (
        <PowerTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </PowerTypography>
      ),
      action: (
        <PowerTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </PowerTypography>
      ),
    },
  ],
};

export default authorsTableData;
