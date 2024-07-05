// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

function Footer() {
  return (
    <PowerBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <PowerBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <PowerBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <PowerTypography component="a" href="#" variant="body2" color="secondary">
                Company
              </PowerTypography>
            </PowerBox>
            <PowerBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <PowerTypography component="a" href="#" variant="body2" color="secondary">
                About Us
              </PowerTypography>
            </PowerBox>
            <PowerBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <PowerTypography component="a" href="#" variant="body2" color="secondary">
                Team
              </PowerTypography>
            </PowerBox>
            <PowerBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <PowerTypography component="a" href="#" variant="body2" color="secondary">
                Product
              </PowerTypography>
            </PowerBox>
            <PowerBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <PowerTypography component="a" href="#" variant="body2" color="secondary">
                Blog
              </PowerTypography>
            </PowerBox>
            <PowerBox>
              <PowerTypography component="a" href="#" variant="body2" color="secondary">
                Pricing
              </PowerTypography>
            </PowerBox>
          </PowerBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <PowerBox display="flex" justifyContent="center" mt={1} mb={3}>
            <PowerBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </PowerBox>
            <PowerBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </PowerBox>
            <PowerBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </PowerBox>
            <PowerBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </PowerBox>
            <PowerBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </PowerBox>
          </PowerBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <PowerTypography variant="body2" color="secondary">
            Copyright &copy; 2022 Power by Creative Tim.
          </PowerTypography>
        </Grid>
      </Grid>
    </PowerBox>
  );
}

export default Footer;
