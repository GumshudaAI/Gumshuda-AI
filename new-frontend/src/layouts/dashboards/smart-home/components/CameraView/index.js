 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";

function CameraView({ image, date, time, value, index }) {
  const { size } = typography;

  return (
    value === index && (
      <Fade in timeout={850}>
        <ArgonBox width="100%" height="100%" position="relative" borderRadius="lg">
          <ArgonBox
            component="img"
            src={image}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            borderRadius="lg"
            sx={{ objectFit: "cover", objectPosition: "center" }}
          />
          <ArgonBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            width="calc(100% - 1rem)"
          >
            <ArgonBox p={2}>
              <ArgonTypography variant="h6" fontWeight="regular" color="white">
                {date} &nbsp; {time}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBadge
              color="secondary"
              variant="contained"
              size="lg"
              badgeContent={
                <ArgonBox display="flex" alignItems="center">
                  <ArgonBox color="error" lineHeight={0} fontSize={size.md}>
                    <Icon>fiber_manual_record</Icon>
                  </ArgonBox>
                  <ArgonBox mb={-0.25} ml={0.25}>
                    <ArgonTypography
                      component="span"
                      variant="caption"
                      color="text"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      recording
                    </ArgonTypography>
                  </ArgonBox>
                </ArgonBox>
              }
            />
          </ArgonBox>
        </ArgonBox>
      </Fade>
    )
  );
}

// Typechecking props for the CameraView
CameraView.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CameraView;
