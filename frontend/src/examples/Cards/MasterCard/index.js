 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg";

function MasterCard({ color, number, holder, expires }) {
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");

  return (
    <Card
      sx={({
        palette: { gradients },
        functions: { linearGradient, rgba },
        boxShadows: { xl },
      }) => ({
        background: gradients[color]
          ? `${linearGradient(
              rgba(gradients[color].main, 0.8),
              rgba(gradients[color].state, 0.8)
            )}, url(${bgImage})`
          : `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
        boxShadow: xl,
      })}
    >
      <ArgonBox p={2}>
        <ArgonBox color="white" p={1} lineHeight={0} display="inline-block">
          <Icon fontSize="default">wifi</Icon>
        </ArgonBox>
        <ArgonTypography
          variant="h5"
          color="white"
          fontWeight="medium"
          sx={{ mt: 3, mb: 5, pb: 1 }}
        >
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </ArgonTypography>
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox mr={3} lineHeight={1}>
              <ArgonTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Card Holder
              </ArgonTypography>
              <ArgonTypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {holder}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox lineHeight={1}>
              <ArgonTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Expires
              </ArgonTypography>
              <ArgonTypography variant="h6" color="white" fontWeight="medium">
                {expires}
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox display="flex" justifyContent="flex-end" width="20%">
            <ArgonBox component="img" src={masterCardLogo} alt="master card" width="60%" mt={1} />
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
  holder: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
};

export default MasterCard;
