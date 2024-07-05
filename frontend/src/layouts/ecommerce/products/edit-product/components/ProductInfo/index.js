 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonEditor from "components/ArgonEditor";
import ArgonSelect from "components/ArgonSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function ProductInfo() {
  const [editorValue, setEditorValue] = useState(
    `<p>
      Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.
    </p>`
  );

  return (
    <Card sx={{ overflow: "visible" }}>
      <ArgonBox p={3}>
        <ArgonTypography variant="h5">Product Information</ArgonTypography>
        <ArgonBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField type="text" label="name" defaultValue="Minimal Bar Stool" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField type="number" label="weight" defaultValue={2} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="collection" defaultValue="Summer" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="price" defaultValue="$90" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="quantity" defaultValue={50} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <ArgonTypography component="label" variant="caption" fontWeight="bold">
                  Description&nbsp;&nbsp;
                  <ArgonTypography variant="caption" fontWeight="regular" color="text">
                    (optional)
                  </ArgonTypography>
                </ArgonTypography>
              </ArgonBox>
              <ArgonEditor value={editorValue} onChange={setEditorValue} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ArgonBox mb={3}>
                <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <ArgonTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Category
                  </ArgonTypography>
                </ArgonBox>
                <ArgonSelect
                  defaultValue={{ value: "clothing", label: "Clothing" }}
                  options={[
                    { value: "clothing", label: "Clothing" },
                    { value: "electronics", label: "Electronics" },
                    { value: "furniture", label: "Furniture" },
                    { value: "others", label: "Others" },
                    { value: "real estate", label: "Real Estate" },
                  ]}
                />
              </ArgonBox>
              <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <ArgonTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Color
                </ArgonTypography>
              </ArgonBox>
              <ArgonSelect
                defaultValue={{ value: "black", label: "Black" }}
                options={[
                  { value: "black", label: "Black" },
                  { value: "blue", label: "Blue" },
                  { value: "green", label: "Green" },
                  { value: "orange", label: "Orange" },
                  { value: "white", label: "White" },
                ]}
              />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ProductInfo;
