 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-circular-slider-svg components
import CircularSlider from "react-circular-slider-svg";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";

// Custom styles for TemperatureSlider
import circularSlider from "layouts/dashboards/smart-home/components/TemperatureSlider/styles";

function TemperatureSlider({ title, color, current, label, start, end, ...sliderProps }) {
  const { circleSliderColors } = colors;

  return (
    <Card sx={{ height: "99.5%" }}>
      <ArgonBox p={2} position="relative" height="100%">
        <ArgonBox mb={1}>
          <ArgonTypography variant="h6" fontWeight="medium">
            {title}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox height="100%" textAlign="center" sx={(theme) => circularSlider(theme, { color })}>
          <CircularSlider
            {...sliderProps}
            arcBackgroundColor={circleSliderColors.background}
            arcColor={colors[color].main}
            startAngle={45}
            endAngle={315}
            handleSize={6}
            size={220}
          />
          <ArgonBox mt={12}>
            <ArgonTypography variant="h4" fontWeight="medium">
              {current}
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox
            display="flex"
            justifyContent="space-around"
            alignItems="baseline"
            width="12.5rem"
            mx="auto"
            mt={6}
          >
            <ArgonTypography variant="caption" color="text">
              {start}
            </ArgonTypography>
            <ArgonTypography variant="body2" color="text" textTransform="capitalize">
              {label}
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              {end}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of TemperatureSlider
TemperatureSlider.defaultProps = {
  color: "info",
};

// Typechecking props for the TemperatureSlider
TemperatureSlider.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  current: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  start: PropTypes.node.isRequired,
  end: PropTypes.node.isRequired,
};

export default TemperatureSlider;
