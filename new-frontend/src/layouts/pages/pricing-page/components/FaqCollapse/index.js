 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI components
import borders from "assets/theme/base/borders";

function FaqCollapse({ title, open, children, ...rest }) {
  const { borderWidth, borderColor } = borders;

  return (
    <ArgonBox mb={2}>
      <ArgonBox
        {...rest}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        borderBottom={`${borderWidth[1]} solid ${borderColor}`}
        sx={{ cursor: "pointer" }}
      >
        <ArgonTypography variant="h5" color={open ? "dark" : "text"} sx={{ userSelect: "none" }}>
          {title}
        </ArgonTypography>
        <ArgonBox color={open ? "dark" : "text"}>
          <Icon sx={{ fontWeight: "bold" }} fontSize="small">
            {open ? "remove" : "add"}
          </Icon>
        </ArgonBox>
      </ArgonBox>
      <Collapse timeout={400} in={open}>
        <ArgonBox p={2} lineHeight={1}>
          <ArgonTypography variant="button" color="text" opacity={0.8} fontWeight="regular">
            {children}
          </ArgonTypography>
        </ArgonBox>
      </Collapse>
    </ArgonBox>
  );
}

// Typechecking props for the FaqCollapse
FaqCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default FaqCollapse;
