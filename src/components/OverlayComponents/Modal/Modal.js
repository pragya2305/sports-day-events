import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEventsSlice } from "@redux/slice";

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

const AppModal = () => {
  const { modal, setModal } = useEventsSlice();
  const handleClose = useCallback(() => {
    setModal(null);
  }, [setModal]);

  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {modal?.title && (
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {modal?.title}
          </Typography>
        )}
        <Typography id='modal-modal-description' sx={{ mt: 2, mb: 2 }}>
          {modal?.content}
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleClose} mr={0}>
            OK
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AppModal;
