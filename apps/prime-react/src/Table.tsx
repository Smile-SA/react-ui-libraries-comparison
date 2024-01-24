import { useState } from "react";
import { DataTable, DataTableValue } from "primereact/datatable";
import { Column } from "primereact/column";

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
  const [selectedProducts, setSelectedProducts] = useState<DataTableValue[]>(
    []
  );

  return (
    <DataTable
      dataKey="id"
      onSelectionChange={(e) => setSelectedProducts(e.value)}
      selection={selectedProducts}
      selectionMode="checkbox"
      tableStyle={{ minWidth: "50rem" }}
      value={data}
    >
      <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
      {columns.map((column) => (
        <Column field={column.field} />
      ))}
    </DataTable>
  );
}
