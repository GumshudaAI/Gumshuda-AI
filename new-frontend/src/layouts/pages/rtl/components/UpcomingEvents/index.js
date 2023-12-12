 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DefaultItem from "examples/Items/DefaultItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="bold">
          الأحداث القادمة
        </ArgonTypography>
        <ArgonTypography variant="button" color="text" fontWeight="bold">
          انضم
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <DefaultItem icon="paid" title="أسبوع الإنترنت" description="01 يونيو 2021, ي 12:30 PM" />
        <ArgonBox mt={3.5}>
          <DefaultItem
            color="primary"
            icon="notifications"
            title="لقاء مع ماري"
            description="24 مايو 2021, ي 10:00 PM"
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default OrdersOverview;
