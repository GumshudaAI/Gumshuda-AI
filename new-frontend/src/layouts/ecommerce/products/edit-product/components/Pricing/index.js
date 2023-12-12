 

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonSelect from "components/ArgonSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function Pricing() {
  return (
    <Card sx={{ overflow: "visible" }}>
      <ArgonBox p={3}>
        <ArgonTypography variant="h5" fontWeight="bold">
          Pricing
        </ArgonTypography>
        <ArgonBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="price" defaultValue="99.00" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <ArgonTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Currency
                </ArgonTypography>
              </ArgonBox>
              <ArgonSelect
                defaultValue={{ value: "usd", label: "USD" }}
                options={[
                  { value: "btc", label: "BTC" },
                  { value: "cny", label: "CNY" },
                  { value: "eur", label: "EUR" },
                  { value: "gbp", label: "GBP" },
                  { value: "inr", label: "INR" },
                  { value: "use", label: "USD" },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormField type="text" label="SKU" defaultValue="71283476591" />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <ArgonTypography component="label" variant="caption" fontWeight="bold">
                  Project Tags
                </ArgonTypography>
              </ArgonBox>
              <ArgonSelect
                defaultValue={[
                  { value: "in stock", label: "In Stock" },
                  { value: "out of stock", label: "Out of Stock" },
                ]}
                options={[
                  { value: "black friday", label: "Black Friday" },
                  { value: "expired", label: "Expired", isDisabled: true },
                  { value: "out of stock", label: "Out of Stock" },
                  { value: "in stock", label: "In Stock" },
                  { value: "sale", label: "Sale" },
                ]}
                size="large"
                isMulti
              />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Pricing;
