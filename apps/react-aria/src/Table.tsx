import {
  Cell,
  Checkbox,
  Column,
  Row,
  Table as AriaTable,
  TableBody,
  TableHeader,
} from "react-aria-components";

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
    <AriaTable aria-label="Files" selectionMode="multiple">
      <TableHeader>
        <Column>
          <Checkbox slot="selection" />
        </Column>
        {columns.map((column) => (
          <Column isRowHeader>{column.field}</Column>
        ))}
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <Row>
            <Cell>
              <Checkbox slot="selection" />
            </Cell>
            {columns.map((column) => (
              <Cell>{row[column.field as keyof typeof row]}</Cell>
            ))}
          </Row>
        ))}
      </TableBody>
    </AriaTable>
  );
}
