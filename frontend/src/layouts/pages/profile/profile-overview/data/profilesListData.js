 

// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const profilesListData = [
  {
    image: kal,
    name: "Sophie B.",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Reply",
    },
  },
  {
    image: marie,
    name: "Anne Marie",
    description: "Awesome work, can you..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Reply",
    },
  },
  {
    image: ivana,
    name: "Ivanna",
    description: "About files I can..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Reply",
    },
  },
  {
    image: team4,
    name: "Peterson",
    description: "Have a great afternoon..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Reply",
    },
  },
  {
    image: team3,
    name: "Nick Daniel",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Reply",
    },
  },
];

export default profilesListData;
