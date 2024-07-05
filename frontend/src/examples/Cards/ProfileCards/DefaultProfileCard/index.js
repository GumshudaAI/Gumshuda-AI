 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";

function DefaultProfileCard({ image, name, position, description, social }) {
  const { socialMediaColors } = colors;

  // Render the social media icons
  const renderSocial = social.map(({ link, icon, color }, key) => (
    <ArgonBox
      key={color}
      component={Link}
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize="1.375rem"
      color={socialMediaColors[color].main}
      py={2}
      pr={2}
      pl={key === 0 ? 0 : 2}
      lineHeight={1}
    >
      {icon}
    </ArgonBox>
  ));

  return (
    <ArgonBox>
      <ArgonAvatar src={image} alt={name} size="xxl" shadow="xl" variant="rounded" />
      <ArgonBox py={2.5} pr={4}>
        <ArgonTypography variant="h5">{name}</ArgonTypography>
        <ArgonTypography variant="body2" color="text">
          {position}
        </ArgonTypography>
        {description && (
          <ArgonBox my={2}>
            <ArgonTypography variant="body2" color="text">
              {description}
            </ArgonTypography>
          </ArgonBox>
        )}
        <ArgonBox display="flex">{renderSocial}</ArgonBox>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default props for the DefaultProfileCard
DefaultProfileCard.defaultProps = {
  description: "",
  social: [{}],
};

// Typechecking props for the DefaultProfileCard
DefaultProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string,
  social: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProfileCard;
