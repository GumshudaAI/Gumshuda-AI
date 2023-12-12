 

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reset-basic.jpg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage} button={{ variant: "gradient", color: "dark" }}>
      <Card>
        <ArgonBox pt={3} px={3} pb={1} textAlign="center">
          <ArgonTypography variant="h4" fontWeight="bold" textGradient>
            Reset password
          </ArgonTypography>
          <ArgonTypography variant="body2" color="text">
            You will receive an e-mail in maximum 60 seconds
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox p={3}>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonInput type="email" placeholder="Email" />
            </ArgonBox>
            <ArgonBox mt={5} mb={1}>
              <ArgonButton variant="gradient" color="dark" size="large" fullWidth>
                Send
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
