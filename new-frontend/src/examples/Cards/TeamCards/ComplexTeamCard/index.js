 

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

function ComplexTeamCard({ image, name, jobTitle, project, action }) {
  const template = (
    <Card>
      <ArgonBox p={2} textAlign="center" lineHeight={1}>
        <ArgonBox component="img" src={image} alt={name} width="100%" borderRadius="md" />
      </ArgonBox>
      <ArgonBox py={2.5} px={4} mb={3} mx={3} textAlign="center">
        <ArgonTypography variant="h4" textTransform="capitalize">
          {name}
        </ArgonTypography>
        <ArgonBox mb={2}>
          <ArgonTypography variant="body2" color="text">
            {jobTitle}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox textAlign="center" lineHeight={1}>
          <ArgonTypography variant="h5" color={project.color ? project.color : "info"}>
            {project.count}
          </ArgonTypography>
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            {project.label}
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );

  return action.type === "external" ? (
    <MuiLink href={action.route} target="_blank" rel="noreferrer">
      {template}
    </MuiLink>
  ) : (
    <Link to={action.route}>{template}</Link>
  );
}

// Typechecking props for the ComplexTeamCard
ComplexTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  project: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "text",
    ]),
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComplexTeamCard;
