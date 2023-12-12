 

import { useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// NewUser page components
import UserInfo from "layouts/pages/users/new-user/components/UserInfo";
import Address from "layouts/pages/users/new-user/components/Address";
import Socials from "layouts/pages/users/new-user/components/Socials";
import Profile from "layouts/pages/users/new-user/components/Profile";

// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user/schemas/validations";
import form from "layouts/pages/users/new-user/schemas/form";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";

function getSteps() {
  return ["User Info", "Address", "Social", "Profile"];
}

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} />;
    case 1:
      return <Address formData={formData} />;
    case 2:
      return <Socials formData={formData} />;
    case 3:
      return <Profile formData={formData} />;
    default:
      return null;
  }
}

function NewUser() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();

    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            <Card
              sx={{
                display: "grid",
                alignItems: "center",
                position: "relative",
                height: "6rem",
                borderRadius: "lg",
                mb: 3,
              }}
            >
              <Stepper activeStep={activeStep} sx={{ margin: 0 }} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Card>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <ArgonBox p={2}>
                      <ArgonBox>
                        {getStepContent(activeStep, {
                          values,
                          touched,
                          formField,
                          errors,
                        })}
                        <ArgonBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          {activeStep === 0 ? (
                            <ArgonBox />
                          ) : (
                            <ArgonButton variant="gradient" color="light" onClick={handleBack}>
                              Back
                            </ArgonButton>
                          )}
                          <ArgonButton
                            disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark"
                          >
                            {isLastStep ? "Send" : "Next"}
                          </ArgonButton>
                        </ArgonBox>
                      </ArgonBox>
                    </ArgonBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewUser;
