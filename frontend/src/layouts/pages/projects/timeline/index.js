 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

// Data
import timelineData from "layouts/pages/projects/timeline/data/timelineData";

function Timeline() {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  const renderTimelineItems = timelineData.map(
    ({ color, icon, title, dateTime, description, badges, lastItem }) => (
      <TimelineItem
        key={title + color}
        color={color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        badges={badges}
        lastItem={lastItem}
      />
    )
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TimelineList title="Timeline with dotted line" dark={darkMode}>
              {renderTimelineItems}
            </TimelineList>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TimelineList title="Timeline with dotted line" dark>
              {renderTimelineItems}
            </TimelineList>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Timeline;
