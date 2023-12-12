 

import { useMemo, useEffect, useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-table components
import { useTable, usePagination, useGlobalFilter, useAsyncDebounce, useSortBy } from "react-table";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonSelect from "components/ArgonSelect";
import ArgonInput from "components/ArgonInput";
import ArgonPagination from "components/ArgonPagination";

// Gumshuda AI MUI example components
import DataTableHeadCell from "examples/Tables/DataTable/DataTableHeadCell";
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";

function DataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
}) {
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];
  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => table.rows, [table]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

  // Set the entries per page value based on the select value
  const setEntriesPerPage = ({ value }) => setPageSize(value);

  // Render the paginations
  const renderPagination = pageOptions.map((option) => (
    <ArgonPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </ArgonPagination>
  ));

  // Handler for the input to set the pagination index
  const handleInputPagination = ({ target: { value } }) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  // Customized page options starting from 1
  const customizedPageOptions = pageOptions.map((option) => option + 1);

  // Setting value for the pagination input
  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

  // Search input value state
  const [search, setSearch] = useState(globalFilter);

  // Search input state handle
  const onSearchChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 100);

  // A function that sets the sorted value for the table
  const setSortedValue = (column) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asce";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  // Setting the entries starting point
  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      {entriesPerPage || canSearch ? (
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <ArgonBox display="flex" alignItems="center">
              <ArgonBox width="25%">
                <ArgonSelect
                  defaultValue={{ value: defaultValue, label: defaultValue }}
                  options={entries.map((entry) => ({ value: entry, label: entry }))}
                  onChange={setEntriesPerPage}
                  size="small"
                />
              </ArgonBox>
              <ArgonTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </ArgonTypography>
            </ArgonBox>
          )}
          {canSearch && (
            <ArgonBox width="12rem" ml="auto">
              <ArgonInput
                placeholder="Search..."
                value={search}
                onChange={({ currentTarget }) => {
                  setSearch(search);
                  onSearchChange(currentTarget.value);
                }}
              />
            </ArgonBox>
          )}
        </ArgonBox>
      ) : null}
      <Table {...getTableProps()}>
        <ArgonBox component="thead">
          {headerGroups.map((headerGroup, key) => (
            <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <DataTableHeadCell
                  key={index}
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width ? column.width : "auto"}
                  align={column.align ? column.align : "left"}
                  sorted={setSortedValue(column)}
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </ArgonBox>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <TableRow key={key} {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <DataTableBodyCell
                    key={index}
                    noBorder={noEndBorder && rows.length - 1 === key}
                    align={cell.column.align ? cell.column.align : "left"}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <ArgonBox
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
      >
        {showTotalEntries && (
          <ArgonBox mb={{ xs: 3, sm: 0 }}>
            <ArgonTypography variant="button" color="secondary" fontWeight="regular">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </ArgonTypography>
          </ArgonBox>
        )}
        {pageOptions.length > 1 && (
          <ArgonPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <ArgonPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </ArgonPagination>
            )}
            {renderPagination.length > 6 ? (
              <ArgonBox width="5rem" mx={1}>
                <ArgonInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(handleInputPagination, handleInputPaginationValue)}
                />
              </ArgonBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <ArgonPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </ArgonPagination>
            )}
          </ArgonPagination>
        )}
      </ArgonBox>
    </TableContainer>
  );
}

// Setting default values for the props of DataTable
DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
};

// Typechecking props for the DataTable
DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(["contained", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;
