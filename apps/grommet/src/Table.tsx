import { DataTable } from "grommet";
import { useState } from "react";

const data = [
  { name: "Alan", percent: 20, id: 1 },
  { name: "Bryan", percent: 30, id: 2 },
  { name: "Chris", percent: 40, id: 3 },
  { name: "Eric", percent: 80, id: 4 },
];
const columns = [
  {
    property: "name",
  },
  {
    property: "percent",
  },
];

export default function Table() {
  const [select, setSelect] = useState<(string | number)[]>([]);
  return (
    <DataTable
      columns={columns}
      data={data}
      select={select}
      onSelect={(selected) => setSelect(selected)}
    />
  );
}
