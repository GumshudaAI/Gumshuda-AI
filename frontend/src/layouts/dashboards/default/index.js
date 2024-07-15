/* eslint-disable no-unused-vars */
/* eslint-disable   */

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

import typography from "assets/theme/base/typography";

// Dashboard layout components

import TeamMembers from "layouts/dashboards/default/components/TeamMembers";
import TodoList from "layouts/dashboards/default/components/TodoList";
import BalanceCard from "layouts/dashboards/default/components/BalanceCard";
import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";

function Default() {
  const { size } = typography;

  const descriptionText = (
    <div>
      <p>
        <strong>🚀 Generative AI App for Lost and Found Belongings</strong>
      </p>
      <p>
        Using Open AI's clip-vit-large model, this app creates image embeddings and searches them
        using natural language, powered by a vector database.
      </p>

      <p>
        <strong>🎯 Objective:</strong>
      </p>
      <p>
        Our innovative application aims to revolutionize and streamline the process of locating and
        reuniting lost objects with their rightful owners. The current system, characterized by
        delayed response times, limited reporting options, and inefficient communication among
        authorities, often leaves individuals in distress with no viable means to track their
        missing possessions.
      </p>

      <p>
        <strong>IMPORTANT:</strong>
      </p>

      <p>
        <strong>What is Gumshuda AI?</strong>
      </p>
      <p>🧠 It's a Generative AI-powered platform for Lost and Found belongings.</p>

      <p>
        <strong>How can I use it?</strong>
      </p>
      <p>
        📦 Due to resource constraints, it's not hosted/deployed to a service yet. We hope to
        achieve it soon.
      </p>

      <p>
        <strong>Where is the GitHub repository for it?</strong>
      </p>
      <p>
        💻 There is some pending code cleaning going on before the project is made open source for
        everyone to contribute and use.
      </p>

      <p>
        <strong>How does it work?</strong>
      </p>
      <p>
        🛠️ It uses the clip-vit-large model to create a combination of sparse and dense vector
        embeddings and stores them in a vector database (in my case- pinecone). It utilizes the KNN
        (K-Nearest Neighbour) to find the closest matching vectors and returns the results
        accordingly.
      </p>

      <p>
        <strong>What is Talaash AI?</strong>
      </p>
      <p>🔄 It's the previous name/version of Gumshuda AI.</p>
    </div>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <PowerBox py={3}>
        <Grid container item mb={5} xs={12} lg={9} spacing={3}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} md={7}>
              <BalanceCard
                route="/search-lost-item"
                buttonTitle="Search!"
                subtitle="Search for your lost items!"
                title="Search for a lost item"
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <BalanceCard
                route="/post-found-item"
                buttonTitle="Post!"
                subtitle="If you found a stranded item, post it here!"
                title="Post a found Item"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Last 24 Hours Activity Overview"
              description={
                <PowerBox display="flex" alignItems="center">
                  <PowerBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </PowerBox>
                  <PowerTypography variant="button" color="text" fontWeight="medium">
                    94% more{" "}
                    <PowerTypography variant="button" color="text" fontWeight="regular">
                      in July 2024
                    </PowerTypography>
                  </PowerTypography>
                </PowerBox>
              }
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid container spacing={3} m={2}>
            <Grid item xs={12} md={6} lg={4}>
              <TeamMembers />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TodoList />
            </Grid>
          </Grid>
        </Grid>
        <PowerBox py={3}>
          <PowerTypography variant="h4" fontWeight="bold" gutterBottom>
            About Gumshuda AI
          </PowerTypography>
          <PowerTypography variant="body1" color="text" fontWeight="regular" gutterBottom>
            {descriptionText}
          </PowerTypography>
        </PowerBox>
      </PowerBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
