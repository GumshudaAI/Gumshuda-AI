 

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonDropzone from "components/ArgonDropzone";

function Media() {
  return (
    <ArgonBox>
      <ArgonTypography variant="h5">Media</ArgonTypography>
      <ArgonBox mt={3}>
        <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <ArgonTypography component="label" variant="caption" fontWeight="bold">
            Product Image
          </ArgonTypography>
        </ArgonBox>
        <ArgonDropzone options={{ addRemoveLinks: true }} />
      </ArgonBox>
    </ArgonBox>
  );
}

export default Media;
