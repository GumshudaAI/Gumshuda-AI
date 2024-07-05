 

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={3} px={3}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Orders overview
        </ArgonTypography>
        <ArgonBox mt={1} mb={2}>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            <ArgonTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </ArgonTypography>
            &nbsp;
            <ArgonTypography variant="button" color="text" fontWeight="medium">
              24%
            </ArgonTypography>{" "}
            this month
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
        />
      </ArgonBox>
    </Card>
  );
}

export default OrdersOverview;
