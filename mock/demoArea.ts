import mockjs from 'mockjs';

const data = [
  {
    vehCount: 559,
    stakeNo: 'K100+573',
  },
  {
    vehCount: 1177,
    stakeNo: 'K101+562',
  },
  {
    vehCount: 344,
    stakeNo: 'K102+474',
  },
  {
    vehCount: 496,
    stakeNo: 'K103+103',
  },
  {
    vehCount: 535,
    stakeNo: 'K104+023',
  },
  {
    vehCount: 665,
    stakeNo: 'K105+833',
  },
  {
    vehCount: 615,
    stakeNo: 'K106+517',
  },
  {
    vehCount: 853,
    stakeNo: 'K107+716',
  },
  {
    vehCount: 932,
    stakeNo: 'K108+720',
  },
  {
    vehCount: 311,
    stakeNo: 'K109+772',
  },
  {
    vehCount: 1094,
    stakeNo: 'K110+905',
  },
  {
    vehCount: 999,
    stakeNo: 'K111+381',
  },
  {
    vehCount: 420,
    stakeNo: 'K112+902',
  },
  {
    vehCount: 373,
    stakeNo: 'K113+388',
  },
  {
    vehCount: 500,
    stakeNo: 'K114+089',
  },
  {
    vehCount: 531,
    stakeNo: 'K115+345',
  },
  {
    vehCount: 1123,
    stakeNo: 'K116+472',
  },
  {
    vehCount: 929,
    stakeNo: 'K117+248',
  },
  {
    vehCount: 969,
    stakeNo: 'K118+759',
  },
  {
    vehCount: 674,
    stakeNo: 'K119+084',
  },
  {
    vehCount: 1093,
    stakeNo: 'K120+032',
  },
  {
    vehCount: 1056,
    stakeNo: 'K121+054',
  },
  {
    vehCount: 890,
    stakeNo: 'K122+341',
  },
  {
    vehCount: 888,
    stakeNo: 'K123+076',
  },
  {
    vehCount: 414,
    stakeNo: 'K124+286',
  },
  {
    vehCount: 463,
    stakeNo: 'K125+707',
  },
  {
    vehCount: 579,
    stakeNo: 'K126+166',
  },
  {
    vehCount: 791,
    stakeNo: 'K127+848',
  },
  {
    vehCount: 535,
    stakeNo: 'K128+587',
  },
  {
    vehCount: 1166,
    stakeNo: 'K129+865',
  },
  {
    vehCount: 575,
    stakeNo: 'K130+075',
  },
  {
    vehCount: 552,
    stakeNo: 'K131+418',
  },
  {
    vehCount: 1122,
    stakeNo: 'K132+538',
  },
  {
    vehCount: 1097,
    stakeNo: 'K133+667',
  },
  {
    vehCount: 873,
    stakeNo: 'K134+430',
  },
  {
    vehCount: 949,
    stakeNo: 'K135+356',
  },
  {
    vehCount: 950,
    stakeNo: 'K136+544',
  },
  {
    vehCount: 501,
    stakeNo: 'K137+018',
  },
  {
    vehCount: 913,
    stakeNo: 'K138+622',
  },
  {
    vehCount: 836,
    stakeNo: 'K139+272',
  },
  {
    vehCount: 579,
    stakeNo: 'K140+715',
  },
  {
    vehCount: 889,
    stakeNo: 'K141+342',
  },
  {
    vehCount: 1037,
    stakeNo: 'K142+803',
  },
  {
    vehCount: 863,
    stakeNo: 'K143+176',
  },
  {
    vehCount: 850,
    stakeNo: 'K144+748',
  },
  {
    vehCount: 783,
    stakeNo: 'K145+147',
  },
  {
    vehCount: 735,
    stakeNo: 'K146+671',
  },
  {
    vehCount: 581,
    stakeNo: 'K147+372',
  },
  {
    vehCount: 1199,
    stakeNo: 'K148+927',
  },
  {
    vehCount: 494,
    stakeNo: 'K149+108',
  },
  {
    vehCount: 704,
    stakeNo: 'K150+724',
  },
  {
    vehCount: 688,
    stakeNo: 'K151+234',
  },
  {
    vehCount: 1071,
    stakeNo: 'K152+184',
  },
  {
    vehCount: 786,
    stakeNo: 'K153+622',
  },
  {
    vehCount: 956,
    stakeNo: 'K154+625',
  },
  {
    vehCount: 750,
    stakeNo: 'K155+768',
  },
  {
    vehCount: 638,
    stakeNo: 'K156+887',
  },
  {
    vehCount: 1059,
    stakeNo: 'K157+147',
  },
  {
    vehCount: 383,
    stakeNo: 'K158+603',
  },
  {
    vehCount: 885,
    stakeNo: 'K159+954',
  },
  {
    vehCount: 634,
    stakeNo: 'K160+468',
  },
  {
    vehCount: 735,
    stakeNo: 'K161+432',
  },
  {
    vehCount: 674,
    stakeNo: 'K162+387',
  },
  {
    vehCount: 823,
    stakeNo: 'K163+936',
  },
  {
    vehCount: 700,
    stakeNo: 'K164+562',
  },
  {
    vehCount: 1136,
    stakeNo: 'K165+264',
  },
  {
    vehCount: 514,
    stakeNo: 'K166+259',
  },
  {
    vehCount: 460,
    stakeNo: 'K167+920',
  },
  {
    vehCount: 363,
    stakeNo: 'K168+975',
  },
  {
    vehCount: 1039,
    stakeNo: 'K169+515',
  },
  {
    vehCount: 1023,
    stakeNo: 'K170+301',
  },
  {
    vehCount: 1088,
    stakeNo: 'K171+779',
  },
  {
    vehCount: 326,
    stakeNo: 'K172+384',
  },
  {
    vehCount: 1107,
    stakeNo: 'K173+868',
  },
  {
    vehCount: 678,
    stakeNo: 'K174+564',
  },
  {
    vehCount: 1083,
    stakeNo: 'K175+581',
  },
  {
    vehCount: 963,
    stakeNo: 'K176+589',
  },
  {
    vehCount: 868,
    stakeNo: 'K177+543',
  },
  {
    vehCount: 738,
    stakeNo: 'K178+849',
  },
  {
    vehCount: 1040,
    stakeNo: 'K179+005',
  },
  {
    vehCount: 1191,
    stakeNo: 'K180+848',
  },
  {
    vehCount: 429,
    stakeNo: 'K181+378',
  },
  {
    vehCount: 961,
    stakeNo: 'K182+268',
  },
  {
    vehCount: 444,
    stakeNo: 'K183+810',
  },
  {
    vehCount: 1144,
    stakeNo: 'K184+368',
  },
  {
    vehCount: 666,
    stakeNo: 'K185+841',
  },
  {
    vehCount: 861,
    stakeNo: 'K186+561',
  },
  {
    vehCount: 992,
    stakeNo: 'K187+868',
  },
  {
    vehCount: 438,
    stakeNo: 'K188+147',
  },
  {
    vehCount: 1073,
    stakeNo: 'K189+155',
  },
  {
    vehCount: 1131,
    stakeNo: 'K190+338',
  },
  {
    vehCount: 451,
    stakeNo: 'K191+852',
  },
  {
    vehCount: 884,
    stakeNo: 'K192+701',
  },
  {
    vehCount: 973,
    stakeNo: 'K193+163',
  },
  {
    vehCount: 490,
    stakeNo: 'K194+098',
  },
  {
    vehCount: 1061,
    stakeNo: 'K195+736',
  },
  {
    vehCount: 786,
    stakeNo: 'K196+818',
  },
  {
    vehCount: 352,
    stakeNo: 'K197+681',
  },
  {
    vehCount: 630,
    stakeNo: 'K198+515',
  },
  {
    vehCount: 712,
    stakeNo: 'K199+274',
  },
];

const data1 = mockjs
  .mock({
    'list|100': [
      {
        'kValue|+1': 100,
        mValue: /[0-9]{3}/,
        km: '@kValue @mValue',
        stakeNo: function () {
          return 'K' + this.km.replace(' ', '+');
        },
        'vehCount|300-1200': 960,
      },
    ],
  })
  .list.map((item) => {
    return {
      stakeNo: item.stakeNo,
      vehCount: item.vehCount,
    };
  });

export default {
  'GET /api/demoArea': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {},
      errorCode: 0,
    });
  },
  // 使用 mockjs 等三方库
  'GET /api/tags': data1,
};
