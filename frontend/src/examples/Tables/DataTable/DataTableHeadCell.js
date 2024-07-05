 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

function DataTableHeadCell({ width, children, sorted, align, ...rest }) {
  return (
    <ArgonBox
      component="th"
      width={width}
      py={1.5}
      px={3}
      sx={({ borders: { borderWidth, borderColor } }) => ({
        borderBottom: `${borderWidth[1]} solid ${borderColor}`,
      })}
    >
      <ArgonBox
        {...rest}
        position="relative"
        textAlign={align}
        color="secondary"
        opacity={0.7}
        sx={({ typography: { size, fontWeightBold } }) => ({
          fontSize: size.xxs,
          fontWeight: fontWeightBold,
          textTransform: "uppercase",
          cursor: sorted && "pointer",
          userSelect: sorted && "none",
        })}
      >
        {children}
        {sorted && (
          <ArgonBox
            position="absolute"
            top={0}
            right={align !== "right" ? "16px" : 0}
            left={align === "right" ? "-5px" : "unset"}
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            <ArgonBox
              position="absolute"
              top={-6}
              color={sorted === "asce" ? "text" : "secondary"}
              opacity={sorted === "asce" ? 1 : 0.5}
            >
              <Icon>arrow_drop_up</Icon>
            </ArgonBox>
            <ArgonBox
              position="absolute"
              top={0}
              color={sorted === "desc" ? "text" : "secondary"}
              opacity={sorted === "desc" ? 1 : 0.5}
            >
              <Icon>arrow_drop_down</Icon>
            </ArgonBox>
          </ArgonBox>
        )}
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of DataTableHeadCell
DataTableHeadCell.defaultProps = {
  width: "auto",
  sorted: "none",
  align: "left",
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableHeadCell;
