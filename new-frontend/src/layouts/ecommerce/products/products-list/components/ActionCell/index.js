 

// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function ActionCell() {
  return (
    <ArgonBox display="flex" alignItems="center">
      <ArgonTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Preview product" placement="top">
          <Icon>visibility</Icon>
        </Tooltip>
      </ArgonTypography>
      <ArgonBox mx={2}>
        <ArgonTypography
          variant="body1"
          color="secondary"
          sx={{ cursor: "pointer", lineHeight: 0 }}
        >
          <Tooltip title="Edit product" placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </ArgonTypography>
      </ArgonBox>
      <ArgonTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
        <Tooltip title="Delete product" placement="left">
          <Icon>delete</Icon>
        </Tooltip>
      </ArgonTypography>
    </ArgonBox>
  );
}

export default ActionCell;
