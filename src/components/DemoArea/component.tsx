import type { AreaConfig } from '@ant-design/plots';
import { Area } from '@ant-design/plots';

interface JamDataType {
  km: string;
  jamIndex: number;
}

export interface DemoAreaProps {
  jamDataList: JamDataType[];
}

const DemoArea = (props: DemoAreaProps) => {
  const config: AreaConfig = {
    autoFit: true,
    data: props.jamDataList,
    xField: 'km',
    yField: 'jamIndex',
    slider: {
      x: {},
    },
  };

  return <Area {...config} />;
};

export default DemoArea;
