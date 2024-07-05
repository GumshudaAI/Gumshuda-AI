import { Fragment } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Data
const data = [
  { title: "Host Backend", time: "09:30 AM", checked: true },
  { title: "Complete Frontend", time: "11:00 AM", checked: false },
  { title: "Find/Create Sample Dataset", time: "02:00 PM", checked: false },
  { title: "Launch Gumshuda AI v1.0.0", time: "10:30 AM", checked: true },
];

function TodoList() {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <ArgonBox p={3}>
        <ArgonTypography variant="h5" textTransform="capitalize">
          To Do List
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pb={3} px={3} my="auto">
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          m={0}
          p={0}
          sx={{ listStyle: "none" }}
        >
          {data.map(({ title, time, checked }, key) => (
            <Fragment key={key}>
              <ArgonBox
                component="li"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py={1}
              >
                <ArgonBox lineHeight={1}>
                  <ArgonTypography variant="h6">{title}</ArgonTypography>
                  <ArgonTypography variant="caption">{time}</ArgonTypography>
                </ArgonBox>
                <Checkbox defaultChecked={checked} />
              </ArgonBox>
              {key !== data.length - 1 && (
                <ArgonBox
                  component="hr"
                  sx={({ palette: { grey } }) => ({
                    borderTop: `1px solid ${grey[300]}`,
                    borderBottom: 0,
                  })}
                />
              )}
            </Fragment>
          ))}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default TodoList;
