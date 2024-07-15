import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DetailsModal = ({ open, handleClose, item }) => {
  if (!item) {
    return null; // Don't render the modal if item is null
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {item.metadata.name}
        </Typography>
        <Typography sx={{ mt: 2 }}>Description: {item.metadata.description}</Typography>
        <Typography sx={{ mt: 2 }}>City: {item.metadata.city}</Typography>
        <Typography sx={{ mt: 2 }}>Date: {item.metadata.date}</Typography>
        <Typography sx={{ mt: 2 }}>Item ID: {item.id}</Typography>

        <img
          src={item.metadata.style_image}
          alt={item.metadata.name}
          style={{ width: "100%", height: "auto", marginTop: "16px" }}
        />
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSdv4_7tAXWjtUd0OUHKjLngpuMNIc1DBl9lT4nbucQ2uFw65g/viewform?usp=sf_link"
          target="_blank"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          <span style={{ color: "white" }}>Claim Item!</span>
        </Button>
      </Box>
    </Modal>
  );
};

export default DetailsModal;
