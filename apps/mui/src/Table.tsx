import { DataGrid } from "@mui/x-data-grid";

const data = [
  { name: "Alan", percent: 20, id: 1 },
  { name: "Bryan", percent: 30, id: 2 },
  { name: "Chris", percent: 40, id: 3 },
  { name: "Eric", percent: 80, id: 4 },
];
const columns = [
  {
    field: "name",
  },
  {
    field: "percent",
  },
];

export default function Table() {
  return (
    <DataGrid autoHeight checkboxSelection columns={columns} rows={data} />
  );
}
