/* eslint-disable   */
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonProgress from "components/ArgonProgress";
import ArgonTypography from "components/ArgonTypography";
import { Link, NavLink } from "react-router-dom";

// Data
const data = [
  { title: "Call with Dave", time: "09:30 AM", checked: true },
  { title: "Brunch Meeting", time: "11:00 AM", checked: false },
  { title: "Argon Dashboard Launch", time: "02:00 PM", checked: false },
  { title: "Winter Hackaton", time: "10:30 AM", checked: true },
];

function BalanceCard(props) {
  return (
    <Card>
      <ArgonBox variant="gradient" bgColor="dark">
        <ArgonBox p={3}>
          <ArgonBox mb={1}>
            <ArgonBox display="flex" alignItems="center" gap={0.5}>
              <ArgonTypography component="sup" variant="caption" color="white"></ArgonTypography>{" "}
              <ArgonTypography component="span" variant="h2" color="white" fontWeight="bold">
                {props.title}
              </ArgonTypography>
            </ArgonBox>
            <ArgonTypography
              component="div"
              variant="button"
              color="white"
              fontWeight="regular"
              opacity={0.8}
              mt={1}
            >
              {props.subtitle}
            </ArgonTypography>
          </ArgonBox>
          <Link to={props.route}>
            <ArgonButton color="white" size="large" fullWidth>
              {props.buttonTitle}
            </ArgonButton>
          </Link>
        </ArgonBox>
        <ArgonBox pb={3} px={3}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ArgonTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Unclaimed Inventory: 60%
              </ArgonTypography>
              <ArgonBox my={1}>
                <ArgonProgress value={60} color="success" />
              </ArgonBox>
            </Grid>
            <Grid item xs={6}>
              <ArgonTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Claimed Invetory: 40%
              </ArgonTypography>
              <ArgonBox my={1}>
                <ArgonProgress value={40} color="warning" />
              </ArgonBox>
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default BalanceCard;
