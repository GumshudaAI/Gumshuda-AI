 

// Image
import adobeXD from "assets/images/small-logos/logo-xd.svg";
import atlassian from "assets/images/small-logos/logo-atlassian.svg";
import slack from "assets/images/small-logos/logo-slack.svg";
import spotify from "assets/images/small-logos/logo-spotify.svg";
import jira from "assets/images/small-logos/logo-jira.svg";

const complexReportsDoughnutChartData = {
  images: [adobeXD, atlassian, slack, spotify, jira],
  labels: ["Adobe XD", "Atlassian", "Slack", "Spotify", "Jira"],
  datasets: {
    label: "Referrals",
    backgroundColors: ["primary", "info", "warning", "success", "dark"],
    data: [25, 3, 12, 7, 10],
  },
};

export default complexReportsDoughnutChartData;
