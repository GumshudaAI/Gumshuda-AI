 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";

function ComplexProfileCard({ image, name, position, description, social }) {
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
      py={1.5}
      pr={1.5}
      pl={key === 0 ? 0 : 1.5}
      lineHeight={1}
    >
      {icon}
    </ArgonBox>
  ));

  return (
    <ArgonBox width="100%" height="100%" display="flex" alignItems="center">
      <ArgonBox width="40%" height="100%">
        <ArgonBox
          component="img"
          src={image}
          alt={name}
          shadow="lg"
          borderRadius="lg"
          width="100%"
          height="100%"
          sx={{ objectFit: "cover" }}
        />
      </ArgonBox>
      <ArgonBox width="60%" py={2.5} px={4}>
        <ArgonBox mb={1} lineHeight={1}>
          <ArgonTypography variant="h5" fontWeight="bold">
            {name}
          </ArgonTypography>
          <ArgonTypography
            variant="button"
            color="text"
            textTransform="uppercase"
            fontWeight="medium"
          >
            {position}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={3}>
          <ArgonTypography variant="body2" color="text">
            {description}
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox display="flex">{renderSocial}</ArgonBox>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default props for the ComplexProfileCard
ComplexProfileCard.defaultProps = {
  description: "",
  social: [{}],
};

// Typechecking props for the ComplexProfileCard
ComplexProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string,
  social: PropTypes.arrayOf(PropTypes.object),
};

export default ComplexProfileCard;
