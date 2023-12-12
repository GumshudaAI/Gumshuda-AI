 

// @mui material components
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Switch from "@mui/material/Switch";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Setting pages components
import TableCell from "layouts/pages/account/settings/components/TableCell";

function Notifications() {
  return (
    <Card id="notifications">
      <ArgonBox p={3} lineHeight={1}>
        <ArgonBox mb={1}>
          <ArgonTypography variant="h5">Notifications</ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Choose how you receive notifications. These notification settings apply to the things
          you’re watching.
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pb={3} px={3}>
        <ArgonBox minWidth="auto" sx={{ overflow: "scroll" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <ArgonBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]}>
                  Activity
                </TableCell>
                <TableCell align="center" padding={[1.5, 3, 1.5, 3]}>
                  Email
                </TableCell>
                <TableCell align="center" padding={[1.5, 3, 1.5, 3]}>
                  Push
                </TableCell>
                <TableCell align="center" padding={[1.5, 3, 1.5, 3]}>
                  SMS
                </TableCell>
              </TableRow>
            </ArgonBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <ArgonBox lineHeight={1.4}>
                    <ArgonTypography display="block" variant="button" fontWeight="regular">
                      Mentions
                    </ArgonTypography>
                    <ArgonTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user mentions you in a comment
                    </ArgonTypography>
                  </ArgonBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <ArgonBox lineHeight={1.4}>
                    <ArgonTypography display="block" variant="button" fontWeight="regular">
                      Comments
                    </ArgonTypography>
                    <ArgonTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user comments your item.
                    </ArgonTypography>
                  </ArgonBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <ArgonBox lineHeight={1.4}>
                    <ArgonTypography display="block" variant="button" fontWeight="regular">
                      Follows
                    </ArgonTypography>
                    <ArgonTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user follows you.
                    </ArgonTypography>
                  </ArgonBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <ArgonTypography
                    display="block"
                    variant="button"
                    color="text"
                    fontWeight="regular"
                  >
                    Log in from a new device
                  </ArgonTypography>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Notifications;
