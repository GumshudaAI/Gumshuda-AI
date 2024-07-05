 

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function TransparentBlogCard({ image, title, description, action }) {
  const cardImageStyles = {
    width: "100%",
    height: "auto",
    minHeight: ({ functions: { pxToRem } }) => pxToRem(235),
    margin: 0,
    boxShadow: ({ boxShadows: { md } }) => md,
    transformOrigin: "50% 0",
    transform: `perspective(999px) rotateX(0deg) translateZ(0)`,
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    willChange: "transform, box-shadow",
    transition: ({ transitions }) =>
      transitions.create("transform", {
        easing: transitions.easing.easeIn,
        duration: transitions.duration.shorter,
      }),

    "&:hover": {
      transform: `perspective(999px) rotateX(7deg) translate3d(0, -4px, 5px)`,
    },
  };

  const cardActionStyles = {
    display: "inline-block",
    textDecoration: "none",

    "& .MuiTypography-root": {
      display: "flex",
      alignItems: "center",
    },

    "& .material-icons, .material-icons-round,": {
      fontSize: "1.125rem",
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {action.type === "internal" ? (
        <Link to={action.route}>
          <CardMedia src={image} component="img" title={title} sx={cardImageStyles} />
        </Link>
      ) : (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          <CardMedia src={image} component="img" title={title} sx={cardImageStyles} />
        </MuiLink>
      )}
      <ArgonBox py={3}>
        {action.type === "internal" ? (
          <Link to={action.route} sx={cardActionStyles}>
            <ArgonTypography variant="h5" gutterBottom>
              {title}
            </ArgonTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer" sx={cardActionStyles}>
            <ArgonTypography variant="h5" gutterBottom>
              {title}
            </ArgonTypography>
          </MuiLink>
        )}
        <ArgonBox mb={2}>
          <ArgonTypography variant="body2" component="p" color="text">
            {description}
          </ArgonTypography>
        </ArgonBox>
        {action.type === "internal" ? (
          <Link to={action.route} sx={cardActionStyles}>
            <ArgonTypography
              variant="body2"
              color={action.color}
              textTransform="capitalize"
              component="span"
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </ArgonTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer" sx={cardActionStyles}>
            <ArgonTypography
              variant="body2"
              color={action.color}
              textTransform="capitalize"
              component="span"
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </ArgonTypography>
          </MuiLink>
        )}
      </ArgonBox>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
    ]).isRequired,
  }).isRequired,
};

export default TransparentBlogCard;
