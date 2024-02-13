import type { AreaConfig } from '@ant-design/plots';
import { Area } from '@ant-design/plots';
import type { TableColumnsType } from 'antd';
import { Table, Tag } from 'antd';
import React from 'react';

export interface JamDataType {
  key: React.Key;
  timeName: number;
  jamIndex: number;
  stakeNo: string;
}

export interface DemoAreaProps {
  data: JamDataType[];
}

const columns: TableColumnsType<JamDataType> = [
  {
    title: '序号',
    render: function (text, record, index) {
      return index + 1;
    },
  },
  {
    title: '位置',
    dataIndex: 'stakeNo',
    key: 'stakeNo',
  },
  {
    title: '时段',
    dataIndex: 'timeName',
    key: 'timeName',
  },
  {
    title: '系数值 / 状态',
    dataIndex: 'jamIndex',
    key: 'jamIndex',
    render: (text, record) => {
      if (record.jamIndex <= 1.0)
        return (
          <span>
            {record.jamIndex} / <Tag color="success">畅通</Tag>
          </span>
        );
      else if (record.jamIndex > 1.0 && record.jamIndex <= 1.2)
        return (
          <span>
            {record.jamIndex} / <Tag color="warning">饱和</Tag>
          </span>
        );
      else if (record.jamIndex > 1.2)
        return (
          <span>
            {record.jamIndex} / <Tag color="error">拥堵</Tag>
          </span>
        );
    },
  },
];

export function TopJamList(props: DemoAreaProps) {
  return <Table dataSource={props.data} pagination={false} columns={columns} size="large" />;
}

export default function DemoArea(props: DemoAreaProps) {
  const config: AreaConfig = {
    autoFit: true,
    data: props.data,
    xField: 'timeName',
    yField: 'jamIndex',
    slider: {
      x: {},
    },
  };
  return <Area {...config} />;
}
