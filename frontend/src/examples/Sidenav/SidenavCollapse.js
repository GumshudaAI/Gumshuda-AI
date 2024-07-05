// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
  collapseArrow,
} from "examples/Sidenav/styles/sidenavCollapse";

// Gumshuda AI MUI context
import { usePowerController } from "context";

function SidenavCollapse({ icon, name, children, active, noCollapse, open, ...rest }) {
  const [controller] = usePowerController();
  const { miniSidenav, darkSidenav, sidenavColor } = controller;

  return (
    <>
      <ListItem component="li">
        <PowerBox
          {...rest}
          sx={(theme) => collapseItem(theme, { active, darkSidenav, sidenavColor, miniSidenav })}
        >
          <ListItemIcon
            sx={(theme) => collapseIconBox(theme, { active, darkSidenav, sidenavColor })}
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) => collapseText(theme, { miniSidenav, darkSidenav, active })}
          />

          <Icon
            sx={(theme) => collapseArrow(theme, { noCollapse, darkSidenav, miniSidenav, open })}
          >
            expand_less
          </Icon>
        </PowerBox>
      </ListItem>
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: "info",
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
};

export default SidenavCollapse;
