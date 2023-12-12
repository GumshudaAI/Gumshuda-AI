 

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";

function Sessions() {
  const actionButtonStyles = {
    "& .material-icons-round": {
      transform: `translateX(0)`,
      transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(4px)`,
    },
  };

  return (
    <Card id="sessions">
      <ArgonBox p={3} lineHeight={1}>
        <ArgonBox mb={1}>
          <ArgonTypography variant="h5">Sessions</ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          This is a list of devices that have logged into your account. Remove those that you do not
          recognize.
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pb={3} px={3} sx={{ overflow: "auto" }}>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </ArgonBox>
            <ArgonBox height="100%" ml={2} lineHeight={1.4} mr={2}>
              <ArgonTypography display="block" variant="button" fontWeight="regular" color="text">
                Bucharest 68.133.163.201
              </ArgonTypography>
              <ArgonTypography variant="caption" color="text">
                Your current session
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox display="flex" alignItems="center">
            <ArgonBadge
              variant="contained"
              size="xs"
              badgeContent="active"
              color="success"
              container
            />
            <ArgonBox mx={2} lineHeight={1}>
              <ArgonTypography variant="button" color="secondary" fontWeight="regular">
                EU
              </ArgonTypography>
            </ArgonBox>
            <ArgonTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <Divider />
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <ArgonBox display="flex" alignItems="center" mr={2}>
            <ArgonBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </ArgonBox>
            <ArgonBox ml={2}>
              <ArgonTypography display="block" variant="body2" fontWeight="regular" color="text">
                Chrome on macOS
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox mx={2} lineHeight={1}>
              <ArgonTypography variant="button" color="secondary" fontWeight="regular">
                US
              </ArgonTypography>
            </ArgonBox>
            <ArgonTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <Divider />
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <ArgonBox display="flex" alignItems="center" mr={2}>
            <ArgonBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">phone_iphone</Icon>
            </ArgonBox>
            <ArgonBox ml={2}>
              <ArgonTypography display="block" variant="body2" fontWeight="regular" color="text">
                Safari on iPhone
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox mx={2} lineHeight={1}>
              <ArgonTypography variant="button" color="secondary" fontWeight="regular">
                US
              </ArgonTypography>
            </ArgonBox>
            <ArgonTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Sessions;
