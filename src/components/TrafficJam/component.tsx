import type { AreaConfig } from '@ant-design/plots';
import { Area } from '@ant-design/plots';
import { Table } from 'antd';
import React from 'react';

const { Column } = Table;

export interface JamDataType {
  key: React.Key;
  order: number;
  km: string;
  status: string;
  oclock: number;
  k: number;
}

export interface DemoAreaProps {
  data: JamDataType[];
}

export function TopJamList(props: DemoAreaProps) {
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

export function DemoArea(props: DemoAreaProps) {
  const config: AreaConfig = {
    autoFit: true,
    data: props.data,
    xField: 'km',
    yField: 'jamIndex',
    slider: {
      x: {},
    },
  };

  return <Area {...config} />;
}
