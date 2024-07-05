 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function RankingList({ title, date, rankings }) {
  const renderRankings = rankings.map(({ color, icon, name, description, value }, key) => (
    <ArgonBox key={name} component="li" pt={1} pr={2}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonButton
              variant="outlined"
              color={color}
              size="small"
              iconOnly
              circular
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(34),
                minWidth: pxToRem(34),
                height: pxToRem(34),
                minHeight: pxToRem(34),
              })}
            >
              <Icon>{icon}</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              {description}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonTypography variant="button" color={color} fontWeight="medium" textGradient>
          {value}
        </ArgonTypography>
      </ArgonBox>
      {key === rankings.length - 1 ? null : (
        <Divider
          sx={{
            mt: 2,
            mb: 1,
          }}
        />
      )}
    </ArgonBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </ArgonTypography>
        <ArgonTypography
          variant="button"
          color="text"
          fontWeight="regular"
          sx={{ display: "flex" }}
        >
          <Icon
            color="inherit"
            fontSize="small"
            sx={{
              mr: 0.75,
              mt: -0.125,
            }}
          >
            date_range
          </Icon>
          {date}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {renderRankings}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Typechecking props for the RankingList
RankingList.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rankings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RankingList;
