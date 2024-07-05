 

// react-countup components
import CountUp from "react-countup";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function OutlinedCounterCard({ color, count, title, prefix, suffix }) {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <ArgonBox
      borderRadius="md"
      border={`${borderWidth[1]} dashed ${secondary.main}`}
      textAlign="center"
      py={2}
    >
      <ArgonTypography variant="h6" color={color} fontWeight="medium" textTransform="capitalize">
        {title}
      </ArgonTypography>
      <ArgonTypography variant="h4" fontWeight="bold">
        {prefix && (
          <ArgonTypography component="span" variant="h5" fontWeight="bold">
            {prefix}
          </ArgonTypography>
        )}
        <ArgonBox display="inline-block" color="inherit" mx={0.5}>
          <CountUp end={count} duration={1} separator="," />
        </ArgonBox>
        {suffix && (
          <ArgonTypography component="span" variant="h5" fontWeight="bold">
            {suffix}
          </ArgonTypography>
        )}
      </ArgonTypography>
    </ArgonBox>
  );
}

// Setting default values for the props of OutlinedCounterCard
OutlinedCounterCard.defaultProps = {
  color: "info",
  prefix: "",
  suffix: "",
};

// Typechecking props for the BlogCard
OutlinedCounterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default OutlinedCounterCard;
