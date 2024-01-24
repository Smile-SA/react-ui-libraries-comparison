import React from "react";
import ReactDOM from "react-dom/client";

import DatePicker from "./DatePicker";
import Table from "./Table";
import Toast from "./Toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DatePicker />
    <Table/>
    <Toast/>
  </React.StrictMode>
);
