 

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function SimpleBlogCard({ image, title, description, action }) {
  return (
    <Card>
      <ArgonBox mt={2} mx={2}>
        <ArgonBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
      </ArgonBox>
      <ArgonBox pt={2} pb={3} px={3}>
        <ArgonTypography display="inline" variant="h3" textTransform="capitalize" fontWeight="bold">
          {title}
        </ArgonTypography>
        <ArgonBox mt={2} mb={3}>
          <ArgonTypography variant="body2" component="p" color="text">
            {description}
          </ArgonTypography>
        </ArgonBox>
        {action.type === "external" ? (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <ArgonButton color={action.color ? action.color : "dark"}>{action.label}</ArgonButton>
          </MuiLink>
        ) : (
          <Link to={action.route}>
            <ArgonButton color={action.color ? action.color : "dark"}>{action.label}</ArgonButton>
          </Link>
        )}
      </ArgonBox>
    </Card>
  );
}

// Typechecking props for the SimpleBlogCard
SimpleBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
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
      "default",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimpleBlogCard;
