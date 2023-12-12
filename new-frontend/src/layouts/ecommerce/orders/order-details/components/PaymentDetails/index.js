 

// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";

function PaymentDetails() {
  const { borderWidth, borderColor } = borders;

  return (
    <>
      <ArgonTypography variant="h6" fontWeight="medium">
        Payment details
      </ArgonTypography>
      <ArgonBox
        border={`${borderWidth[1]} solid ${borderColor}`}
        borderRadius="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        mt={2}
      >
        <ArgonBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
        <ArgonTypography variant="h6" fontWeight="medium">
          ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
        </ArgonTypography>
        <ArgonBox ml="auto" lineHeight={0}>
          <Tooltip title="We do not store card details" placement="bottom">
            <ArgonButton variant="outlined" color="secondary" size="small" iconOnly circular>
              <Icon sx={{ cursor: "pointer" }}>priority_high</Icon>
            </ArgonButton>
          </Tooltip>
        </ArgonBox>
      </ArgonBox>
    </>
  );
}

export default PaymentDetails;
