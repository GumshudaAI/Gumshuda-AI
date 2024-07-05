 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonBadge from "components/ArgonBadge";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonProgress from "components/ArgonProgress";

// Custom styles for the Card

function Card({ image, badge, content, progress, attachedFiles, members }) {
  const renderMembers = members.map((member, key) => {
    const imageAlt = `image-${key}`;

    return (
      <ArgonAvatar
        key={imageAlt}
        src={member}
        alt={imageAlt}
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    );
  });

  return (
    <>
      {image && <ArgonBox component="img" src={image} width="100%" borderRadius="sm" mb={1} />}
      <ArgonBadge size="xs" color={badge.color} badgeContent={badge.label} container />
      <ArgonBox mt={1} mb={2}>
        <ArgonTypography variant="body2" color="text">
          {content}
        </ArgonTypography>
        {progress > 0 && (
          <ArgonBox mt={0.25}>
            <ArgonProgress
              variant="gradient"
              value={progress}
              color={badge.color}
              sx={{ height: "8px" }}
            />
          </ArgonBox>
        )}
      </ArgonBox>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center" color="text">
          {attachedFiles && (
            <>
              <ArgonTypography variant="body2" color="text" sx={{ lineHeight: 0 }}>
                <Icon sx={{ fontWeight: "bold" }}>attach_file</Icon>
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                &nbsp;{attachedFiles}
              </ArgonTypography>
            </>
          )}
        </ArgonBox>
        <ArgonBox display="flex">{renderMembers}</ArgonBox>
      </ArgonBox>
    </>
  );
}

// Setting default props for the Card
Card.defaultProps = {
  image: "",
  progress: 0,
  attachedFiles: "",
};

// Typechecking props for the Card
Card.propTypes = {
  image: PropTypes.string,
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.node.isRequired,
  progress: PropTypes.number,
  attachedFiles: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
