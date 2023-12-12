 

import { useEffect, useRef } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";
import ArgonButton from "components/ArgonButton";

// Images
import bgImage from "assets/images/img-1-1200x1000.jpg";

function AnimatedStatisticsCard({ color, title, count, description, percentage, action }) {
  const actionStyles = {
    my: 1,
    width: ({ functions: { pxToRem } }) => pxToRem(160),
  };

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: gradients[color]
          ? `${linearGradient(
              rgba(gradients[color].main, 0.85),
              rgba(gradients[color].state, 0.85)
            )}, url(${bgImage})`
          : `${linearGradient(
              rgba(gradients[color].main, 0.85),
              rgba(gradients[color].state, 0.85)
            )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        overflow: "visible",
      })}
    >
      <ArgonBox p={3} display="flex" flexDirection="column" alignItems="center">
        <ArgonBox mt={1}>
          <ArgonTypography variant="h6" color="white" textTransform="capitalize" sx={{ mt: 1 }}>
            {title}
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="h3" fontWeight="bold" color="white" mb={1}>
          {count}
        </ArgonTypography>
        <ArgonBox width="100%">
          <ArgonBadge
            color={percentage.color}
            badgeContent={<>&nbsp;{percentage.label}&nbsp;</>}
            size="sm"
            container
            sx={{ width: "100%", mb: 1, "& .MuiBadge-standard": { width: "100%" } }}
          />
          {description && (
            <ArgonTypography variant="body2" color="white" textAlign="center" mb={2}>
              {description}
            </ArgonTypography>
          )}
        </ArgonBox>
        {action.type === "internal" ? (
          <ArgonButton
            component={Link}
            to={action.route}
            variant="outlined"
            color="white"
            size="small"
            sx={actionStyles}
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
            color="white"
            size="small"
            sx={actionStyles}
          >
            {action.label}
          </ArgonButton>
        )}
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of AnimatedStatisticsCard
AnimatedStatisticsCard.defaultProps = {
  color: "info",
  description: "",
};

// Typechecking props for the AnimatedStatisticsCard
AnimatedStatisticsCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  description: PropTypes.string,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnimatedStatisticsCard;
