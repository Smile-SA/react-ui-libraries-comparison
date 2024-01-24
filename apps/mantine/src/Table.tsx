import { useState } from "react";
import { Table as MantineTable, Checkbox } from "@mantine/core";

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
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = data.map((row) => (
    <MantineTable.Tr
      key={row.id}
      bg={
        selectedRows.includes(row.id)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <MantineTable.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(row.id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, row.id]
                : selectedRows.filter((position) => position !== row.id)
            )
          }
        />
      </MantineTable.Td>
      {columns.map((column) => (
        <MantineTable.Td>
          {row[column.field as keyof typeof row]}
        </MantineTable.Td>
      ))}
    </MantineTable.Tr>
  ));

  return (
    <MantineTable>
      <MantineTable.Thead>
        <MantineTable.Tr>
          <MantineTable.Th />
          {columns.map((column) => (
            <MantineTable.Th>{column.field}</MantineTable.Th>
          ))}
        </MantineTable.Tr>
      </MantineTable.Thead>
      <MantineTable.Tbody>{rows}</MantineTable.Tbody>
    </MantineTable>
  );
}
