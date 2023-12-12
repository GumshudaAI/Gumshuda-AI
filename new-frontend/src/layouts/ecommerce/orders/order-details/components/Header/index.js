 

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function Header() {
  return (
    <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
      <ArgonBox>
        <ArgonBox mb={1}>
          <ArgonTypography variant="h6" fontWeight="medium">
            Order Details
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography component="p" variant="button" fontWeight="regular" color="text">
          Order no. <span sx={{ fontWeight: "bold" }}>241342</span> from
          <span sx={{ fontWeight: "bold" }}>23.02.2021</span>
        </ArgonTypography>
        <ArgonTypography component="p" variant="button" fontWeight="regular" color="text">
          Code: <span sx={{ fontWeight: "bold" }}>KF332</span>
        </ArgonTypography>
      </ArgonBox>
      <ArgonButton variant="gradient" color="secondary">
        Invoice
      </ArgonButton>
    </ArgonBox>
  );
}

export default Header;
