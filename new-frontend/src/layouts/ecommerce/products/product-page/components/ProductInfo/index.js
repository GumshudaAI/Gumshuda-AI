 

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonBadge from "components/ArgonBadge";
import ArgonSelect from "components/ArgonSelect";
import ArgonInput from "components/ArgonInput";

function ProductInfo() {
  const frameOptions = [
    { value: "aluminium", label: "Aluminium" },
    { value: "carbon", label: "Carbon" },
    { value: "steel", label: "Steel" },
    { value: "wood", label: "Wood" },
  ];

  const colorOptions = [
    { value: "black", label: "black" },
    { value: "blue", label: "blue" },
    { value: "gray", label: "gray" },
    { value: "pink", label: "pink" },
    { value: "red", label: "red" },
    { value: "white", label: "white" },
  ];

  return (
    <ArgonBox>
      <ArgonBox mb={1}>
        <ArgonTypography variant="h3" fontWeight="bold">
          Minimal Bar Stool
        </ArgonTypography>
      </ArgonBox>
      <ArgonTypography variant="h4" color="text">
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star_half</Icon>
      </ArgonTypography>
      <ArgonBox mt={1}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Price
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox mb={1}>
        <ArgonTypography variant="h5" fontWeight="medium">
          $1,419
        </ArgonTypography>
      </ArgonBox>
      <ArgonBadge variant="contained" color="success" badgeContent="in stock" container />
      <ArgonBox mt={3} mb={1} ml={0.5}>
        <ArgonTypography variant="caption" fontWeight="bold">
          Description
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox component="ul" m={0} pl={4} mb={2}>
        <ArgonBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <ArgonTypography variant="body2" color="text" verticalAlign="middle">
            The most beautiful curves of this swivel stool adds an elegant touch to any environment
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <ArgonTypography variant="body2" color="text" verticalAlign="middle">
            Memory swivel seat returns to original seat position
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <ArgonTypography variant="body2" color="text" verticalAlign="middle">
            Comfortable integrated layered chair seat cushion design
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <ArgonTypography variant="body2" color="text" verticalAlign="middle">
            Fully assembled! No assembly required
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ArgonTypography component="label" variant="caption" fontWeight="bold">
                Frame Material
              </ArgonTypography>
            </ArgonBox>
            <ArgonSelect defaultValue={frameOptions[3]} options={frameOptions} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ArgonTypography component="label" variant="caption" fontWeight="bold">
                Color
              </ArgonTypography>
            </ArgonBox>
            <ArgonSelect defaultValue={colorOptions[5]} options={colorOptions} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ArgonTypography component="label" variant="caption" fontWeight="bold">
                Quantity
              </ArgonTypography>
            </ArgonBox>
            <ArgonInput inputProps={{ type: "number" }} defaultValue={1} />
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox mt={3}>
        <Grid item xs={12} lg={5} container>
          <ArgonButton variant="gradient" color="info" fullWidth>
            Add To Cart
          </ArgonButton>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

export default ProductInfo;
