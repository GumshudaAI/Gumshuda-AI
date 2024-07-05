 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";

// Images
import whiteCurved from "assets/images/curved-images/white-curved.jpeg";

function ComplexStatisticsCard({ image, color, icon, count, percentage, dropdown }) {
  const { size } = typography;

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: gradients[color]
          ? `${linearGradient(
              rgba(gradients[color].main, 0.8),
              rgba(gradients[color].state, 0.8)
            )}, url(${image || whiteCurved})`
          : `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${image || whiteCurved})`,
        backgroundSize: image ? "cover" : "unset",
      })}
    >
      <ArgonBox p={2}>
        <Grid container>
          <Grid item xs={8}>
            <ArgonBox
              width="3rem"
              height="3rem"
              bgColor="white"
              borderRadius="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color={color}
              shadow="md"
              fontSize={size.xl}
            >
              <Icon
                sx={{
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    gradients[color]
                      ? linearGradient(gradients[color].main, gradients[color].state)
                      : linearGradient(gradients.dark.main, gradients.dark.state),
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {icon}
              </Icon>
            </ArgonBox>
            <ArgonBox mt={2} lineHeight={0}>
              <ArgonTypography variant="h5" fontWeight="bold" color="white">
                {count.number}
              </ArgonTypography>
              <ArgonTypography
                variant="button"
                fontWeight="regular"
                color="white"
                textTransform="capitalize"
              >
                {count.label}
              </ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={4}>
            <ArgonBox textAlign="right">
              {dropdown && (
                <ArgonBox mb={7} lineHeight={1} color="white">
                  <Icon fontSize="default" onClick={dropdown.action} sx={{ cursor: "pointer" }}>
                    more_horiz
                  </Icon>
                  {dropdown.menu}
                </ArgonBox>
              )}
              <ArgonTypography variant="button" fontWeight="bold" color="white" align="right">
                {percentage}
              </ArgonTypography>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  image: "",
  color: "dark",
  dropdown: false,
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  image: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  count: PropTypes.shape({
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  percentage: PropTypes.string.isRequired,
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ComplexStatisticsCard;
