 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Timeline context
import { TimelineProvider } from "examples/Timeline/context";

function TimelineList({ title, dark, children }) {
  return (
    <TimelineProvider value={dark}>
      <Card>
        <ArgonBox bgColor={dark ? "dark" : "white"} variant="gradient">
          <ArgonBox pt={3} px={3}>
            <ArgonTypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox p={2}>{children}</ArgonBox>
        </ArgonBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TimelineList;
