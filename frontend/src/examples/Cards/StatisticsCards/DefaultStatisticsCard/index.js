 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function DefaultStatisticsCard({ title, count, percentage, dropdown }) {
  return (
    <Card>
      <ArgonBox p={2}>
        <Grid container>
          <Grid item xs={7}>
            <ArgonBox mb={0.5} lineHeight={1}>
              <ArgonTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {title}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox lineHeight={1}>
              <ArgonTypography variant="h5" fontWeight="bold">
                {count}
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="bold" color={percentage.color}>
                {percentage.value}&nbsp;
                <ArgonTypography variant="button" fontWeight="regular" color="secondary">
                  {percentage.label}
                </ArgonTypography>
              </ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={5}>
            {dropdown && (
              <ArgonBox width="100%" textAlign="right" lineHeight={1}>
                <ArgonTypography
                  variant="caption"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                  onClick={dropdown.action}
                >
                  {dropdown.value}
                </ArgonTypography>
                {dropdown.menu}
              </ArgonBox>
            )}
          </Grid>
        </Grid>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of DefaultStatisticsCard
DefaultStatisticsCard.defaultProps = {
  percentage: {
    color: "success",
    value: "",
    label: "",
  },
  dropdown: false,
};

// Typechecking props for the DefaultStatisticsCard
DefaultStatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
      value: PropTypes.string,
    }),
  ]),
};

export default DefaultStatisticsCard;
