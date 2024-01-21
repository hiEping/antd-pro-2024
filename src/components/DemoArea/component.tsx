import type { AreaConfig } from '@ant-design/plots';
import { Area } from '@ant-design/plots';
import { useState } from 'react';
import { request } from 'umi';

// interface JamDataType {
//   kPart: number,
//   mPart: string,
//   whole: string,
//   km: string,
//   vehCount: number,
//   jamIndex: number,
//   oclock: number,
// }

const DemoArea = () => {
  const [jamData, setJamData] = useState([{ km: 'K123+456', jamIndex: 1.0 }]);

  request('/api/trafficJam').then((d) => {
    console.log(d);
    setJamData(d);
  });

  const config: AreaConfig = {
    data: jamData,
    xField: 'km',
    yField: 'jamIndex',
    slider: {
      x: {},
    },
  };

  return <Area {...config} />;
};

export default DemoArea;
