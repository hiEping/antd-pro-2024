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

export default function TopJamList(props: { data: DataType[] }) {
  // return <div>JamList is a awesome component</div>
  return (
    <Table dataSource={props.data}>
      <Column title="序号" dataIndex="order" key="order" />
      <Column title="位置" dataIndex="km" key="km" />
      <Column title="系数" dataIndex="k" key="k" />
      <Column title="状态" dataIndex="status" key="status" />
      <Column title="时段" dataIndex="oclock" key="oclock" />
    </Table>
  );
}
