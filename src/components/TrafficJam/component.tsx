import type { ColumnConfig, HeatmapConfig } from '@ant-design/plots';
import { Column, Heatmap } from '@ant-design/plots';
import type { TableColumnsType } from 'antd';
import { Table, Tag } from 'antd';
import React from 'react';

export interface JamDataType {
  key: React.Key;
  timeOrder: number;
  timeName: number;
  jamIndex: number;
  avgSpeed: number;
  vehCount: number;
  stakeNo: string;
}

export interface SegmentAvgSpeedType {
  key: React.Key;
  timeSegment: string;
  roadSegment: string;
  avgSpeed: number;
}

export interface DemoAreaProps {
  data: JamDataType[];
}

const columns: TableColumnsType<JamDataType> = [
  {
    // key: 'order',
    title: '序号',
    render: function (text, record, index) {
      return index + 1;
    },
  },
  {
    // key: 'status',
    title: '状态',
    render: (text, record) => {
      if (record.avgSpeed >= 80) return <Tag color="success">畅通</Tag>;
      else if (record.avgSpeed < 66.67) return <Tag color="error">拥堵</Tag>;
      else return <Tag color="warning">饱和</Tag>;
    },
  },
  {
    // key: 'spd',
    title: '时速 / 流量',
    render: (text, record) => {
      return record.avgSpeed + ' / ' + record.vehCount;
    },
  },
  {
    // key: 'timeName',
    title: '时段',
    dataIndex: 'timeName',
  },
  {
    // key: 'stakeNo',
    title: '位置',
    dataIndex: 'stakeNo',
  },
];

export function TopJamList(props: { data: JamDataType[] }) {
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

export default function DemoArea(props: {
  data: JamDataType[];
  elementClickHandler: (timeName: string) => void;
}) {
  const config: ColumnConfig = {
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
    onReady: ({ chart }) => {
      chart.on('element:click', (ev) => {
        props.elementClickHandler(ev.data.data.timeName);
      });
    },
  };
  return <Column {...config} />;
}
