 

import { useState } from "react";

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function Address({ formData }) {
  const [state, setState] = useState("...");
  const { formField, values, errors, touched } = formData;
  const { address1, address2, city, zip } = formField;
  const { address1: address1V, address2: address2V, city: cityV, zip: zipV } = values;

  const handleSetState = (event) => setState(event.target.value);

  return (
    <ArgonBox>
      <ArgonTypography variant="h5" fontWeight="bold">
        Address
      </ArgonTypography>
      <ArgonBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              type={address1.type}
              label={address1.label}
              name={address1.name}
              value={address1V}
              placeholder={address1.placeholder}
              error={errors.address1 && touched.address1}
              success={address1V.length > 0 && !errors.address1}
            />
          </Grid>
          <Grid item xs={12}>
            <ArgonBox mt={-1.625}>
              <FormField
                type={address2.type}
                label={address2.label}
                name={address2.name}
                value={address2V}
                placeholder={address2.placeholder}
              />
            </ArgonBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={city.type}
              label={city.label}
              name={city.name}
              value={cityV}
              placeholder={city.placeholder}
              error={errors.city && touched.city}
              success={cityV.length > 0 && !errors.city}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ArgonTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                State
              </ArgonTypography>
            </ArgonBox>
            <Select input={<ArgonInput />} value={state} onChange={handleSetState}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="10">Hello 10</MenuItem>
              <MenuItem value="11">Hello 11</MenuItem>
              <MenuItem value="12">Hello 12</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={zip.type}
              label={zip.label}
              name={zip.name}
              value={zipV}
              placeholder={zip.placeholder}
              error={errors.zip && touched.zip}
              success={zipV.length > 0 && !errors.zip}
            />
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
