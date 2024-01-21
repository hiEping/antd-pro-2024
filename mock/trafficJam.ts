import mockjs from 'mockjs';

const jamData = mockjs.mock({
  'list|100': [
    {
      'kPart|+1': 100,
      mPart: /[0-9]{3}/,
      whole: '@kPart @mPart',
      km: function () {
        return 'K' + this.whole.replace(' ', '+');
      },
      'vehCount|300-1200': 960,
      'jamIndex|0-1.2': 1.0,
      'oclock|0-23': 9,
    },
  ],
});

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
};
