import { type Key } from "react";
import { Table as AntdTable } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: Key;
  name: string;
  percent: number;
}

const data: DataType[] = [
  { name: "Alan", percent: 20, key: 1 },
  { name: "Bryan", percent: 30, key: 2 },
  { name: "Chris", percent: 40, key: 3 },
  { name: "Eric", percent: 80, key: 4 },
];
const columns: TableColumnsType<DataType> = [
  {
    dataIndex: "name",
  },
  {
    dataIndex: "percent",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    name: record.name,
  }),
};

export default function Table() {
  return (
    <AntdTable
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
    />
  );
}
