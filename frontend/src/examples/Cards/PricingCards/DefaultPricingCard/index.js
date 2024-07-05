 

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

function DefaultPricingCard({ title, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <ArgonBox key={label} display="flex" alignItems="center" p={1}>
      <ArgonBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shadow="md"
        bgColor={includes ? "success" : "secondary"}
        variant="gradient"
        mr={2}
      >
        <ArgonTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
          <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "remove"}</Icon>
        </ArgonTypography>
      </ArgonBox>
      <ArgonTypography variant="body2" color="text">
        {label}
      </ArgonTypography>
    </ArgonBox>
  ));

  return (
    <Card>
      <ArgonBox pt={3} pb={2} px={2} textAlign="center">
        <ArgonTypography variant="body2" color="dark" textTransform="uppercase" fontWeight="medium">
          {title}
        </ArgonTypography>
        <ArgonBox my={1}>
          <ArgonTypography variant="h1">
            <ArgonTypography display="inline" component="small" variant="h2">
              {price.currency}
            </ArgonTypography>
            {price.value}
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox pb={3} px={3}>
        {renderSpecifications}
        {action.type === "internal" ? (
          <ArgonBox mt={3}>
            <ArgonButton component={Link} to={action.route} color={action.color} fullWidth>
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </ArgonButton>
          </ArgonBox>
        ) : (
          <ArgonBox mt={3}>
            <ArgonButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </ArgonButton>
          </ArgonBox>
        )}
      </ArgonBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
  }).isRequired,
};

export default DefaultPricingCard;
