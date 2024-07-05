 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function PasswordRequirements() {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <ArgonBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1.25}>
        <ArgonTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </ArgonTypography>
      </ArgonBox>
    );
  });

  return (
    <Card id="change-password">
      <ArgonBox pt={2} px={2} lineHeight={1}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Password requirements
        </ArgonTypography>
        <ArgonTypography variant="button" fontWeight="regular" color="text">
          Please follow this guide for a strong password:
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
          {renderPasswordRequirements}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default PasswordRequirements;
