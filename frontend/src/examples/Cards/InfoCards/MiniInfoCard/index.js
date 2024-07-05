 

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function MiniInfoCard({ color, icon, title, description }) {
  return (
    <Card>
      <ArgonBox p={3}>
        <ArgonBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="3rem"
          height="3rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </ArgonBox>
        <ArgonBox mt={2}>
          <ArgonTypography variant="h5" fontWeight="medium" textTransform="capitalize">
            {title}
          </ArgonTypography>
          <ArgonTypography variant="body2" color="text" fontWeight="regular">
            {description}
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of MiniInfoCard
MiniInfoCard.defaultProps = {
  color: "info",
};

// Typechecking props for the MiniInfoCard
MiniInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default MiniInfoCard;
