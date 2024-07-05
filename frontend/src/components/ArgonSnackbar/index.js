 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";

// Custom styles for the ArgonSnackbar
import ArgonSnackbarIconRoot from "components/ArgonSnackbar/ArgonSnackbarIconRoot";

function ArgonSnackbar({ color, icon, title, dateTime, content, close, bgWhite, ...rest }) {
  const { size } = typography;
  let titleColor;
  let dateTimeColor;
  let dividerColor;

  if (bgWhite) {
    titleColor = color;
    dateTimeColor = "dark";
    dividerColor = false;
  } else if (color === "light") {
    titleColor = "dark";
    dateTimeColor = "text";
    dividerColor = false;
  } else {
    titleColor = "white";
    dateTimeColor = "white";
    dividerColor = true;
  }

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <ArgonBox
        variant={bgWhite ? "contained" : "gradient"}
        bgColor={bgWhite ? "white" : color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="md"
        p={1}
      >
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <ArgonBox display="flex" alignItems="center" lineHeight={0}>
            <ArgonSnackbarIconRoot fontSize="small" ownerState={{ color, bgWhite }}>
              {icon}
            </ArgonSnackbarIconRoot>
            <ArgonTypography
              variant="button"
              fontWeight="medium"
              color={titleColor}
              textGradient={bgWhite}
            >
              {title}
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox display="flex" alignItems="center" lineHeight={0}>
            <ArgonTypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </ArgonTypography>
            <Icon
              sx={{
                color: ({ palette: { dark, white } }) =>
                  bgWhite || color === "light" ? dark.main : white.main,
                fontWeight: ({ typography: { fontWeightBold } }) => fontWeightBold,
                cursor: "pointer",
                marginLeft: 2,
                transform: "translateY(-1px)",
              }}
              onClick={close}
            >
              close
            </Icon>
          </ArgonBox>
        </ArgonBox>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        <ArgonBox
          p={1.5}
          color={bgWhite || color === "light" ? "text" : "white"}
          fontSize={size.sm}
        >
          {content}
        </ArgonBox>
      </ArgonBox>
    </Snackbar>
  );
}

// Setting default values for the props of ArgonSnackbar
ArgonSnackbar.defaultProps = {
  bgWhite: false,
  color: "info",
};

// Typechecking props for ArgonSnackbar
ArgonSnackbar.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  bgWhite: PropTypes.bool,
};

export default ArgonSnackbar;
