 

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Gumshuda AI MUI components
import ArgonTypography from "components/ArgonTypography";
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI example components
import SalesTableCell from "examples/Tables/SalesTable/SalesTableCell";

function SalesTable({ title, rows }) {
  const renderTableCells = rows.map((row, key) => {
    const tableRows = [];
    const rowKey = `row-${key}`;

    Object.entries(row).map(([cellTitle, cellContent]) =>
      Array.isArray(cellContent)
        ? tableRows.push(
            <SalesTableCell
              key={cellContent[1]}
              title={cellTitle}
              content={cellContent[1]}
              image={cellContent[0]}
              noBorder={key === rows.length - 1}
            />
          )
        : tableRows.push(
            <SalesTableCell
              key={cellContent}
              title={cellTitle}
              content={cellContent}
              noBorder={key === rows.length - 1}
            />
          )
    );

    return <TableRow key={rowKey}>{tableRows}</TableRow>;
  });

  return (
    <TableContainer sx={{ height: "100%" }}>
      <Table>
        <TableHead>
          <ArgonBox component="tr" width="max-content" display="block" mb={1.5}>
            <ArgonTypography variant="h6" component="td">
              {title}
            </ArgonTypography>
          </ArgonBox>
        </TableHead>
        <TableBody>{useMemo(() => renderTableCells, [rows])}</TableBody>
      </Table>
    </TableContainer>
  );
}

// Setting default values for the props of SalesTable
SalesTable.defaultProps = {
  rows: [{}],
};

// Typechecking props for the SalesTable
SalesTable.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default SalesTable;
