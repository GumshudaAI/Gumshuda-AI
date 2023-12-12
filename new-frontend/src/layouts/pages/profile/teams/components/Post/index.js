 

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";

// Gumshuda AI MUI base styles
import borders from "assets/theme/base/borders";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import bruceMars from "assets/images/bruce-mars.jpg";
const acticityFeed =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/activity-feed.jpg";

function Post() {
  const { borderWidth, borderColor } = borders;

  const [comments] = useState([
    {
      image: bruceMars,
      name: "michael lewis",
      text: "I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves!",
      like: 3,
      share: 2,
    },
    {
      image: team5,
      name: "jessica stones",
      text: "Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible to get a pure thought out. It's like a little kid, a little boy.",
      like: 10,
      share: 1,
    },
  ]);

  const renderComments = comments.map(({ image, name, text, like, share }, key) => (
    <ArgonBox key={name} display="flex" mt={key === 0 ? 0 : 3}>
      <ArgonBox flexShrink={0}>
        <ArgonAvatar src={image} alt={name} />
      </ArgonBox>
      <ArgonBox flexGrow={1} ml={2}>
        <ArgonTypography variant="h5" fontWeight="medium" textTransform="capitalize">
          {name}
        </ArgonTypography>
        <ArgonBox mt={1} mb={2} lineHeight={0.75}>
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            {text}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox display="flex" flexWrap="wrap" alignItems="center">
          <ArgonBox display="flex" alignItems="center" mr={1}>
            <ArgonTypography component="a" href="#" variant="body2" color="text">
              <Icon>thumb_up</Icon>&nbsp;
            </ArgonTypography>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              {like} likes
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox display="flex" alignItems="center">
            <ArgonTypography component="a" href="#" variant="body2" color="text">
              <Icon>share</Icon>&nbsp;
            </ArgonTypography>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              {share} shares
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </ArgonBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", sm: "row" }}
        borderBottom={`${borderWidth[1]} solid ${borderColor}`}
        py={2}
        px={3}
      >
        <ArgonAvatar src={team4} alt="profile-image" variant="rounded" />
        <ArgonBox mx={2} lineHeight={1}>
          <ArgonTypography component="a" href="#" variant="button" fontWeight="regular">
            John Snow
          </ArgonTypography>
          <ArgonTypography component="div" variant="button" color="text" fontWeight="regular">
            3 days ago
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox ml={{ xs: 0, sm: "auto" }} mt={{ xs: 2, sm: 0 }}>
          <ArgonButton
            color="info"
            size="small"
            sx={{
              px: 2,
            }}
          >
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp; Follow
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox p={3}>
        <ArgonBox mb={3}>
          <ArgonTypography variant="body2" color="text">
            Personal profiles are the perfect way for you to grab their attention and persuade
            recruiters to continue reading your CV because you&apos;re telling them from the off
            exactly why they should hire you.
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox component="img" src={acticityFeed} shadow="md" borderRadius="xl" width="100%" />
        <ArgonBox mt={3} mb={1} px={1}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6}>
              <ArgonBox display="flex" alignItems="center">
                <ArgonBox display="flex" alignItems="center" mr={2}>
                  <ArgonTypography component="a" href="#" variant="body2" color="text">
                    <Icon>thumb_up</Icon>&nbsp;
                  </ArgonTypography>
                  <ArgonTypography variant="button" fontWeight="regular" color="text">
                    150
                  </ArgonTypography>
                </ArgonBox>
                <ArgonBox display="flex" alignItems="center" mr={2}>
                  <ArgonTypography component="a" href="#" variant="body2" color="text">
                    <Icon>mode_comment</Icon>&nbsp;
                  </ArgonTypography>
                  <ArgonTypography variant="button" fontWeight="regular" color="text">
                    36
                  </ArgonTypography>
                </ArgonBox>
                <ArgonBox display="flex" alignItems="center" mr={2}>
                  <ArgonTypography component="a" href="#" variant="body2" color="text">
                    <Icon>share</Icon>&nbsp;
                  </ArgonTypography>
                  <ArgonTypography variant="button" fontWeight="regular" color="text">
                    12
                  </ArgonTypography>
                </ArgonBox>
              </ArgonBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ArgonBox
                display={{ xs: "none", sm: "flex" }}
                justifyContent="flex-end"
                alignItems="center"
                width="100%"
              >
                <ArgonAvatar src={team5} alt="person 1" size="xs" />
                <ArgonAvatar src={team2} alt="person 2" size="xs" />
                <ArgonAvatar src={team1} alt="person 3" size="xs" />
                <ArgonBox pl={1}>
                  <ArgonTypography variant="button" color="text" fontWeight="medium">
                    and 30+ more
                  </ArgonTypography>
                </ArgonBox>
              </ArgonBox>
            </Grid>
          </Grid>
          <Divider />
          {renderComments}
          <ArgonBox display="flex" alignItems="center" mt={3}>
            <ArgonBox flexShrink={0} mr={2}>
              <ArgonAvatar src={team4} alt="profile picture" />
            </ArgonBox>
            <ArgonBox flexGrow={1}>
              <ArgonInput placeholder="Write your comment" multiline />
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Post;
