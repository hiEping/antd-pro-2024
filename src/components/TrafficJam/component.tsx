import type { AreaConfig } from '@ant-design/plots';
import { Area } from '@ant-design/plots';
import type { TableColumnsType } from 'antd';
import { Table } from 'antd';
import React from 'react';

export interface JamDataType {
  key: React.Key;
  order: number;
  km: string;
  status: string;
  oclock: number;
  jamIndex: number;
}

export interface DemoAreaProps {
  data: JamDataType[];
}

const columns: TableColumnsType<JamDataType> = [
  {
    title: '序号',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: '位置',
    dataIndex: 'km',
    key: 'km',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '时段',
    dataIndex: 'oclock',
    key: 'oclock',
  },
  {
    title: '系数值',
    dataIndex: 'jamIndex',
    key: 'jamIndex',
  },
];

export function TopJamList(props: DemoAreaProps) {
  return <Table dataSource={props.data} pagination={false} columns={columns} />;
}

export default function DemoArea(props: DemoAreaProps) {
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
