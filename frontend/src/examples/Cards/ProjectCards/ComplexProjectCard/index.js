 

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Custom styles for ComplexProjectCard
function ComplexProjectCard({ color, image, title, dateTime, description, members, dropdown }) {
  const renderMembers = members.map((member, key) => {
    const memberKey = `member-${key}`;

    return (
      <ArgonAvatar
        key={memberKey}
        src={member}
        alt="member profile"
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    );
  });

  return (
    <Card>
      <ArgonBox p={2}>
        <ArgonBox display="flex" alignItems="center">
          <ArgonAvatar
            src={image}
            alt={title}
            size="xl"
            variant="rounded"
            bgColor={color}
            sx={{ p: 1 }}
          />
          <ArgonBox ml={2} lineHeight={0}>
            <ArgonBox mb={1} lineHeight={0}>
              <ArgonTypography variant="h6" textTransform="capitalize" fontWeight="medium">
                {title}
              </ArgonTypography>
            </ArgonBox>
            {members.length > -1 ? <ArgonBox display="flex">{renderMembers}</ArgonBox> : null}
          </ArgonBox>
          {dropdown && (
            <ArgonTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                ml: "auto",
                alignSelf: "flex-start",
                py: 1.25,
              }}
            >
              <Icon fontSize="default" sx={{ cursor: "pointer" }}>
                more_vert
              </Icon>
            </ArgonTypography>
          )}
          {dropdown.menu}
        </ArgonBox>
        <ArgonBox my={2} lineHeight={1}>
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            {description}
          </ArgonTypography>
        </ArgonBox>
        <Divider />
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
          {members.length > -1 ? (
            <ArgonBox display="flex" flexDirection="column" lineHeight={0}>
              <ArgonTypography variant="button" fontWeight="medium">
                {members.length}
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="medium" color="secondary">
                Participants
              </ArgonTypography>
            </ArgonBox>
          ) : null}
          {dateTime ? (
            <ArgonBox display="flex" flexDirection="column" lineHeight={0}>
              <ArgonTypography variant="button" fontWeight="medium">
                {dateTime}
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="medium" color="secondary">
                Due date
              </ArgonTypography>
            </ArgonBox>
          ) : null}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of ComplexProjectCard
ComplexProjectCard.defaultProps = {
  color: "dark",
  dateTime: "",
  members: [],
  dropdown: false,
};

// Typechecking props for the ProfileInfoCard
ComplexProjectCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.string),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ComplexProjectCard;
