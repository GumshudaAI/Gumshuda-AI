// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";

function Footer({ company, links }) {
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <PowerBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <PowerTypography variant="button" fontWeight="regular" color="text">
            {link.name}
          </PowerTypography>
        </Link>
      </PowerBox>
    ));

  return (
    <PowerBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <PowerBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, made with
        <PowerBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </PowerBox>
        by
        <Link href={href} target="_blank">
          <PowerTypography variant="button" fontWeight="medium">
            &nbsp;{name}&nbsp;
          </PowerTypography>
        </Link>
        | On to the next one 🥂
      </PowerBox>
      <PowerBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        {renderLinks()}
      </PowerBox>
    </PowerBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  company: { href: "https://x.com/whynesspower", name: "Yashraj Shukla" },
  links: [
    { href: "https://www.linkedin.com/in/whynesspower/", name: "Yashraj Shukla" },
    { href: "https://x.com/whynesspower", name: "About Us" },
    { href: "https://x.com/whynesspower", name: "Blog" },
    { href: "https://x.com/whynesspower", name: "License" },
  ],
};

Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
