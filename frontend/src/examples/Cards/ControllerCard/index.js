 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI context
import { useArgonController } from "context";

function ControllerCard({ color, state, icon, title, description, onChange }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox
        p={3}
        height="100%"
        bgColor={state ? color : "transparent"}
        variant={!state && darkMode ? "contained" : "gradient"}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <ArgonTypography variant="body2" color={state ? "white" : "text"}>
            {state ? "On" : "Off"}
          </ArgonTypography>
          <ArgonBox mr={1}>
            <Switch checked={state} onChange={onChange} />
          </ArgonBox>
        </ArgonBox>
        {icon}
        <ArgonBox mt={1} lineHeight={1}>
          <ArgonTypography
            variant="body2"
            color={state ? "white" : "text"}
            textTransform="capitalize"
            fontWeight="medium"
          >
            {title}
          </ArgonTypography>
          {description ? (
            <ArgonTypography variant="caption" color={state ? "white" : "text"}>
              {description}
            </ArgonTypography>
          ) : null}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of ControllerCard
ControllerCard.defaultProps = {
  color: "info",
  state: false,
  description: "",
};

// Typechecking props for the ControllerCard
ControllerCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  state: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ControllerCard;
