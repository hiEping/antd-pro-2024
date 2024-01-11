import mockjs from 'mockjs';

export default {
  'GET /api/demoArea': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {},
      errorCode: 0,
    });
  },
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
