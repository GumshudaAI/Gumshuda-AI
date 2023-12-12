 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function TableCell({ width, align, padding, noBorder, children }) {
  const { light } = colors;
  const { borderWidth } = borders;

  return (
    <ArgonBox
      component="th"
      width={width}
      pt={padding[0]}
      pr={padding[1]}
      pb={padding[2]}
      pl={padding[3]}
      textAlign={align}
      borderBottom={noBorder ? 0 : `${borderWidth[1]} solid ${light.main}`}
    >
      <ArgonTypography component="div" variant="body2" color="text">
        {children}
      </ArgonTypography>
    </ArgonBox>
  );
}

// Setting default values for the props of TableCell
TableCell.defaultProps = {
  width: "auto",
  align: "left",
  padding: [],
  noBorder: false,
};

// Typechecking props for TableCell
TableCell.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  padding: PropTypes.arrayOf(PropTypes.number),
  noBorder: PropTypes.bool,
};

export default TableCell;
