 

// Overview page components
import ProductCell from "layouts/ecommerce/overview/components/ProductCell";
import RefundsCell from "layouts/ecommerce/overview/components/RefundsCell";
import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";

// Images
const nikeV22 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg";
const businessKit =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-mug.jpg";
const blackChair =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg";
const wirelessCharger =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/bang-sound.jpg";
const tripKit =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/photo-tools.jpg";

const dataTableData = {
  columns: [
    { Header: "product", accessor: "product", width: "50%" },
    { Header: "value", accessor: "value" },
    { Header: "ads spent", accessor: "adsSpent", align: "center" },
    { Header: "refunds", accessor: "refunds", align: "center" },
  ],

  rows: [
    {
      product: <ProductCell image={nikeV22} name="Nike v22 Running" orders={8.232} />,
      value: <DefaultCell>$130.992</DefaultCell>,
      adsSpent: <DefaultCell>$9.500</DefaultCell>,
      refunds: (
        <RefundsCell
          value={13}
          icon={{ color: "success", name: "keyboard_arrow_up" }}
          tooltip="Refund rate is lower with 97% than other products"
        />
      ),
    },
    {
      product: (
        <ProductCell image={businessKit} name="Business Kit (Mug + Notebook)" orders={12.821} />
      ),
      value: <DefaultCell>$80.250</DefaultCell>,
      adsSpent: <DefaultCell>$4.200</DefaultCell>,
      refunds: <RefundsCell value={40} icon={{ color: "error", name: "keyboard_arrow_down" }} />,
    },
    {
      product: <ProductCell image={blackChair} name="Black Chair" orders={2.421} />,
      value: <DefaultCell>$40.600</DefaultCell>,
      adsSpent: <DefaultCell>$9.430</DefaultCell>,
      refunds: <RefundsCell value={54} icon={{ color: "success", name: "keyboard_arrow_up" }} />,
    },
    {
      product: <ProductCell image={wirelessCharger} name="Wireless Charger" orders={5.921} />,
      value: <DefaultCell>$91.300</DefaultCell>,
      adsSpent: <DefaultCell>$7.364</DefaultCell>,
      refunds: <RefundsCell value={5} icon={{ color: "error", name: "keyboard_arrow_down" }} />,
    },
    {
      product: (
        <ProductCell image={tripKit} name="Mountain Trip Kit (Camera + Backpack)" orders={921} />
      ),
      value: <DefaultCell>$140.925</DefaultCell>,
      adsSpent: <DefaultCell>$20.531</DefaultCell>,
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
