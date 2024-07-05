 

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Invoice page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";

// Images
import logoCT from "assets/images/logo-ct.png";
import logoCTDark from "assets/images/logo-ct-dark.png";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

function Invoice() {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const { borderWidth } = borders;
  const { light, dark } = colors;
  const borderBottom = `${borderWidth[1]} solid ${light.main}`;

  return (
    <BaseLayout stickyNavbar>
      <ArgonBox mt={{ xs: 4, md: 10 }} mb={{ xs: 4, md: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Card>
              {/* Invoice header */}
              <ArgonBox p={3}>
                <Grid container justifyContent="space-between">
                  <Grid item xs={12} md={4}>
                    <ArgonBox
                      component="img"
                      src={darkMode ? logoCT : logoCTDark}
                      width="25%"
                      p={1}
                      mb={1}
                    />
                    <ArgonTypography variant="h6" fontWeight="medium">
                      St. Independence Embankment, 050105 Bucharest, Romania
                    </ArgonTypography>
                    <ArgonBox mt={1} mb={2}>
                      <ArgonTypography display="block" variant="body2" color="secondary">
                        tel: +4 (074) 1090873
                      </ArgonTypography>
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={12} md={7} lg={3}>
                    <ArgonBox width="100%" textAlign={{ xs: "left", md: "right" }} mt={6}>
                      <ArgonBox mt={1}>
                        <ArgonTypography variant="h6" fontWeight="medium">
                          Billed to: John Doe
                        </ArgonTypography>
                      </ArgonBox>
                      <ArgonBox mb={1}>
                        <ArgonTypography variant="body2" color="secondary">
                          4006 Locust View Drive
                          <br />
                          San Francisco CA
                          <br />
                          California
                        </ArgonTypography>
                      </ArgonBox>
                    </ArgonBox>
                  </Grid>
                </Grid>
                <ArgonBox mt={{ xs: 5, md: 10 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                      <ArgonTypography variant="h6" color="secondary" fontWeight="medium">
                        Invoice no
                      </ArgonTypography>
                      <ArgonTypography variant="h5" fontWeight="medium">
                        #0453119
                      </ArgonTypography>
                    </Grid>
                    <Grid item xs={12} md={7} lg={5}>
                      <ArgonBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                        mt={{ xs: 3, md: 0 }}
                      >
                        <ArgonBox width="50%">
                          <ArgonTypography variant="h6" color="secondary" fontWeight="medium">
                            Invoice date:
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox width="50%">
                          <ArgonTypography variant="h6" fontWeight="medium">
                            06/03/2019
                          </ArgonTypography>
                        </ArgonBox>
                      </ArgonBox>
                      <ArgonBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                      >
                        <ArgonBox width="50%">
                          <ArgonTypography variant="h6" color="secondary" fontWeight="medium">
                            Due date:
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox width="50%">
                          <ArgonTypography variant="h6" fontWeight="medium">
                            11/03/2019
                          </ArgonTypography>
                        </ArgonBox>
                      </ArgonBox>
                    </Grid>
                  </Grid>
                </ArgonBox>
              </ArgonBox>

              {/* Invoice table */}
              <ArgonBox p={3}>
                <ArgonBox width="100%" overflow="auto" borderRadius="xl">
                  <Table sx={{ minWidth: "32rem" }}>
                    <ArgonBox bgColor="dark" component="thead">
                      <TableRow>
                        <ArgonBox
                          component="th"
                          width={{ xs: "45%", md: "50%" }}
                          py={1.5}
                          px={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="h6" color="white" fontWeight="medium">
                            Item
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="h6" color="white" fontWeight="medium">
                            Qty
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="h6" color="white" fontWeight="medium">
                            Rate
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="h6" color="white" fontWeight="medium">
                            Amount
                          </ArgonTypography>
                        </ArgonBox>
                      </TableRow>
                    </ArgonBox>
                    <TableBody>
                      <TableRow>
                        <ArgonBox component="td" textAlign="left" p={1} borderBottom={borderBottom}>
                          <ArgonTypography variant="body2" color="text">
                            Premium Support
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="body2" color="text">
                            1
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="body2" color="text">
                            $ 9.00
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="body2" color="text">
                            $ 9.00
                          </ArgonTypography>
                        </ArgonBox>
                      </TableRow>
                      <TableRow>
                        <ArgonBox component="td" textAlign="left" p={1} borderBottom={borderBottom}>
                          <ArgonTypography variant="body2" color="text">
                            Argon Design System PRO
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="body2" color="text">
                            3
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="body2" color="text">
                            $ 100.00
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="body2" color="text">
                            $ 300.00
                          </ArgonTypography>
                        </ArgonBox>
                      </TableRow>
                      <TableRow>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          p={1}
                          borderBottom={`1px solid ${dark.main}`}
                        >
                          <ArgonTypography variant="body2" color="text">
                            Parts for service
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={`1px solid ${dark.main}`}
                        >
                          <ArgonTypography variant="body2" color="text">
                            1
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={`1px solid ${dark.main}`}
                        >
                          <ArgonTypography variant="body2" color="text">
                            $ 89.00
                          </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={`1px solid ${dark.main}`}
                        >
                          <ArgonTypography variant="body2" color="text">
                            $ 89.00
                          </ArgonTypography>
                        </ArgonBox>
                      </TableRow>
                      <TableRow>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        />
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        />
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="h5">Total</ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <ArgonTypography variant="h5">$ 698</ArgonTypography>
                        </ArgonBox>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ArgonBox>
              </ArgonBox>

              {/* Invoice footer */}
              <ArgonBox p={3} mt={7}>
                <Grid container>
                  <Grid item xs={12} lg={5}>
                    <ArgonTypography variant="h5" fontWeight="medium">
                      Thank you!
                    </ArgonTypography>
                    <ArgonBox mt={1} mb={2} lineHeight={0}>
                      <ArgonTypography variant="button" fontWeight="regular" color="secondary">
                        If you encounter any issues related to the invoice you can contact us at:
                      </ArgonTypography>
                    </ArgonBox>
                    <ArgonTypography
                      component="span"
                      variant="h6"
                      fontWeight="medium"
                      color="secondary"
                    >
                      email:{" "}
                      <ArgonTypography component="span" variant="h6" fontWeight="medium">
                        support@creative-tim.com
                      </ArgonTypography>
                    </ArgonTypography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <ArgonBox
                      width="100%"
                      height={{ xs: "auto", md: "100%" }}
                      display="flex"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      alignItems="flex-end"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <ArgonButton color="info" onClick={() => window.print(this)}>
                        Print
                      </ArgonButton>
                    </ArgonBox>
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
    </BaseLayout>
  );
}

export default Invoice;
