 

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function BackgroundBlogCard({ color, image, title, description, action }) {
  return (
    <Card raised sx={{ p: 2 }}>
      <ArgonBox
        sx={({
          functions: { linearGradient, rgba },
          palette: { gradients },
          borders: { borderRadius },
        }) => ({
          backgroundImage: gradients[color]
            ? `${linearGradient(
                rgba(gradients[color].main, 0.8),
                rgba(gradients[color].state, 0.8)
              )}, url(${image})`
            : `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${image})`,
          backgroundSize: "cover",
          borderRadius: borderRadius.lg,
          p: 2,
        })}
      >
        <ArgonBox mb={2}>
          <ArgonTypography variant="h6" color="white" fontWeight="bold" textTransform="capitalize">
            {title}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonTypography variant="body2" color="white">
            {description}
          </ArgonTypography>
        </ArgonBox>
        {action.type === "internal" ? (
          <ArgonButton component={Link} to={action.route} variant="outlined" color="white" circular>
            {action.label} &nbsp; <Icon>arrow_forward</Icon>
          </ArgonButton>
        ) : (
          <ArgonButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            color="white"
            circular
          >
            {action.label} &nbsp; <Icon>arrow_forward</Icon>
          </ArgonButton>
        )}
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of BackgroundBlogCard
BackgroundBlogCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the BackgroundBlogCard
BackgroundBlogCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default BackgroundBlogCard;
