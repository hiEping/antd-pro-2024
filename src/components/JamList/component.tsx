import { Table } from 'antd';
import React from 'react';

const { Column } = Table;

interface DataType {
  key: React.Key;
  order: number;
  km: string;
  status: string;
  oclock: number;
  k: number;
}

const data: DataType[] = [
  {
    key: '1',
    order: 1,
    km: 'K100+123',
    status: '通畅',
    oclock: 0,
    k: 1.1,
  },
  {
    key: '2',
    order: 2,
    km: 'K100+234',
    status: '通畅',
    oclock: 2,
    k: 1.2,
  },
  {
    key: '3',
    order: 3,
    km: 'K100+345',
    status: '通畅',
    oclock: 3,
    k: 1.3,
  },
  {
    key: '4',
    order: 4,
    km: 'K100+456',
    status: '通畅',
    oclock: 4,
    k: 1.4,
  },
  {
    key: '5',
    order: 5,
    km: 'K100+567',
    status: '通畅',
    oclock: 5,
    k: 1.5,
  },
];

export default function JamList() {
  // return <div>JamList is a awesome component</div>
  return (
    <Table dataSource={data}>
      <Column title="序号" dataIndex="order" key="order" />
      <Column title="位置" dataIndex="km" key="km" />
      <Column title="系数" dataIndex="k" key="k" />
      <Column title="状态" dataIndex="status" key="status" />
      <Column title="时段" dataIndex="oclock" key="oclock" />
    </Table>
  );
}
