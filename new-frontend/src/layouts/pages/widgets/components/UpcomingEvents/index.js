 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DefaultItem from "examples/Items/DefaultItem";

function UpcomingEvents() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2} lineHeight={1}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Upcoming events
        </ArgonTypography>
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Joined
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
      </ArgonBox>
    </Card>
  );
}

export default UpcomingEvents;
