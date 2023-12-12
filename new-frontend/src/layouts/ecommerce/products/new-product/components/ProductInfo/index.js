 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonEditor from "components/ArgonEditor";
import ArgonSelect from "components/ArgonSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function ProductInfo() {
  const [editorValue, setEditorValue] = useState(
    "<p>Some initial <strong>bold</strong> text</p><br><br><br>"
  );

  return (
    <ArgonBox>
      <ArgonTypography variant="h5">Product Information</ArgonTypography>
      <ArgonBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="name" placeholder="eg. Off-White" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="weight" placeholder="eg. 42" />
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox mt={2}>
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
                Size
              </ArgonTypography>
            </ArgonBox>
            <ArgonSelect
              defaultValue={{ value: "medium", label: "Medium" }}
              options={[
                { value: "extra large", label: "Extra Large" },
                { value: "extra small", label: "Extra Small" },
                { value: "large", label: "Large" },
                { value: "medium", label: "Medium" },
                { value: "small", label: "Small" },
              ]}
            />
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

export default ProductInfo;
