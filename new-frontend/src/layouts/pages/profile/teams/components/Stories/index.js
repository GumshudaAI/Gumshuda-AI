 

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Gumshuda AI MUI data variables
import storiesData from "layouts/pages/profile/teams/components/Stories/data/storiesData";

function Stories() {
  const { borderWidth } = borders;

  const renderStories = storiesData.map(({ image, name, color }) => (
    <Grid key={name} item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
      <ArgonBox
        borderRadius="50%"
        width="3.625rem"
        height="3.625rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        mx="auto"
        border={`${borderWidth[1]} solid ${colors[color].main}`}
        sx={{ cursor: "pointer" }}
      >
        <ArgonAvatar src={image} alt={name} />
      </ArgonBox>
      <ArgonBox mt={0.75} textAlign="center" lineHeight={1}>
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          {name}
        </ArgonTypography>
      </ArgonBox>
    </Grid>
  ));

  return (
    <Card sx={{ overflow: "scroll" }}>
      <ArgonBox width="100%" pt={3} pb={2.5} px={3}>
        <Grid container justifyContent="space-between" wrap="nowrap">
          <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
            <ArgonBox
              bgColor="info"
              borderRadius="50%"
              width="3.625rem"
              height="3.625rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mx="auto"
              variant="gradient"
              sx={{ cursor: "pointer" }}
            >
              <Icon fontSize="small">add</Icon>
            </ArgonBox>
            <ArgonBox mt={0.75} textAlign="center" lineHeight={1}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Add story
              </ArgonTypography>
            </ArgonBox>
          </Grid>
          {renderStories}
        </Grid>
      </ArgonBox>
    </Card>
  );
}

export default Stories;
