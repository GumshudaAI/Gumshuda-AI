 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DefaultItem from "examples/Items/DefaultItem";

function NextEvents() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Next events
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <DefaultItem icon="paid" title="Cyber Week" description="27 March 2020, at 12:30 PM" />
        <ArgonBox mt={3.5}>
          <DefaultItem
            color="primary"
            icon="notifications"
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </ArgonBox>
        <ArgonBox mt={3.5}>
          <DefaultItem
            color="success"
            icon="menu_book"
            title="Book Deposit Hall"
            description="25 March 2021, at 9:30 AM"
          />
        </ArgonBox>
        <ArgonBox mt={3.5}>
          <DefaultItem
            color="warning"
            icon="local_shipping"
            title="Shipment Deal UK"
            description="25 March 2021, at 2:00 PM"
          />
        </ArgonBox>
        <ArgonBox mt={3.5}>
          <DefaultItem
            color="error"
            icon="palette"
            title="Verify Dashboard Color Palette"
            description="26 March 2021, at 9:00 AM"
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default NextEvents;
