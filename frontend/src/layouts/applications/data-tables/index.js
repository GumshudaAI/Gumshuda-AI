 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function DataTables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox pt={6} pb={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox p={3} lineHeight={1}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </ArgonTypography>
            </ArgonBox>
            <DataTable table={dataTableData} />
          </Card>
        </ArgonBox>
        <Card>
          <ArgonBox p={3} lineHeight={1}>
            <ArgonTypography variant="h5" fontWeight="medium">
              Datatable Search
            </ArgonTypography>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </ArgonTypography>
          </ArgonBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
