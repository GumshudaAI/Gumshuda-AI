 

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonProgress from "components/ArgonProgress";

// ProductPage page components
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import ReviewCell from "layouts/ecommerce/products/product-page/components/ReviewCell";
import DefaultCell from "layouts/ecommerce/products/product-page/components/DefaultCell";

// Images
const img1 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg";
const img2 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg";
const img3 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg";
const img4 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg";

const dataTableData = {
  columns: [
    { Header: "product", accessor: "product", width: "50%" },
    { Header: "price", accessor: "price", width: "10%" },
    { Header: "review", accessor: "review", align: "center" },
    { Header: "availability", accessor: "availability", align: "center", width: "40%" },
    { Header: "id", accessor: "id", align: "center" },
  ],

  rows: [
    {
      product: <ProductCell image={img1} name="Christopher Knight Home" />,
      price: <DefaultCell>$89.53</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <ArgonBox width="8rem">
          <ArgonProgress variant="gradient" value={80} color="success" />
        </ArgonBox>
      ),
      id: <DefaultCell>230019</DefaultCell>,
    },
    {
      product: <ProductCell image={img2} name="Bar Height Swivel Barstool" />,
      price: <DefaultCell>$99.99</DefaultCell>,
      review: <ReviewCell rating={5} />,
      availability: (
        <ArgonBox width="8rem">
          <ArgonProgress variant="gradient" value={90} color="success" />
        </ArgonBox>
      ),
      id: <DefaultCell>87120</DefaultCell>,
    },
    {
      product: <ProductCell image={img3} name="Signature Design by Ashley" />,
      price: <DefaultCell>$129.00</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <ArgonBox width="8rem">
          <ArgonProgress variant="gradient" value={60} color="warning" />
        </ArgonBox>
      ),
      id: <DefaultCell>412301</DefaultCell>,
    },
    {
      product: <ProductCell image={img4} name="Modern Square" />,
      price: <DefaultCell>$59.99</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <ArgonBox width="8rem">
          <ArgonProgress variant="gradient" value={40} color="warning" />
        </ArgonBox>
      ),
      id: <DefaultCell>001992</DefaultCell>,
    },
  ],
};

export default dataTableData;
