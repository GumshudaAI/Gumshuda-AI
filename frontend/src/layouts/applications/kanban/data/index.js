 

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// Kanban application components
import Card from "layouts/applications/kanban/components/Card";

// Images
import officeDark from "assets/images/office-dark.jpg";
import meeting from "assets/images/meeting.jpg";
import homeDecore from "assets/images/home-decor-1.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

const boards = {
  columns: [
    {
      id: uuidv4(),
      title: "Backlog",
      cards: [
        {
          id: uuidv4(),
          template: "Change me to change title",
        },
        {
          id: uuidv4(),
          template: "Drag me to 'In progress' section",
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={officeDark}
              badge={{ color: "dark", label: "pending" }}
              content="Website Design: New cards for blog section and profile details"
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "In progress",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "error", label: "errors" }}
              content="Fix firefox errors"
              attachedFiles={9}
              members={[team2, team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "info", label: "updates" }}
              content="Argon Dashboard PRO - React"
              attachedFiles={3}
              members={[team5, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={meeting}
              badge={{ color: "info", label: "updates" }}
              content="ReactJS v17 Updates"
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "In review",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "warning", label: "in testing" }}
              content="Responsive Changes"
              attachedFiles={11}
              members={[team3, team2]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "success", label: "in review" }}
              content="Change images dimension"
              progress={80}
              members={[team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "info", label: "in review" }}
              content="Update links"
              progress={60}
              attachedFiles={6}
              members={[team5, team1]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Done",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              image={homeDecore}
              badge={{ color: "success", label: "done" }}
              content="Redesign for the home page"
              attachedFiles={8}
              members={[team5, team1, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "success", label: "done" }}
              content="Schedule winter campaign"
              attachedFiles={2}
              members={[team1, team4]}
            />
          ),
        },
      ],
    },
  ],
};

export default boards;
