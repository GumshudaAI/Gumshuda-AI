import { Fragment } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

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
      <PowerBox p={3}>
        <PowerTypography variant="h5" textTransform="capitalize">
          To Do List
        </PowerTypography>
      </PowerBox>
      <PowerBox pb={3} px={3} my="auto">
        <PowerBox
          component="ul"
          display="flex"
          flexDirection="column"
          m={0}
          p={0}
          sx={{ listStyle: "none" }}
        >
          {data.map(({ title, time, checked }, key) => (
            <Fragment key={key}>
              <PowerBox
                component="li"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py={1}
              >
                <PowerBox lineHeight={1}>
                  <PowerTypography variant="h6">{title}</PowerTypography>
                  <PowerTypography variant="caption">{time}</PowerTypography>
                </PowerBox>
                <Checkbox defaultChecked={checked} />
              </PowerBox>
              {key !== data.length - 1 && (
                <PowerBox
                  component="hr"
                  sx={({ palette: { grey } }) => ({
                    borderTop: `1px solid ${grey[300]}`,
                    borderBottom: 0,
                  })}
                />
              )}
            </Fragment>
          ))}
        </PowerBox>
      </PowerBox>
    </Card>
  );
}

export default TodoList;
