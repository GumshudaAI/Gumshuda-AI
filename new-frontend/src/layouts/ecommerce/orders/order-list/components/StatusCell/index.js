 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function StatusCell({ icon, color, status }) {
  return (
    <ArgonBox display="flex" alignItems="center">
      <ArgonBox mr={1}>
        <ArgonButton variant="outlined" color={color} size="small" iconOnly circular>
          <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
        </ArgonButton>
      </ArgonBox>
      <ArgonTypography variant="caption" fontWeight="medium" color="text" sx={{ lineHeight: 0 }}>
        {status}
      </ArgonTypography>
    </ArgonBox>
  );
}

// Typechecking props for the StatusCell
StatusCell.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusCell;
