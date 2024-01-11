// import React from 'react'

// export default function DemoArea() {
//   return <div>DemoArea is a awesome component</div>
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/aapl.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'close',
    slider: {
      x: {}
    },
  };

  return <Area {...config} />;
};

export default DemoArea;