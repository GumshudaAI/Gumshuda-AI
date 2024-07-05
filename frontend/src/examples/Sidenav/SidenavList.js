 

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";

function SidenavList({ children }) {
  return (
    <List
      sx={{
        pl: 2,
        ml: 3,
      }}
    >
      {children}
    </List>
  );
}

// Typechecking props for the SidenavItem
SidenavList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidenavList;
