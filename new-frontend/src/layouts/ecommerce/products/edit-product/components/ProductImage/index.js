 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Images
const sofa =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-page.jpg";

function ProductImage() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox p={3}>
        <ArgonTypography variant="h5" fontWeight="bold">
          Product Image
        </ArgonTypography>
        <ArgonBox
          component="img"
          src={sofa}
          alt="Product Image"
          borderRadius="lg"
          shadow="lg"
          width="100%"
          my={3}
        />
        <ArgonBox display="flex">
          <ArgonBox mr={1}>
            <ArgonButton variant="gradient" color="info" size="small" sx={{ height: "100%" }}>
              Edit
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="outlined" color="dark" size="small">
            Remove
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ProductImage;
