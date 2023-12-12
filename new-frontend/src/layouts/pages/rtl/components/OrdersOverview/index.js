 

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
          نظرة عامة على الطلبات
        </ArgonTypography>
        <ArgonBox mt={1} mb={2}>
          <ArgonTypography variant="button" color="text" fontWeight="medium">
            <ArgonTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </ArgonTypography>
            &nbsp;
            <ArgonTypography variant="button" color="text" fontWeight="bold">
              24%
            </ArgonTypography>{" "}
            هذا الشهر
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, تغييرات في التصميم"
          dateTime="22 ديسمبر 7:20 مساءً"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="طلب جديد # 1832412"
          dateTime="21 ديسمبر 11 م"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="مدفوعات الخادم لشهر أبريل"
          dateTime="21 ديسمبر 9:34 مساءً"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="تمت إضافة بطاقة جديدة للأمر رقم 4395133"
          dateTime="20 ديسمبر 2:20 صباحًا"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="فتح الحزم من أجل التطوير"
          dateTime="18 ديسمبر ، 4:54 صباحًا"
        />
        <TimelineItem color="dark" icon="paid" title="طلب جديد # 9583120" dateTime="17 ديسمبر" />
      </ArgonBox>
    </Card>
  );
}

export default OrdersOverview;
