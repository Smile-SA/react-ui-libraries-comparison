import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function ToastButton() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Notification content");
  };

  return (
    <Button onClick={handleClick}>Show notification</Button>
  );
}

export default function Toast() {
  return (
    <SnackbarProvider maxSnack={3}>
      <ToastButton/>
    </SnackbarProvider>
  );
}
