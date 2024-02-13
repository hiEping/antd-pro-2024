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
        return hourName + '点' + leftminute + '分';
      },
      'vehCount|300-1200': 960,
      'jamIndex|0-1.2': 1.0,
      stakeNo: 'K100+123',
      // 'status':function() {
      //   if (this.jamIndex > 1.0 && this.jamIndex <= 1.2)
      //     return '饱和'
      //   else if (this.jamIndex > 1.2)
      //     return '拥堵'
      //   else
      //     return '通畅'
      // },
      // 'oclock|0-23': 9,
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
