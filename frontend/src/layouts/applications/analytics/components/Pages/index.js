 

// @mui material components
import Card from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Analytics application components
import PagesHeaderCell from "layouts/applications/analytics/components/PagesHeaderCell";
import PagesBodyCell from "layouts/applications/analytics/components/PagesBodyCell";

function Pages() {
  return (
    <Card>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6">Pages</ArgonTypography>
        <Tooltip title="Data is based from sessions and is 100% accurate" placement="left">
          <ArgonButton variant="outlined" color="success" size="small" circular iconOnly>
            <Icon sx={{ fontWeight: "bold" }}>done</Icon>
          </ArgonButton>
        </Tooltip>
      </ArgonBox>
      <ArgonBox py={1} px={2}>
        <TableContainer sx={{ boxShadow: "none" }}>
          <Table>
            <ArgonBox component="thead">
              <TableRow>
                <PagesHeaderCell>page</PagesHeaderCell>
                <PagesHeaderCell>pages view</PagesHeaderCell>
                <PagesHeaderCell>avg. time</PagesHeaderCell>
                <PagesHeaderCell>bounce rate</PagesHeaderCell>
              </TableRow>
            </ArgonBox>
            <TableBody>
              <PagesBodyCell rows={["1. /bits", 345, "00:17:07", "40.91%"]} />
              <PagesBodyCell rows={["2. /pages/argon-dashboard", 520, "00:23:13", "31.14%"]} />
              <PagesBodyCell rows={["3. /pages/argon-dashboard", 122, "00:3:10", "54.10%"]} />
              <PagesBodyCell rows={["4. /bootstrap-themes", "1,900", "00:30:42", "20.93%"]} />
              <PagesBodyCell rows={["5. /react-themes", "1,442", "00:31:50", "34.98%"]} />
              <PagesBodyCell
                rows={["6. /product/argon-dashboard-angular", "201", "00:12:42", "21.4%"]}
              />
              <PagesBodyCell
                rows={["7. /product/material-dashboard-pro", "2,115", "00:50:11", "34.98%"]}
                noBorder
              />
            </TableBody>
          </Table>
        </TableContainer>
      </ArgonBox>
    </Card>
  );
}

export default Pages;
