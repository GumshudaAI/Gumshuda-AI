 

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function ReferralCode() {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <>
      <ArgonBox lineHeight={1}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Referral Code
        </ArgonTypography>
        <ArgonTypography variant="button" fontWeight="regular" color="text">
          Copy the code bellow to your registered provider.
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox
        borderRadius="md"
        border={`${borderWidth[1]} dashed ${secondary.main}`}
        pt={2}
        pb={1.5}
        px={2}
        mt={2}
      >
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Generated 23 days ago by <span sx={{ fontWeight: "bold" }}>softuidash23</span>
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={2} lineHeight={0}>
          <ArgonTypography variant="caption" color="text" fontWeight="bold">
            (Used one time)
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center" mb={2}>
          <ArgonBox width="70%" mr={1}>
            <ArgonInput
              size="small"
              defaultValue="argon-dashboard-vmsk392"
              icon={{ component: "lock", direction: "right" }}
              disabled
            />
          </ArgonBox>
          <Tooltip title="Referral code expires in 24 hours" placement="top">
            <ArgonButton
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ padding: "0.5rem 1rem" }}
            >
              copy
            </ArgonButton>
          </Tooltip>
        </ArgonBox>
        <ArgonBox mb={0.5} lineHeight={1.2}>
          <ArgonTypography component="p" variant="caption" color="text">
            You cannot generate codes.
          </ArgonTypography>
          <ArgonTypography variant="caption" color="text">
            <ArgonTypography
              component={Link}
              variant="caption"
              href="#link"
              className="color-background"
            >
              Contact us
            </ArgonTypography>{" "}
            to generate more referrals link.
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </>
  );
}

export default ReferralCode;
