 

// react-router components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

function AnnouncementCard({ by, badge, title, description, value, action }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <Card>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-start" p={2}>
        {by.image || by.name || by.date ? (
          <ArgonBox display="flex" mr={2}>
            {by.image ? (
              <ArgonAvatar src={by.image} alt={by.name} size="sm" variant="rounded" />
            ) : null}
            <ArgonBox display="flex" flexDirection="column" justifyContent="center" ml={1}>
              {by.name ? (
                <ArgonTypography variant="button" fontWeight="medium" textTransform="capitalize">
                  {by.name}
                </ArgonTypography>
              ) : null}
              {by.date ? (
                <ArgonTypography variant="caption" color="text">
                  {by.date}
                </ArgonTypography>
              ) : null}
            </ArgonBox>
          </ArgonBox>
        ) : null}
        {badge.color && badge.label ? (
          <ArgonBadge color={badge.color} badgeContent={badge.label} size="sm" container />
        ) : null}
      </ArgonBox>
      <ArgonBox pt={0.5} pb={2} px={2}>
        <ArgonTypography variant="h6">{title}</ArgonTypography>
        <ArgonBox mt={1} mb={2} lineHeight={0}>
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            {description}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox
          bgColor={darkMode ? "dark" : "grey-100"}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="lg"
          p={2}
        >
          {value.amount ? (
            <ArgonTypography variant="h4">
              {value.method ? (
                <ArgonBox component="span" mr={0.5}>
                  <ArgonTypography
                    variant="button"
                    color={darkMode ? "text" : "secondary"}
                    fontWeight="medium"
                    verticalAlign="text-bottom"
                  >
                    {value.type}
                  </ArgonTypography>
                </ArgonBox>
              ) : null}
              {value.amount}
              {value.method ? (
                <ArgonBox component="span" ml={0.5}>
                  <ArgonTypography
                    variant="button"
                    color={darkMode ? "text" : "secondary"}
                    fontWeight="medium"
                    verticalAlign="text-bottom"
                  >
                    / {value.method}
                  </ArgonTypography>
                </ArgonBox>
              ) : null}
            </ArgonTypography>
          ) : (
            <ArgonBox />
          )}
          {action.type === "internal" ? (
            <ArgonButton
              component={Link}
              to={action.route}
              variant="outlined"
              color={darkMode ? "white" : "dark"}
            >
              {action.label}
            </ArgonButton>
          ) : (
            <ArgonButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              color={darkMode ? "white" : "dark"}
            >
              {action.label}
            </ArgonButton>
          )}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of AnnouncementCard
AnnouncementCard.defaultProps = {
  by: {},
  badge: {},
  value: {},
};

// Typechecking props for the AnnouncementCard
AnnouncementCard.propTypes = {
  by: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
  }),
  badge: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    label: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    method: PropTypes.string,
  }),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["enternal", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnnouncementCard;
