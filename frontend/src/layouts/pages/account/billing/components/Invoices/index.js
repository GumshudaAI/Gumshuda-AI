 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Billing page components
import Invoice from "layouts/pages/account/billing/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <ArgonTypography variant="h6" fontWeight="medium">
          Invoices
        </ArgonTypography>
        <ArgonButton variant="outlined" color="info" size="small">
          View All
        </ArgonButton>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="#MS-415646" price="$180" />
          <Invoice date="February, 10, 2021" id="#RV-126749" price="$250" />
          <Invoice date="April, 05, 2020" id="#QW-103578" price="$120" />
          <Invoice date="June, 25, 2019" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2019" id="#AR-803481" price="$300" noGutter />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Invoices;
