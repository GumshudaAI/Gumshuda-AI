 

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Messages() {
  const messagesAvatarStyles = {
    border: ({ borders: { borderWidth }, palette: { white } }) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <Card>
      <ArgonBox display="flex" alignItems="center" justifyContent="space-between" p={3}>
        <ArgonTypography variant="body2" color="text">
          Messages
        </ArgonTypography>
        <ArgonBox display="flex">
          <Tooltip title="2 New Messages" placement="top">
            <ArgonAvatar src={team1} alt="team-1" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="1 New Messages" placement="top">
            <ArgonAvatar src={team2} alt="team-2" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="13 New Messages" placement="top">
            <ArgonAvatar src={team3} alt="team-3" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="7 New Messages" placement="top">
            <ArgonAvatar src={team4} alt="team-4" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Messages;
