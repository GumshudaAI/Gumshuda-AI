 

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonBadgeDot from "components/ArgonBadgeDot";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

const tableData = {
  columns: [
    { name: "name", align: "left" },
    { name: "function", align: "left" },
    { name: "review", align: "left" },
    { name: "email", align: "center" },
    { name: "employed", align: "center" },
    { name: "id", align: "center" },
  ],

  rows: [
    {
      name: [team2, "John Micheal"],
      function: "Manager",
      review: (
        <ArgonBox ml={-1.325}>
          <ArgonBadgeDot size="xs" badgeContent="positive" />
        </ArgonBox>
      ),
      email: "john@user.com",
      employed: "23/04/18",
      id: "43431",
    },
    {
      name: [team3, "Alexa Liras"],
      function: "Programator",
      review: (
        <ArgonBox ml={-1.325}>
          <ArgonBadgeDot size="xs" badgeContent="positive" />
        </ArgonBox>
      ),
      email: "alexa@user.com",
      employed: "11/01/19",
      id: "93021",
    },
    {
      name: [team1, "Laurent Perrier"],
      function: "Executive",
      review: (
        <ArgonBox ml={-1.325}>
          <ArgonBadgeDot color="dark" size="xs" badgeContent="neutral" />
        </ArgonBox>
      ),
      email: "laurent@user.com",
      employed: "19/09/17",
      id: "10392",
    },
    {
      name: [team3, "Michael Levi"],
      function: "Backend Developer",
      review: (
        <ArgonBox ml={-1.325}>
          <ArgonBadgeDot size="xs" badgeContent="positive" />
        </ArgonBox>
      ),
      email: "michael@user.com",
      employed: "24/12/08",
      id: "34002",
    },
    {
      name: [team2, "Richard Gran"],
      function: "Manager",
      review: (
        <ArgonBox ml={-1.325}>
          <ArgonBadgeDot color="error" size="xs" badgeContent="negative" />
        </ArgonBox>
      ),
      email: "richard@user.com",
      employed: "04/10/21",
      id: "91879",
    },
    {
      name: [team3, "Miriam Eric"],
      function: "Programtor",
      review: (
        <ArgonBox ml={-1.325}>
          <ArgonBadgeDot size="xs" badgeContent="positive" />
        </ArgonBox>
      ),
      email: "miriam@user.com",
      employed: "14/09/20",
      id: "23042",
    },
  ],
};

export default tableData;
