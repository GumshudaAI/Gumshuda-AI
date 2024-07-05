 

// Gumshuda AI MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
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
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
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
    icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
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
    icon: <i className="ni ni-satisfied" style={{ fontSize: "12px" }} />,
    name: "Happy Users",
    description: (
      <>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          +&nbsp;430
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
