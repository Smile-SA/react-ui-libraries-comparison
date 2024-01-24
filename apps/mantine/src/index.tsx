import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import DatePicker from "./DatePicker";
import Table from "./Table";
import Toast from "./Toast";

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <DatePicker />
      <Table />
      <Toast />
    </MantineProvider>
  </React.StrictMode>
);
