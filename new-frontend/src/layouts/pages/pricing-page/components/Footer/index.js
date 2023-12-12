 

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function Footer() {
  return (
    <ArgonBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <ArgonBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <ArgonBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Company
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                About Us
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Team
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Product
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Blog
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Pricing
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <ArgonBox display="flex" justifyContent="center" mt={1} mb={3}>
            <ArgonBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </ArgonBox>
            <ArgonBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </ArgonBox>
            <ArgonBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </ArgonBox>
            <ArgonBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </ArgonBox>
            <ArgonBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </ArgonBox>
          </ArgonBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <ArgonTypography variant="body2" color="secondary">
            Copyright &copy; 2021 Soft by Creative Tim.
          </ArgonTypography>
        </Grid>
      </Grid>
    </ArgonBox>
  );
}

export default Footer;
