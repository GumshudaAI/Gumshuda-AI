 

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";
import ArgonAvatar from "components/ArgonAvatar";

function TeamProfileCard({ color, title, description, industry, rating, members, dropdown }) {
  const ratings = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_half</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_half</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_half</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_half</Icon>,
    ],
    5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star</Icon>,
    ],
  };

  const renderMembers = members.map(({ image, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <ArgonAvatar
        src={image}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          ml: -1.25,
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card>
      <ArgonBox p={3}>
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <ArgonTypography
            variant="h5"
            fontWeight="medium"
            color={color}
            textTransform="capitalize"
            textGradient
          >
            {title}
          </ArgonTypography>
          {dropdown && (
            <ArgonTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                width: "16px",
                cursor: "pointer",
              }}
            >
              <Icon fontSize="default">more_vert</Icon>
            </ArgonTypography>
          )}
          {dropdown.menu}
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonTypography variant="body2" color="text">
            {description}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {industry ? (
            <ArgonBox component="li" display="flex" flexDirection="column">
              <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
                <ArgonTypography variant="body2" color="text">
                  Industry:
                </ArgonTypography>
                <ArgonBadge
                  variant="contained"
                  color="secondary"
                  size="md"
                  badgeContent={industry}
                  container
                />
              </ArgonBox>
              <Divider />
            </ArgonBox>
          ) : null}
          {rating ? (
            <ArgonBox component="li" display="flex" flexDirection="column">
              <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
                <ArgonTypography variant="body2" color="text">
                  Rating:
                </ArgonTypography>
                <ArgonBox
                  sx={({ functions: { pxToRem }, palette: { text } }) => ({
                    fontSize: pxToRem(24),
                    lineHeight: 0,
                    color: text.main,
                  })}
                >
                  {ratings[rating]}
                </ArgonBox>
              </ArgonBox>
              <Divider />
            </ArgonBox>
          ) : null}
          {members ? (
            <ArgonBox
              component="li"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ArgonTypography variant="body2" color="text">
                Members:
              </ArgonTypography>
              <ArgonBox display="flex">{renderMembers}</ArgonBox>
            </ArgonBox>
          ) : null}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of TeamProfileCard
TeamProfileCard.defaultProps = {
  color: "info",
  industry: "",
  rating: 0,
  members: [],
  dropdown: false,
};

// Typechecking props for the TeamProfileCard
TeamProfileCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  industry: PropTypes.string,
  rating: PropTypes.number,
  members: PropTypes.arrayOf(PropTypes.object),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default TeamProfileCard;
