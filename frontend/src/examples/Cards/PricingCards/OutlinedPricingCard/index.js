 

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI base styles
import borders from "assets/theme/base/borders";

function OutlinedPricingCard({ color, title, description, price, specifications, action }) {
  const { borderWidth, borderColor } = borders;

  const renderSpecifications = specifications.map(({ label, includes }, key) => (
    <ArgonBox
      key={label}
      display="flex"
      alignItems="center"
      pb={specifications.length - 1 !== key ? 2 : 0}
    >
      <ArgonTypography
        variant="body1"
        color={includes ? "success" : "error"}
        sx={{ lineHeight: 0 }}
      >
        <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "close"}</Icon>
      </ArgonTypography>
      <ArgonBox pl={2} lineHeight={1}>
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          {label}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  ));

  return (
    <ArgonBox height="100%" borderRadius="xl" border={`${borderWidth[1]} solid ${borderColor}`}>
      <ArgonBox pt={3} pb={0.5} px={3} lineHeight={1} textAlign="center">
        <ArgonTypography variant="h5" color={color}>
          {title}
        </ArgonTypography>
        <ArgonBox mb={2} mt={0.5}>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            {description}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={2} mb={1}>
          <ArgonTypography variant="h3" color={color} fontWeight="bold">
            {price.value}&nbsp;
            <ArgonTypography variant="button" color="text" fontWeight="regular">
              /{price.type}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={3} mb={1}>
          {action.type === "internal" ? (
            <ArgonButton
              component={Link}
              to={action.route}
              variant="gradient"
              color={color}
              size="small"
              fullWidth
            >
              {action.label}
            </ArgonButton>
          ) : (
            <ArgonButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              color={color}
              size="small"
              fullWidth
            >
              {action.label}
            </ArgonButton>
          )}
        </ArgonBox>
      </ArgonBox>
      <Divider />
      <ArgonBox pt={1} pb={3} px={3}>
        {renderSpecifications}
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of OutlinedPricingCard
OutlinedPricingCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the OutlinedPricingCard
OutlinedPricingCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default OutlinedPricingCard;
