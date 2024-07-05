import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

// custom styles for the NotificationItem
import { menuItem, menuImage } from "examples/Items/NotificationItem/styles";

const NotificationItem = forwardRef(({ color, image, title, date, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
    <PowerBox
      width="2.25rem"
      height="2.25rem"
      mt={0.25}
      mr={2}
      mb={0.25}
      borderRadius="lg"
      sx={(theme) => menuImage(theme, { color })}
    >
      {image}
    </PowerBox>
    <PowerBox>
      <PowerTypography variant="button" textTransform="capitalize" fontWeight="regular">
        <strong>{title[0]}</strong> {title[1]}
      </PowerTypography>
      <PowerTypography
        variant="caption"
        color="secondary"
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 0.5,
        }}
      >
        <PowerTypography variant="button" color="secondary">
          <Icon
            sx={{
              lineHeight: 1.2,
              mr: 0.5,
            }}
          >
            watch_later
          </Icon>
        </PowerTypography>
        {date}
      </PowerTypography>
    </PowerBox>
  </MenuItem>
));

// Setting default values for the props of NotificationItem
NotificationItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the NotificationItem
NotificationItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  image: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default NotificationItem;
