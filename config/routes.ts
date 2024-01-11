/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    name: '数据大屏',
    icon: 'icon-statistics',
    path: '/bigscreen',
    // layout:false,    
    routes: [
      {
        name: '态势地图',
        path: '/bigscreen/dataMap',
        Component: 'Bigscreen/DataMap',
      },
      {
        name: '轨迹跟踪',
        path: '/bigscreen/vehTracking',
        Component: 'Bigscreen/VehTracking',
      },
      {
        name: '事件处理',
        path: '/bigscreen/eventHandling',
        Component: 'Bigscreen/EventHandling',
      },
    ]
  },
  {
    name: '风险报告',
    icon: 'icon-saverity',
    path: '/riskReport',    
    component: 'Dashboard/RiskReport',
    // 不展示顶栏
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    menuRender: false,    
  },
  {
    name: '工作台',
    icon: 'icon-xingzhuang',
    path: '/workplace',
    component: 'Workplace'
  },
  {
    name: '数据看板',
    icon: 'icon-biaoge',
    path: '/dashboard',
    routes: [
      {
        name: '视频事件',
        path: '/dashboard/eventData',
        component: 'Dashboard/EventData',
      },
      {
        name: '交通状况',
        path: '/dashboard/traffic',
        component: 'Dashboard/Traffic',
      },
      {
        name: '行车风险',
        path: '/dashboard/drivingRisk',
        component: 'Dashboard/DrivingRisk',
      },
      {
        name: '风险报告',
        path: '/dashboard/riskReport',
        redirect: '/riskReport',
      },
    ]
  },
  {
    name: '后台管理',
    icon: 'icon-dangan',
    path: '/management',
    routes: [
      {
        name: '用户管理',
        path: '/management/users',
        component: 'Management/Users',
      },
      {
        name: '权限管理',
        path: '/management/roles',
        component: 'Management/Roles',
      },
    ]
  },
  {
    name: '参数配置',
    icon: 'icon-xitongguanli',
    access: 'canAdmin',
    path: '/systemParam',
    routes: [
      {
        name: '道路参数',
        path: '/systemParam/roadPara',
        component: 'SystemParam/RoadPara',
      },
      {
        name: '相机参数',
        path: '/systemParam/cameraPara',
        component: 'SystemParam/CameraPara',
      },
      {
        name: '检测参数',
        path: '/systemParam/detectingPara',
        component: 'SystemParam/DetectingPara',
      },
    ]
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'icon-smile',
    component: './Welcome',
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       component: './Admin',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
