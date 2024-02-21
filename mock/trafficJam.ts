import mockjs from 'mockjs';

const jamData = mockjs.mock({
  'list|288': [
    {
      'timeOrder|+1': 0,
      // mPart: /[0-9]{3}/,
      // whole: '@kPart @mPart',
      // km: function () {
      //   return 'K' + this.whole.replace(' ', '+');
      // },
      timeName: function () {
        const totalminute = this.timeOrder * 5;
        const hourName = Math.floor(totalminute / 60);
        const leftminute = totalminute % 60;
        return (
          (hourName < 10 ? '0' + hourName : hourName) +
          ':' +
          (leftminute < 10 ? '0' + leftminute : leftminute)
        );
      },
      vehCount: function () {
        //16-48
        if (this.avgSpeed >= 80) return parseInt(Math.random() * 24) + 16;
        //60-200
        else if (this.avgSpeed < 66.67) return parseInt(Math.random() * 140) + 60;
        //45-60
        else return parseInt(Math.random() * 15) + 45;
      },
      'jamIndex|0-1.2': 1.0,
      'avgSpeed|40-100': 80,
      stakeNo: 'K1+100',
    },
  ],
});

const segmentSpeedData = [
  {
    timeSegment: '14:25',
    roadSegment: 'K1+100',
    avgSpeed: 42,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K1+200',
    avgSpeed: 52,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K1+300',
    avgSpeed: 62,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K1+400',
    avgSpeed: 41,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K1+500',
    avgSpeed: 47,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K1+600',
    avgSpeed: 56,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K1+700',
    avgSpeed: 65,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K1+800',
    avgSpeed: 52,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K1+900',
    avgSpeed: 66,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K2+000',
    avgSpeed: 67,
  },
  {
    timeSegment: '14:25',
    roadSegment: 'K2+100',
    avgSpeed: 78,
  },
];

export default {
  // 'GET /api/trafficJam': (_req: any, res: any) => {
  //   res.json({
  //     success: true,
  //     data: {},
  //     errorCode: 0,
  //   });
  // },
  '/api/trafficJam': {
    success: true,
    code: 0,
    data: jamData.list,
  },
  '/api/segmentAvgSpeed': {
    success: true,
    code: 0,
    data: segmentSpeedData,
  },
};
