 

// Overview page components
import ProductCell from "layouts/ecommerce/overview/components/ProductCell";
import RefundsCell from "layouts/ecommerce/overview/components/RefundsCell";
import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

const dataTableData = {
  columns: [
    { Header: "user", accessor: "user", width: "40%" },
    { Header: "value", accessor: "value" },
    { Header: "profit", accessor: "profit", align: "center" },
    { Header: "refunds", accessor: "refunds", align: "center" },
  ],

  rows: [
    {
      user: <ProductCell image={team1} name="Alice Vinget" orders={8.232} />,
      value: <DefaultCell>$130.992</DefaultCell>,
      profit: <DefaultCell>$9.500</DefaultCell>,
      refunds: (
        <RefundsCell
          value={13}
          icon={{ color: "success", name: "keyboard_arrow_up" }}
          tooltip="Refund rate is lower with 97% than other products"
        />
      ),
    },
    {
      user: <ProductCell image={team2} name="John Alura" orders={12.821} />,
      value: <DefaultCell>$80.250</DefaultCell>,
      profit: <DefaultCell>$4.200</DefaultCell>,
      refunds: <RefundsCell value={40} icon={{ color: "error", name: "keyboard_arrow_down" }} />,
    },
    {
      user: <ProductCell image={team3} name="Andrew Sian" orders={2.421} />,
      value: <DefaultCell>$40.600</DefaultCell>,
      profit: <DefaultCell>$9.430</DefaultCell>,
      refunds: <RefundsCell value={54} icon={{ color: "success", name: "keyboard_arrow_up" }} />,
    },
    {
      user: <ProductCell image={team4} name="Luca Willaim" orders={5.921} />,
      value: <DefaultCell>$91.300</DefaultCell>,
      profit: <DefaultCell>$7.364</DefaultCell>,
      refunds: <RefundsCell value={5} icon={{ color: "error", name: "keyboard_arrow_down" }} />,
    },
    {
      user: <ProductCell image={team5} name="Richel Manuel" orders={921} />,
      value: <DefaultCell>$140.925</DefaultCell>,
      profit: <DefaultCell>$20.531</DefaultCell>,
      refunds: (
        <RefundsCell
          value={121}
          icon={{ color: "success", name: "keyboard_arrow_up" }}
          tooltip="Refund rate is higher with 70% than other products"
        />
      ),
    },
  ],
};

export default dataTableData;
