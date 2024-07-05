 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

function DataTableBodyCell({ noBorder, align, children }) {
  return (
    <ArgonBox
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({ borders: { borderWidth, borderColor }, typography: { size } }) => ({
        fontSize: size.sm,
        borderBottom: noBorder ? 0 : `${borderWidth[1]} solid ${borderColor}`,
      })}
    >
      <ArgonBox
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: "left",
};

// Typechecking props for the DataTableBodyCell
DataTableBodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableBodyCell;
