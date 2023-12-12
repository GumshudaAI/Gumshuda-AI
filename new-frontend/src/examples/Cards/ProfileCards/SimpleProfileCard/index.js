 

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import MuiLink from "@mui/material/Link";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

function SimpleProfileCard({ image, name, position, description, action }) {
  return (
    <ArgonBox display="flex" flexDirection="column" alignItems="center" textAlign="center">
      {action.type === "external" ? (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          <ArgonAvatar src={image} alt={name} size="xl" shadow="md" variant="rounded" />
        </MuiLink>
      ) : (
        <Link to={action.route}>
          <ArgonAvatar src={image} alt={name} size="xl" shadow="md" variant="rounded" />
        </Link>
      )}
      <ArgonBox p={3}>
        {action.type === "external" ? (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <ArgonTypography variant="h4">{name}</ArgonTypography>
          </MuiLink>
        ) : (
          <Link to={action.route}>
            <ArgonTypography variant="h4">{name}</ArgonTypography>
          </Link>
        )}
        <ArgonTypography variant="h6" color={position.color} textGradient gutterBottom>
          {position.label}
        </ArgonTypography>
        <ArgonTypography variant="body2" color="text">
          {description}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default props for the SimpleProfileCard
SimpleProfileCard.defaultProps = {
  description: "",
  action: { type: "internal", route: "#" },
};

// Typechecking props for the SimpleProfileCard
SimpleProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }),
};

export default SimpleProfileCard;
