 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import TableRow from "@mui/material/TableRow";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function PagesBodyCell({ rows, noBorder }) {
  const renderRows = rows.map((row) => (
    <ArgonBox
      key={row}
      component="td"
      width="100%"
      textAlign="left"
      sx={({ borders: { borderWidth, borderColor } }) => ({
        borderBottom: noBorder ? 0 : `${borderWidth[1]} solid ${borderColor}`,
      })}
      p={1}
    >
      <ArgonTypography
        display="block"
        variant="button"
        fontWeight="medium"
        color="text"
        sx={{ width: "max-content" }}
      >
        {row}
      </ArgonTypography>
    </ArgonBox>
  ));

  return <TableRow>{renderRows}</TableRow>;
}

// Setting default values for the props for PagesBodyCell
PagesBodyCell.defaultProps = {
  noBorder: false,
};

// Typechecking props for the PagesBodyCell
PagesBodyCell.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  noBorder: PropTypes.bool,
};

export default PagesBodyCell;
