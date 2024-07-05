 

// react-router components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonAvatar from "components/ArgonAvatar";

function EventCard({ id, image, title, dateTime, description, members, action }) {
  const renderMembers = members.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <ArgonAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          ml: -1.25,
          cursor: "pointer",
          position: "relative",

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card>
      <ArgonBox p={2}>
        <ArgonBox display="flex" alignItems="center">
          <ArgonAvatar src={image} alt={title} size="lg" variant="rounded" />
          <ArgonBox ml={1} lineHeight={0}>
            <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {title}
            </ArgonTypography>
            {dateTime ? (
              <ArgonTypography
                variant="caption"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                {dateTime}
              </ArgonTypography>
            ) : null}
          </ArgonBox>
        </ArgonBox>
        <ArgonBox my={2}>
          <ArgonTypography variant="body2" color="text">
            {description}
          </ArgonTypography>
        </ArgonBox>
        {id ? (
          <ArgonBox>
            <ArgonTypography component="span" variant="body2" fontWeight="bold" color="text">
              Meeting ID:&nbsp;
            </ArgonTypography>
            <ArgonTypography component="span" variant="body2" color="text">
              {id}
            </ArgonTypography>
          </ArgonBox>
        ) : null}
        <Divider />
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <ArgonButton component={Link} to={action.route} color={action.color} size="small">
              {action.label}
            </ArgonButton>
          ) : (
            <ArgonButton component="a" href={action.route} color={action.color} size="small">
              {action.label}
            </ArgonButton>
          )}
          <ArgonBox display="flex">{renderMembers}</ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of EventCard
EventCard.defaultProps = {
  id: "",
  dateTime: "",
  members: [],
};

// Typechecking props for the EventCard
EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["enternal", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
