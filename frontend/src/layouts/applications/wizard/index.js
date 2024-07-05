 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Wizard page components
import About from "layouts/applications/wizard/components/About";
import Account from "layouts/applications/wizard/components/Account";
import Address from "layouts/applications/wizard/components/Address";

function getSteps() {
  return ["About", "Account", "Address"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <About />;
    case 1:
      return <Account />;
    case 2:
      return <Address />;
    default:
      return null;
  }
}

function Wizard() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox pt={3} pb={8} position="relative">
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <ArgonBox mt={2} mb={12} textAlign="center">
              <ArgonBox mb={1}>
                <ArgonTypography variant="h3" color="white" fontWeight="bold">
                  Build Your Profile
                </ArgonTypography>
              </ArgonBox>
              <ArgonTypography variant="h5" fontWeight="regular" color="white">
                This information will let us know more about you.
              </ArgonTypography>
            </ArgonBox>

            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Card>
              <ArgonBox p={2}>
                <ArgonBox>
                  {getStepContent(activeStep)}
                  <ArgonBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <ArgonBox />
                    ) : (
                      <ArgonButton variant="gradient" color="light" onClick={handleBack}>
                        Back
                      </ArgonButton>
                    )}
                    <ArgonButton
                      variant="gradient"
                      color="dark"
                      onClick={!isLastStep ? handleNext : undefined}
                    >
                      {isLastStep ? "Send" : "Next"}
                    </ArgonButton>
                  </ArgonBox>
                </ArgonBox>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Wizard;
