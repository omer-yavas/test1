import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
const NotificationButton = () => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Değişiklikleriniz kaydedildi.
      </Alert>
    </Snackbar>
  );
};

export default NotificationButton;
