import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import github from "assets/images/logos/github.svg";
import google from "assets/images/logos/google.svg";
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-basic.jpg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <ArgonBox p={3} textAlign="center">
          <ArgonTypography variant="h5" fontWeight="medium" sx={{ my: 2 }}>
            Sign in
          </ArgonTypography>
          <ArgonBox display="flex" justifyContent="center">
            <ArgonButton size="small" sx={{ mr: 1 }}>
              <ArgonBox component="img" src={github} alt="github" width="23px" height="23px" />
              &nbsp; Github
            </ArgonButton>
            <ArgonButton size="small">
              <ArgonBox component="img" src={google} alt="github" width="23px" height="23px" />
              &nbsp; Google
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox px={6} pb={3} textAlign="center">
          <ArgonTypography
            display="block"
            variant="button"
            color="secondary"
            fontWeight="regular"
            sx={{ mb: 3 }}
          >
            Or sign in with credentials
          </ArgonTypography>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonInput type="email" placeholder="Email" />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput type="password" placeholder="Password" />
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <ArgonTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;Remember me
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mt={4} mb={1}>
              <ArgonButton color="info" fullWidth>
                Sign In
              </ArgonButton>
            </ArgonBox>
            <Separator />
            <ArgonBox mt={1} mb={3}>
              <ArgonButton
                component={Link}
                to="/sign-up"
                variant="gradient"
                color="dark"
                fullWidth
              >
                Sign Up
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
