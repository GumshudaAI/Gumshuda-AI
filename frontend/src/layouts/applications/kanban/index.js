 

import { useState } from "react";

// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";

// html-react-parser components
import parse from "html-react-parser";
// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

// Kanban application components
import Header from "layouts/applications/kanban/components/Header";

// Data
import boards from "layouts/applications/kanban/data";

function Kanban() {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState("");

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox display="flex" justifyContent="flex-end" m={2}>
          <Header />
        </ArgonBox>
        <ArgonBox
          position="relative"
          my={4}
          sx={({
            palette: { light, background },
            functions: { pxToRem },
            borders: { borderRadius },
          }) => ({
            "& .react-kanban-column": {
              backgroundColor: darkMode ? background.dark : light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          <Board
            initialBoard={boards}
            allowAddCard
            allowAddColumn
            renderColumnHeader={({ id, title }, { addCard }) => (
              <>
                <ArgonBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <ArgonTypography variant="h6">{title}</ArgonTypography>
                  <ArgonButton
                    size="small"
                    variant={darkMode ? "outlined" : "contained"}
                    onClick={(event) => openNewCardForm(event, id)}
                  >
                    <Icon
                      sx={{
                        fontWeight: "bold",
                        color: ({ palette: { dark, white } }) =>
                          darkMode ? white.main : dark.main,
                      }}
                    >
                      add
                    </Icon>
                  </ArgonButton>
                </ArgonBox>
                {newCardForm === id ? (
                  <ArgonBox my={2.5}>
                    <ArgonInput
                      value={formValue}
                      inputProps={{ rows: 2 }}
                      onChange={handeSetFormValue}
                      multiline
                    />
                    <ArgonBox display="flex" mt={2}>
                      <ArgonButton
                        variant="gradient"
                        color="success"
                        size="small"
                        onClick={() => {
                          addCard({ id: uuidv4(), template: formValue });
                          setFormValue("");
                        }}
                      >
                        add
                      </ArgonButton>
                      <ArgonBox ml={1}>
                        <ArgonButton
                          variant="gradient"
                          color="light"
                          size="small"
                          onClick={closeNewCardForm}
                        >
                          cancel
                        </ArgonButton>
                      </ArgonBox>
                    </ArgonBox>
                  </ArgonBox>
                ) : null}
              </>
            )}
            renderCard={({ id, template }, { dragging }) => (
              <ArgonBox
                key={id}
                dragging={dragging.toString() || undefined}
                display="block"
                width="calc(450px - 40px)"
                color="text"
                borderRadius="md"
                mt={2.5}
                py={1.875}
                px={1.875}
                lineHeight={1.5}
                sx={{
                  backgroundColor: ({ palette: { background, white } }) =>
                    darkMode ? background.default : white.main,
                  fontSize: ({ typography: { size } }) => size.md,
                }}
              >
                {typeof template === "string" ? parse(template) : template}
              </ArgonBox>
            )}
            onCardNew={() => null}
          />
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;
