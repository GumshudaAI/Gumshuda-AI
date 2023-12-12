 

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function OrderSummary() {
  return (
    <>
      <ArgonBox mb={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Order Summary
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox display="flex" justifyContent="space-between" mb={0.5}>
        <ArgonTypography variant="button" fontWeight="regular" color="text">
          Product Price:
        </ArgonTypography>
        <ArgonBox ml={1}>
          <ArgonTypography variant="body2" fontWeight="medium">
            $90
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox display="flex" justifyContent="space-between" mb={0.5}>
        <ArgonTypography variant="button" fontWeight="regular" color="text">
          Delivery:
        </ArgonTypography>
        <ArgonBox ml={1}>
          <ArgonTypography variant="body2" fontWeight="medium">
            $14
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox display="flex" justifyContent="space-between" mb={0.5}>
        <ArgonTypography variant="button" fontWeight="regular" color="text">
          Taxes:
        </ArgonTypography>
        <ArgonBox ml={1}>
          <ArgonTypography variant="body2" fontWeight="medium">
            $1.95
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox display="flex" justifyContent="space-between" mt={3}>
        <ArgonTypography variant="body1" fontWeight="light" color="text">
          Total:
        </ArgonTypography>
        <ArgonBox ml={1}>
          <ArgonTypography variant="body1" fontWeight="medium">
            $1.95
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </>
  );
}

export default OrderSummary;
