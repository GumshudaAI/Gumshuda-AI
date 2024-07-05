 

// Gumshuda AI MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: "devices_other",
    name: "الأجهزة",
    description: (
      <>
        250 في المخزن,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          346+ تم البيع
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "settings",
    name: "تذاكر",
    description: (
      <>
        123 مغلق,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          15 افتح
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "info",
    name: "سجلات الخطأ",
    description: (
      <>
        1 is نشيط,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          40 مغلق
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "thumb_up",
    name: "المستخدمين السعداء",
    description: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </ArgonTypography>
    ),
    route: "/",
  },
];

export default categoriesListData;
