/* eslint-disable   */
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerButton from "components/PowerButton";
import PowerProgress from "components/PowerProgress";
import PowerTypography from "components/PowerTypography";
import { Link, NavLink } from "react-router-dom";

// Data
const data = [
  { title: "Call with Dave", time: "09:30 AM", checked: true },
  { title: "Brunch Meeting", time: "11:00 AM", checked: false },
  { title: "Power Dashboard Launch", time: "02:00 PM", checked: false },
  { title: "Winter Hackaton", time: "10:30 AM", checked: true },
];

function BalanceCard(props) {
  return (
    <Card>
      <PowerBox variant="gradient" bgColor="dark">
        <PowerBox p={3}>
          <PowerBox mb={1}>
            <PowerBox display="flex" alignItems="center" gap={0.5}>
              <PowerTypography component="sup" variant="caption" color="white"></PowerTypography>{" "}
              <PowerTypography component="span" variant="h2" color="white" fontWeight="bold">
                {props.title}
              </PowerTypography>
            </PowerBox>
            <PowerTypography
              component="div"
              variant="button"
              color="white"
              fontWeight="regular"
              opacity={0.8}
              mt={1}
            >
              {props.subtitle}
            </PowerTypography>
          </PowerBox>
          <Link to={props.route}>
            <PowerButton color="white" size="large" fullWidth>
              {props.buttonTitle}
            </PowerButton>
          </Link>
        </PowerBox>
        <PowerBox pb={3} px={3}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <PowerTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Unclaimed Inventory: 60%
              </PowerTypography>
              <PowerBox my={1}>
                <PowerProgress value={60} color="success" />
              </PowerBox>
            </Grid>
            <Grid item xs={6}>
              <PowerTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Claimed Invetory: 40%
              </PowerTypography>
              <PowerBox my={1}>
                <PowerProgress value={40} color="warning" />
              </PowerBox>
            </Grid>
          </Grid>
        </PowerBox>
      </PowerBox>
    </Card>
  );
}

export default BalanceCard;
