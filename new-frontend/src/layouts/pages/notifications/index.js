 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAlert from "components/ArgonAlert";
import ArgonButton from "components/ArgonButton";
import ArgonSnackbar from "components/ArgonSnackbar";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <ArgonTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <ArgonTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </ArgonTypography>
      . Give it a click if you like.
    </ArgonTypography>
  );

  const renderSuccessSB = (
    <ArgonSnackbar
      color="success"
      icon="check"
      title="Argon Dashboard 2"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <ArgonSnackbar
      icon="notifications"
      title="Argon Dashboard 2"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <ArgonSnackbar
      color="warning"
      icon="star"
      title="Argon Dashboard 2"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <ArgonSnackbar
      color="error"
      icon="warning"
      title="Argon Dashboard 2"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <ArgonBox p={2}>
                <ArgonTypography variant="h5">Alerts</ArgonTypography>
              </ArgonBox>
              <ArgonBox pt={2} px={2}>
                <ArgonAlert color="primary" dismissible>
                  {alertContent("primary")}
                </ArgonAlert>
                <ArgonAlert color="secondary" dismissible>
                  {alertContent("secondary")}
                </ArgonAlert>
                <ArgonAlert color="success" dismissible>
                  {alertContent("success")}
                </ArgonAlert>
                <ArgonAlert color="error" dismissible>
                  {alertContent("error")}
                </ArgonAlert>
                <ArgonAlert color="warning" dismissible>
                  {alertContent("warning")}
                </ArgonAlert>
                <ArgonAlert color="info" dismissible>
                  {alertContent("info")}
                </ArgonAlert>
                <ArgonAlert color="light" dismissible>
                  {alertContent("light")}
                </ArgonAlert>
                <ArgonAlert color="dark" dismissible>
                  {alertContent("dark")}
                </ArgonAlert>
              </ArgonBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <ArgonBox p={2} lineHeight={0}>
                <ArgonTypography variant="h5">Notifications</ArgonTypography>
                <ArgonTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <ArgonButton color="success" onClick={openSuccessSB} fullWidth>
                      Success Notification
                    </ArgonButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <ArgonButton color="info" onClick={openInfoSB} fullWidth>
                      Info Notification
                    </ArgonButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <ArgonButton color="warning" onClick={openWarningSB} fullWidth>
                      Warning Notification
                    </ArgonButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <ArgonButton color="error" onClick={openErrorSB} fullWidth>
                      Error Notification
                    </ArgonButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
