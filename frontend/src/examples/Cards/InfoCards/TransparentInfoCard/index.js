 

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function TransparentInfoCard({ color, icon, description, value }) {
  return (
    <ArgonBox display="flex" flexDirection="column" alignItems="center" textAlign="center" p={3}>
      <ArgonBox
        display="grid"
        justifyContent="center"
        alignItems="center"
        bgColor={color}
        color="white"
        width="3rem"
        height="3rem"
        shadow="md"
        borderRadius="md"
        variant="gradient"
        mb={1}
      >
        <Icon fontSize="default">{icon}</Icon>
      </ArgonBox>
      <ArgonBox mb={1} lineHeight={0}>
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          {description}
        </ArgonTypography>
      </ArgonBox>
      {value && (
        <ArgonTypography variant="h5" fontWeight="bold">
          {value}
        </ArgonTypography>
      )}
    </ArgonBox>
  );
}

// Setting default values for the props of TransparentInfoCard
TransparentInfoCard.defaultProps = {
  color: "info",
  value: "",
};

// Typechecking props for the TransparentInfoCard
TransparentInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
};

export default TransparentInfoCard;
