 

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

function DefaultTeamCard({ image, name, jobTitle, action }) {
  const template = (
    <Card>
      <ArgonBox p={2} textAlign="center" lineHeight={1}>
        <ArgonBox component="img" src={image} alt={name} width="100%" borderRadius="md" />
        <ArgonBox mt={2} mb={0.5}>
          <ArgonTypography variant="h5" textTransform="capitalize">
            {name}
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography
          variant="caption"
          textTransform="uppercase"
          fontWeight="bold"
          color={jobTitle.color ? jobTitle.color : "info"}
          textGradient
        >
          {jobTitle.label}
        </ArgonTypography>
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

// Typechecking props for the DefaultTeamCard
DefaultTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultTeamCard;
