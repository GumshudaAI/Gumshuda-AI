 

// react-countup components
import CountUp from "react-countup";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function DefaultCounterCard({ color, count, title, description, prefix, suffix }) {
  return (
    <Card>
      <ArgonBox p={3} textAlign="center" lineHeight={1.25}>
        <ArgonTypography variant="h1" color={color} fontWeight="bold" textGradient>
          {prefix && (
            <ArgonTypography component="span" variant="h5" fontWeight="bold">
              {prefix}
            </ArgonTypography>
          )}
          <ArgonBox display="inline-block" mx={0.5}>
            <CountUp end={count} duration={1} separator="," />
          </ArgonBox>
          {suffix && (
            <ArgonTypography component="span" variant="h5" fontWeight="bold">
              {suffix}
            </ArgonTypography>
          )}
        </ArgonTypography>
        <ArgonTypography variant="h6" fontWeight="bold" textTransform="capitalize">
          {title}
        </ArgonTypography>
        {description && (
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            opacity={0.8}
            textTransform="capitalize"
          >
            {description}
          </ArgonTypography>
        )}
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  prefix: "",
  suffix: "",
  description: "",
};

// Typechecking props for the BlogCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default DefaultCounterCard;
