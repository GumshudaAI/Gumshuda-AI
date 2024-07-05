 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonProgress from "components/ArgonProgress";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function Reviews() {
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Reviews
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={2} px={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <ArgonBox component="li" w="100%" py={1} mb={0.5}>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <ArgonTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                positive reviews
              </ArgonTypography>
              <ArgonTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                80%
              </ArgonTypography>
            </ArgonBox>
            <ArgonProgress variant="gradient" value={80} sx={{ height: "8px" }} />
          </ArgonBox>
          <ArgonBox component="li" w="100%" py={1} mb={0.5}>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <ArgonTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                neutral reviews
              </ArgonTypography>
              <ArgonTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                20%
              </ArgonTypography>
            </ArgonBox>
            <ArgonProgress variant="gradient" color="dark" value={20} sx={{ height: "8px" }} />
          </ArgonBox>
          <ArgonBox component="li" w="100%" py={1} mb={0.5}>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <ArgonTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                negative reviews
              </ArgonTypography>
              <ArgonTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                5%
              </ArgonTypography>
            </ArgonBox>
            <ArgonProgress variant="gradient" color="error" value={5} sx={{ height: "8px" }} />
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox pb={2} px={2} display="flex" flexDirection={{ xs: "column", sm: "row" }} mt="auto">
        <ArgonBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            More than <strong>1,500,000</strong> developers used Creative Tim&apos;s products and
            over <strong>700,000</strong>
            projects were created.
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox width={{ xs: "100%", sm: "40%" }} textAlign="right" mt={{ xs: 2, sm: "auto" }}>
          <ArgonButton variant="gradient" color="dark">
            View All Reviews
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Reviews;
