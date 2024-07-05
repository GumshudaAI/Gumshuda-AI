 

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonProgress from "components/ArgonProgress";

function ReportsBarChartItem({ color, icon, label, progress }) {
  const { size } = typography;

  return (
    <ArgonBox width="100%">
      <ArgonBox display="flex" alignItems="center" mb={2}>
        <ArgonBox
          bgColor={icon.color}
          width="1.25rem"
          height="1.25rem"
          borderRadius="sm"
          color="white"
          fontSize={size.xs}
          display="flex"
          justifyContent="center"
          alignItems="center"
          shadow="md"
          mr={1}
          variant="gradient"
        >
          <Icon>{icon.component}</Icon>
        </ArgonBox>
        <ArgonTypography
          variant="caption"
          textTransform="capitalize"
          fontWeight="medium"
          color="text"
        >
          {label}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox mt={1}>
        <ArgonTypography variant="h4" fontWeight="bold" color={color}>
          {progress.content}
        </ArgonTypography>
        <ArgonBox width="75%" mt={0.5}>
          <ArgonProgress value={progress.percentage} color={color} />
        </ArgonBox>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of ReportsBarChartItem
ReportsBarChartItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the ReportsBarChartItem
ReportsBarChartItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  progress: PropTypes.shape({
    content: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReportsBarChartItem;
