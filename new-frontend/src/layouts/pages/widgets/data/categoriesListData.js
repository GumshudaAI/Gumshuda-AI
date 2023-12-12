 

// Gumshuda AI MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: "devices_other",
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "settings",
    name: "Tickets",
    description: (
      <>
        123 closed,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "info",
    name: "Error logs",
    description: (
      <>
        1 is active,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "thumb_up",
    name: "Happy users",
    description: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </ArgonTypography>
    ),
    route: "/",
  },
];

export default categoriesListData;
