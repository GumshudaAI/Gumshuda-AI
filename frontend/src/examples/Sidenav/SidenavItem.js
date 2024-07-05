 

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Custom styles for the SidenavItem
import { item, itemContent, itemArrow } from "examples/Sidenav/styles/sidenavItem";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

function SidenavItem({ name, active, nested, children, open, ...rest }) {
  const [controller] = useArgonController();
  const { miniSidenav, darkSidenav } = controller;

  return (
    <>
      <ListItem {...rest} component="li" sx={item}>
        <ArgonBox
          sx={(theme) => itemContent(theme, { active, miniSidenav, darkSidenav, name, nested })}
        >
          <ListItemText primary={name} />
          {children && (
            <Icon component="i" sx={(theme) => itemArrow(theme, { open, miniSidenav })}>
              expand_less
            </Icon>
          )}
        </ArgonBox>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
  active: false,
  nested: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavItem
SidenavItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  nested: PropTypes.bool,
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default SidenavItem;
