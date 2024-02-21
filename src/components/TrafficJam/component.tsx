import type { AreaConfig, HeatmapConfig } from '@ant-design/plots';
import { Area, Heatmap } from '@ant-design/plots';
import type { TableColumnsType } from 'antd';
import { Table, Tag } from 'antd';
import React from 'react';

export interface JamDataType {
  key: React.Key;
  timeName: number;
  jamIndex: number;
  avgSpeed: number;
  vehCount: number;
  stakeNo: string;
}

export interface SegmentAvgSpeedType {
  timeSegment: string;
  roadSegment: string;
  avgSpeed: number;
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
  },
  {
    title: '时段',
    dataIndex: 'timeName',
  },
  {
    title: '时速 / 状态',
    dataIndex: 'avgSpeed',
    render: (text, record) => {
      if (record.avgSpeed >= 80)
        return (
          <span>
            {record.avgSpeed} / <Tag color="success">畅通</Tag>
          </span>
        );
      else if (record.avgSpeed >= 66.67 && record.avgSpeed < 80)
        return (
          <span>
            {record.avgSpeed} / <Tag color="warning">饱和</Tag>
          </span>
        );
      else if (record.avgSpeed < 66.67)
        return (
          <span>
            {record.avgSpeed} / <Tag color="error">拥堵</Tag>
          </span>
        );
    },
  },
];

export function TopJamList(props: DemoAreaProps) {
  return <Table dataSource={props.data} pagination={false} columns={columns} size="large" />;
}

export function SegmentAvgSpeed(props: { data: SegmentAvgSpeedType[] }) {
  const config: HeatmapConfig = {
    autoFit: true,
    data: props.data,
    xField: 'roadSegment',
    yField: 'timeSegment',
    colorField: 'avgSpeed',
    mark: 'cell',
    scale: {
      color: { type: 'threshold', domain: [66.7, 80], range: ['#EB0C00', '#F2EE00', '#37EB00'] },
    },
    label: {
      text: (d: SegmentAvgSpeedType) => d.avgSpeed,
      position: 'inside',
      style: {
        fill: '#fff',
        pointerEvents: 'none',
      },
    },
    tooltip: {
      title: { field: 'timeSegment' },
      items: [{ field: 'avgSpeed', name: '平均时速' }],
    },
  };
  return <Heatmap {...config} />;
}

export default function DemoArea(props: DemoAreaProps) {
  const config: AreaConfig = {
    autoFit: true,
    data: props.data,
    xField: 'timeName',
    yField: 'avgSpeed',
    slider: {
      x: {},
    },
    tooltip: {
      title: {
        field: 'timeName',
      },
      items: [
        {
          field: 'avgSpeed',
          name: '平均时速',
        },
        {
          field: 'vehCount',
          name: '车流量',
        },
      ],
    },
  };
  return <Area {...config} />;
}
