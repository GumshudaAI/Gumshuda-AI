 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

function ComplexReportsDoughnutChartItem({ image, title, percentage, hasBorder }) {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={({ borders: { borderWidth }, palette: { light } }) => ({
        borderBottom: hasBorder ? `${borderWidth[1]} solid ${light.main}` : 0,
      })}
    >
      <Grid item xs={10}>
        <ArgonBox display="flex" py={1.5} px={2}>
          {image && (
            <ArgonBox mr={1}>
              <ArgonAvatar src={image} size="sm" alt="title" />
            </ArgonBox>
          )}
          <ArgonBox display="flex" flexDirection="column" justifyContent="center">
            <ArgonTypography
              component="div"
              variant="button"
              textTransform="capitalize"
              fontWeight="medium"
            >
              {title}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      </Grid>
      <Grid item xs={2}>
        <ArgonBox py={0.8} px={1} textAlign="center">
          <ArgonTypography variant="caption" color="text" fontWeight="medium">
            {percentage}
          </ArgonTypography>
        </ArgonBox>
      </Grid>
    </Grid>
  );
}

// Setting default values for the props of ComplexReportsDoughnutChartItem
ComplexReportsDoughnutChartItem.defaultProps = {
  image: "",
  hasBorder: false,
};

// Typechecking props for the ComplexReportsDoughnutChartItem
ComplexReportsDoughnutChartItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

export default ComplexReportsDoughnutChartItem;
