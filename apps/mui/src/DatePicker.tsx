import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker />
    </LocalizationProvider>
  );
}
