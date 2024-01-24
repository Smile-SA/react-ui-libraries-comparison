import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import DatePicker from "./DatePicker";
import Table from "./Table";
import Toast from "./Toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <DatePicker />
      <Table/>
      <Toast/>
    </PrimeReactProvider>
  </React.StrictMode>
);
