 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonSelect from "components/ArgonSelect";
import ArgonDatePicker from "components/ArgonDatePicker";
import ArgonEditor from "components/ArgonEditor";
import ArgonDropzone from "components/ArgonDropzone";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function NewProject() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [editorValue, setEditorValue] = useState(
    "<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><br><br>"
  );

  const handleSetStartDate = (newDate) => setStartDate(newDate);
  const handleSetEndDate = (newDate) => setEndDate(newDate);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mt={3} mb={4}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={9}>
            <Card sx={{ overflow: "visible" }}>
              <ArgonBox p={2} lineHeight={1}>
                <ArgonTypography variant="h6" fontWeight="medium">
                  New Project
                </ArgonTypography>
                <ArgonTypography variant="button" fontWeight="regular" color="text">
                  Create new project
                </ArgonTypography>
                <Divider />
                <ArgonBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <ArgonTypography component="label" variant="caption" fontWeight="bold">
                      Project Name
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonInput placeholder="Gumshuda AI MUI" />
                </ArgonBox>
                <ArgonBox mt={3} mb={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <ArgonTypography component="label" variant="caption" fontWeight="bold">
                          Private Project
                        </ArgonTypography>
                      </ArgonBox>
                      <ArgonBox pl={0.5} pb={1.5}>
                        <ArgonTypography
                          component="label"
                          variant="caption"
                          fontWeight="regular"
                          color="text"
                        >
                          If you are available for hire outside of the current situation, you can
                          encourage others to hire you.
                        </ArgonTypography>
                      </ArgonBox>
                      <ArgonBox ml={0.5} mb={0.25}>
                        <Switch />
                      </ArgonBox>
                    </Grid>
                  </Grid>
                </ArgonBox>
                <ArgonBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <ArgonBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                    <ArgonTypography component="label" variant="caption" fontWeight="bold">
                      Project Description
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonBox mb={1.5} ml={0.5} mt={0.5} lineHeight={0} display="inline-block">
                    <ArgonTypography
                      component="label"
                      variant="caption"
                      fontWeight="regular"
                      color="text"
                    >
                      This is how others will learn about the project, so make it good!
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonEditor value={editorValue} onChange={setEditorValue} />
                </ArgonBox>

                <ArgonBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <ArgonBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                    <ArgonTypography component="label" variant="caption" fontWeight="bold">
                      Project Tags
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonSelect
                    defaultValue={[
                      { value: "choice 1", label: "Choice 1" },
                      { value: "label two", label: "label two" },
                    ]}
                    options={[
                      { value: "choice 1", label: "Choice 1" },
                      { value: "choice 2", label: "Choice 2" },
                      { value: "choice 3", label: "Choice 3" },
                      { value: "choice 4", label: "Choice 4" },
                      { value: "label one", label: "Label One", isDisabled: true },
                      { value: "label two", label: "Tabel Two" },
                      { value: "label three", label: "Label Three" },
                    ]}
                    isMulti
                  />
                </ArgonBox>

                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <ArgonBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <ArgonBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                        <ArgonTypography component="label" variant="caption" fontWeight="bold">
                          Start Date
                        </ArgonTypography>
                      </ArgonBox>
                      <ArgonDatePicker value={startDate} onChange={handleSetStartDate} />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={6}>
                    <ArgonBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <ArgonBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                        <ArgonTypography component="label" variant="caption" fontWeight="bold">
                          End Date
                        </ArgonTypography>
                      </ArgonBox>
                      <ArgonDatePicker value={endDate} onChange={handleSetEndDate} />
                    </ArgonBox>
                  </Grid>
                </Grid>
                <ArgonBox>
                  <ArgonBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    height="100%"
                  >
                    <ArgonBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                      <ArgonTypography component="label" variant="caption" fontWeight="bold">
                        Starting Files
                      </ArgonTypography>
                    </ArgonBox>
                    <ArgonDropzone options={{ addRemoveLinks: true }} />
                  </ArgonBox>
                </ArgonBox>
                <ArgonBox display="flex" justifyContent="flex-end" mt={3}>
                  <ArgonBox mr={1}>
                    <ArgonButton color="light">Cancel</ArgonButton>
                  </ArgonBox>
                  <ArgonButton variant="gradient" color="info">
                    Create Project
                  </ArgonButton>
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

export default NewProject;
