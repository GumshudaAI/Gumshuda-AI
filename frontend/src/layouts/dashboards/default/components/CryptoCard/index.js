// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonBadge from "components/ArgonBadge";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";

// Images
import bitcoin from "assets/images/logos/bitcoin.jpg";

// Data
const data = [
  { title: "Call with Dave", time: "09:30 AM", checked: true },
  { title: "Brunch Meeting", time: "11:00 AM", checked: false },
  { title: "Argon Dashboard Launch", time: "02:00 PM", checked: false },
  { title: "Winter Hackaton", time: "10:30 AM", checked: true },
];

function CryptoCoin() {
  return (
    <Card>
      <ArgonBox variant="gradient" bgColor="error">
        <ArgonBox p={3}>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
            <ArgonBox
              component="img"
              src={bitcoin}
              alt="Image placeholder"
              width="22%"
              borderRadius="md"
            />
            <ArgonBadge
              size="lg"
              color="success"
              variant="contained"
              badgeContent="active"
              container
            />
          </ArgonBox>
          <ArgonBox my={3}>
            <ArgonTypography variant="button" color="white" opacity={0.8} fontWeight="regular">
              Address
            </ArgonTypography>
            <Tooltip title="Copy Address" placement="bottom">
              <ArgonTypography variant="h6" color="white" sx={{ cursor: "pointer" }}>
                0yx8Wkasd8uWpa083Jj81qZhs923K21
              </ArgonTypography>
            </Tooltip>
          </ArgonBox>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-end" mt={6}>
            <ArgonBox>
              <ArgonTypography variant="button" color="white" opacity={0.8} fontWeight="regular">
                Name
              </ArgonTypography>
              <ArgonTypography variant="h6" color="white">
                John Snow
              </ArgonTypography>
            </ArgonBox>
            <Stack direction="row" spacing={0.5} textAlign="right">
              <Tooltip title="Reveive" placement="top">
                <ArgonButton color="white" iconOnly circular>
                  <i className="ni ni-bold-down" />
                </ArgonButton>
              </Tooltip>
              <Tooltip title="Send" placement="top">
                <ArgonButton color="white" iconOnly circular>
                  <i className="ni ni-bold-up" />
                </ArgonButton>
              </Tooltip>
              <Tooltip title="Swap" placement="top">
                <ArgonButton color="white" iconOnly circular>
                  <i className="ni ni-curved-next" />
                </ArgonButton>
              </Tooltip>
            </Stack>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default CryptoCoin;
