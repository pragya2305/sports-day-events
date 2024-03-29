import React, { useCallback } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useEventsSlice } from "@redux/slice";
import Alert from "@mui/material/Alert";

const Toast = () => {
  const { toast, setToast } = useEventsSlice();

  const handleClose = useCallback(() => setToast(null), [setToast]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={toast}
      autoHideDuration={6000}
      onClose={() => setToast(null)}
    >
      <Alert
        onClose={handleClose}
        severity={toast?.type}
        variant='filled'
        sx={{ width: "100%" }}
      >
        {toast?.msg}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
