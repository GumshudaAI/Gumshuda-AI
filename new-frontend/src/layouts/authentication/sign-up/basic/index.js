 

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

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
const bgIamge =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-basic.jpg";

function Basic() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout image={bgIamge} button={{ variant: "gradient", color: "dark" }}>
      <Card>
        <ArgonBox p={3} mb={1} textAlign="center">
          <ArgonTypography variant="h5" fontWeight="medium">
            Register with
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={2}>
          <Socials />
        </ArgonBox>
        <ArgonBox px={12}>
          <Separator />
        </ArgonBox>
        <ArgonBox pt={2} pb={3} px={3}>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonInput placeholder="Name" />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput type="email" placeholder="Email" />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput type="password" placeholder="Password" />
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <ArgonTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </ArgonTypography>
              <ArgonTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mt={4} mb={1}>
              <ArgonButton variant="gradient" color="dark" fullWidth>
                Sign up
              </ArgonButton>
            </ArgonBox>
            <ArgonBox mt={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <ArgonTypography
                  component={Link}
                  to="/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </ArgonTypography>
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
