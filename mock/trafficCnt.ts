const data = [
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.341,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.266,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.446,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.425,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.415,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.379,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 'NULL',
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.022,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.32,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.05,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 2.95,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.164,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 'NULL',
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.975,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.507,
  },
  {
    'Month of Year': 201601,
    District: 'K100+123',
    AQHI: 3.591,
  },
  {
    'Month of Year': 201602,
    District: 'K100+123',
    AQHI: 3.472,
  },
  {
    'Month of Year': 201602,
    District: 'K100+123',
    AQHI: 3.256,
  },
  {
    'Month of Year': 201602,
    District: 'K100+123',
    AQHI: 3.721,
  },
  {
    'Month of Year': 201602,
    District: 'K100+123',
    AQHI: 3.47,
  },
  {
    'Month of Year': 201602,
    District: 'K100+123',
    AQHI: 3.555,
  },
  {
    'Month of Year': 201602,
    District: 'K100+123',
    AQHI: 3.418,
  },
  {
    'Month of Year': 201602,
    District: 'K100+123',
    AQHI: 'NULL',
  },
  {
    'Month of Year': 201602,
    District: 'K100+123',
    AQHI: 3.192,
  },
];

export default {
  'GET /api/trafficCnt': (_req: any, res: any) => {
    res.json({
      success: true,
      data,
      errorCode: 0,
    });
  },
};
