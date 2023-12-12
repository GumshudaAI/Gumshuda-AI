 

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
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-cover.jpg";

function Cover() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={bgImage}
    >
      <Card>
        <ArgonBox pt={3} px={3}>
          <ArgonTypography variant="h3" color="dark" fontWeight="bold" mb={1}>
            Welcome back
          </ArgonTypography>
          <ArgonTypography variant="body2" color="text">
            Enter your email and password to sign in
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox p={3}>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={3}>
              <ArgonTypography
                display="block"
                variant="caption"
                fontWeight="bold"
                color="dark"
                sx={{ ml: 0.5, mb: 1 }}
              >
                Email
              </ArgonTypography>
              <ArgonInput type="email" placeholder="Email" />
            </ArgonBox>
            <ArgonBox mb={3}>
              <ArgonTypography
                display="block"
                variant="caption"
                fontWeight="bold"
                color="dark"
                sx={{ ml: 0.5, mb: 1 }}
              >
                Password
              </ArgonTypography>
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
            <ArgonBox mt={4}>
              <ArgonButton color="info" fullWidth>
                Sign In
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox pb={4} px={1} textAlign="center">
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/sign-up/cover"
              variant="button"
              fontWeight="regular"
              color="info"
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
