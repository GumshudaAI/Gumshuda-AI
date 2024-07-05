// Gumshuda AI MUI components
import PowerTypography from "components/PowerTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </PowerTypography>
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
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </PowerTypography>
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
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </PowerTypography>
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
        <PowerTypography variant="caption" color="text" fontWeight="medium">
          +&nbsp;430
        </PowerTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
