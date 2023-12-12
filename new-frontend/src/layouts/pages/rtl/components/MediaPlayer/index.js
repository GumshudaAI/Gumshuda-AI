 

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-music.jpg";

function MediaPlayer() {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.85),
          rgba(gradients.dark.state, 0.85)
        )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <ArgonBox p={3} position="relative" lineHeight={0}>
        <ArgonTypography variant="h5" color="white" fontWeight="bold">
          نوع من البلوز
        </ArgonTypography>
        <ArgonTypography variant="button" color="white" fontWeight="medium">
          ديفتونز
        </ArgonTypography>
        <ArgonBox display="flex" mt={3} pt={1}>
          <ArgonBox display="flex" alignItems="center" justifyContent="center">
            <ArgonButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_previous</Icon>
            </ArgonButton>
            <ArgonButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>play_arrow</Icon>
            </ArgonButton>
            <ArgonButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_next</Icon>
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default MediaPlayer;
