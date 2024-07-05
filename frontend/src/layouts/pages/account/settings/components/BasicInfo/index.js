 

import { useState } from "react";

// @mui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonSelect from "components/ArgonSelect";
import ArgonTagInput from "components/ArgonTagInput";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";

function BasicInfo() {
  const [skills, setSkills] = useState(["react", "angular"]);

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <ArgonBox p={3}>
        <ArgonTypography variant="h5">Basic Info</ArgonTypography>
      </ArgonBox>
      <ArgonBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField label="first name" placeholder="Alec" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="last name" placeholder="Thompson" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <ArgonBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <ArgonTypography
                      component="label"
                      variant="caption"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      I&apos;m
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonSelect placeholder="Male" options={selectData.gender} />
                </ArgonBox>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <ArgonBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <ArgonTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          birth date
                        </ArgonTypography>
                      </ArgonBox>
                      <ArgonSelect placeholder="February" options={selectData.birthDate} />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <ArgonBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <ArgonSelect placeholder={1} options={selectData.days} />
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <ArgonBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <ArgonSelect placeholder={2021} options={selectData.years} />
                    </ArgonBox>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="confirmation email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="your location" placeholder="Sydney, A" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="phone number"
              placeholder="+40 735 631 620"
              inputProps={{ type: "number" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="language" placeholder="English" />
          </Grid>
          <Grid item xs={12} md={6}>
            <ArgonBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <ArgonTagInput
                tags={skills}
                placeholder=" "
                onChange={(newSkill) => setSkills(newSkill)}
                removeOnBackspace
              />
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
    </Card>
  );
}

export default BasicInfo;
