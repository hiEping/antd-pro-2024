import type { AreaConfig } from '@ant-design/charts';
import { Area } from '@ant-design/charts';

const DemoArea = () => {
  const config: AreaConfig = {
    data: {
      type: 'fetch',
      value: '/api/tags',
      format: 'json',
    },
    xField: 'stakeNo',
    yField: 'vehCount',
    slider: {
      x: {},
    },
  };

  return <Area {...config} />;
};

export default DemoArea;
