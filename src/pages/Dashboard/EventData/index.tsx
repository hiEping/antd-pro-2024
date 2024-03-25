import React, { useState } from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import { Space, Flex, Table, Card, Popover, Tree, Typography, } from 'antd';
import type {  TreeDataNode, TreeProps } from 'antd';
import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';

const { Text } = Typography;
// const defaultCheckedKeys = {checked: ['eventType', 'eventCount', 'correctAlarm', 'incorrectAlarm', 'alarmRateOfCorrect', 'notHandledAlarm'], halfChecked: ['eventAlarmTatal', ]};
const defaultCheckedKeys = ['eventType', 'eventCount', 'correctAlarm', 'incorrectAlarm', 'alarmRateOfCorrect', 'notHandledAlarm', 'eventAlarmTatal', ];
const defaultData: TreeDataNode[] = [
  {
    title:'事件类型', key:'eventType'
  },
  {
    title: '事件数量', key: 'eventCount'
  },
  {
    title: '有效事件', key: 'trueEvent'
  },
  {
    title: '道路作业', key: 'jobEvent'
  },
  {
    title: '报警总数', key: 'eventAlarmTatal',  children:[
      {
        title: '正确', key: 'correctAlarm'
      },
      {
        title: '误报', key: 'incorrectAlarm'
      },
    ]
  },
  {
    title: '未处理', key: 'notHandledAlarm'
  },
  {
    title: '报警准确率', key: 'alarmRateOfCorrect'
  }
];

//FUNC: 检查节点是不是没有被选中
function isNodeChecked(node: TreeDataNode, checkedKeys: React.Key[] | {checked: React.Key[], halfChecked: React.Key[]}) {
  if (Array.isArray(checkedKeys)) {
    return checkedKeys.includes(node.key);
  }
  else 
    return checkedKeys.checked.includes(node.key) || checkedKeys.halfChecked.includes(node.key);
}
//将“列选择”树结构的节点，转换成列。
function gColumnFromTreeNode(node: TreeDataNode, checkedKeys: React.Key[] | {checked: React.Key[], halfChecked: React.Key[]} ):ColumnType<DataType> | ColumnGroupType<DataType> {    
  //列-报警准确率 的render
  //alarmRateOfCorrect列-准确率，要转换成百分比“..%”，或者“--”
  const alarmRateOfCorrectRender = (value: any, record: DataType)=>{
    if (record.eventCount == 0)
      return '--'
    else 
      return (value * 100) + '%'
  } 
  //有子节点时返回ColumnGroupType
  if (node.children && node.children.length>0) 
    return {
      title: node.title as string,
      key: node.key,
      dataIndex: node.key as string,
      hidden: !isNodeChecked(node, checkedKeys),
      render: node.key === 'alarmRateOfCorrect' ? alarmRateOfCorrectRender : undefined,
      //递归：子节点map成Col或ColGroup
      children: node.children.map((n)=>gColumnFromTreeNode(n, checkedKeys))
    }
  else 
    return {
      title: node.title as string,
      key: node.key,
      dataIndex: node.key as string,
      hidden: !isNodeChecked(node, checkedKeys),
      render: node.key === 'alarmRateOfCorrect' ? alarmRateOfCorrectRender : undefined,
    }
}
//根据“选择列”树结构，生成表的列组合
const generateColumns = (
  treeData: TreeDataNode[], 
  checkedKeys: React.Key[] | {checked: React.Key[], halfChecked: React.Key[]} 
  ) => {
  const cols: ColumnsType<DataType> = [];
  treeData.forEach((val) => {
    const col = gColumnFromTreeNode(val, checkedKeys);
    cols.push(col);
  })
  return cols;
}
const defaultColumns = generateColumns(defaultData, defaultCheckedKeys);

interface DataType {
  key: React.Key;
  eventType: string;
  eventCount: number;
  trueEvent: number;
  jobEvent: number;
  eventAlarmTatal: number;
  notHandledAlarm: number;
  correctAlarm: number;
  incorrectAlarm: number;
  alarmRateOfCorrect: number;
}

const data: DataType[] = [
  {
    key: '1',
    eventType: '停车',
    eventCount: 1230,
    trueEvent: 359,
    jobEvent: 866,
    eventAlarmTatal: 1230,
    notHandledAlarm: 1,
    correctAlarm: 1225,
    incorrectAlarm: 4,
    alarmRateOfCorrect: 0.9967,
  },
  {
    key: '2',
    eventType: '行人',
    eventCount: 2675,
    trueEvent: 235,
    jobEvent: 2431,
    eventAlarmTatal: 2675,
    notHandledAlarm: 4,
    correctAlarm: 2666,
    incorrectAlarm: 5,
    alarmRateOfCorrect: 0.9981,
  },
  {
    key: '3',
    eventType: '拥堵',
    eventCount: 12,
    trueEvent: 0,
    jobEvent: 12,
    eventAlarmTatal: 12,
    notHandledAlarm: 0,
    correctAlarm: 12,
    incorrectAlarm: 0,
    alarmRateOfCorrect: 1,
  },
  {
    key: '4',
    eventType: '抛落物',
    eventCount: 8,
    trueEvent: 3,
    jobEvent: 5,
    eventAlarmTatal: 8,
    notHandledAlarm: 0,
    correctAlarm: 8,
    incorrectAlarm: 0,
    alarmRateOfCorrect: 1,
  },
  {
    key: '5',
    eventType: '逆行',
    eventCount: 392,
    trueEvent: 0,
    jobEvent: 392,
    eventAlarmTatal: 392,
    notHandledAlarm: 0,
    correctAlarm: 392,
    incorrectAlarm: 0,
    alarmRateOfCorrect: 1,
  },
  {
    key: '6',
    eventType: '非法车辆',
    eventCount: 140,
    trueEvent: 105,
    jobEvent: 27,
    eventAlarmTatal: 140,
    notHandledAlarm: 1,
    correctAlarm: 132,
    incorrectAlarm: 7,
    alarmRateOfCorrect: 0.9478,
  },
  {
    key: '7',
    eventType: '火灾烟雾',
    eventCount: 0,
    trueEvent: 0,
    jobEvent: 0,
    eventAlarmTatal: 0,
    notHandledAlarm: 0,
    correctAlarm: 0,
    incorrectAlarm: 0,
    alarmRateOfCorrect: 1,
  },
];

function getLeafNodes(tree: TreeDataNode[], keys:React.Key[]) {
  let leafNodes: TreeDataNode[] = [];

  function traverse(nodes: TreeDataNode[]) {
    let count = 0;//
    nodes.forEach(node => {
      if (keys.includes(node.key))
        if (node.children && node.children.length) {
            const n = traverse(node.children);
            if (n == 0)
              leafNodes.push(node);
        } else {
            leafNodes.push(node);
            count ++;
        }
    });
    return count;
  }
  traverse([...tree]); // 假设tree是树的根节点
  return leafNodes;
}

export default function Page() {
  const [treeData, setTreeData] = useState([...defaultData]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[] | {checked: React.Key[], halfChecked: React.Key[]}>(defaultCheckedKeys);
  const [tableColumns, setTableColumns] = useState<ColumnsType<DataType>>(defaultColumns);

  // const onDragEnter: TreeProps['onDragEnter'] = (info) => {
  //   console.log(info);
  // };

  const onDrop: TreeProps['onDrop'] = (info) => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1

    const loop = (
      data: TreeDataNode[],
      key: React.Key,
      callback: (node: TreeDataNode, i: number, data: TreeDataNode[]) => void,
    ) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children!, key, callback);
        }
      }
    };
    const data = [...treeData];

    // Find dragObject
    let dragObj: TreeDataNode;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
      });
    } else {
      let ar: TreeDataNode[] = [];
      let i: number;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        // Drop on the top of the drop node
        ar.splice(i!, 0, dragObj!);
      } else {
        // Drop on the bottom of the drop node
        ar.splice(i! + 1, 0, dragObj!);
      }
    }
    setTreeData(data);
    setTableColumns(generateColumns(data, checkedKeys));
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys) => {
    setCheckedKeys(checkedKeys);
    setTableColumns(generateColumns(treeData, checkedKeys));
  }  

  return (
    <PageContainer fixedHeader>
      <Flex vertical gap={32}>
        <Card
          style={{marginLeft: 'auto', marginRight: 'auto', width: 1440, marginTop: 32}}
          title='事件分类统计'
          bordered= {false}
          extra={
            <Space>
              <Popover trigger='click' placement="bottomRight"
                content={
                  <div  style={{textAlign:'right'}}>
                    <Tree 
                      draggable 
                      checkable 
                      checkStrictly 
                      blockNode 
                      defaultCheckedKeys={['eventType', 'eventCount', 'correctAlarm', 'incorrectAlarm', 'alarmRateOfCorrect', 'notHandledAlarm', 'eventAlarmTatal',]} 
                      checkedKeys={checkedKeys}
                      treeData={treeData} 
                      onDrop={onDrop} 
                      onCheck={onCheck}
                    />
                    <a href='#' onClick={()=>{
                      setTreeData([
                        {
                          title:'事件类型', key:'eventType', children:[]
                        },
                        {
                          title: '事件数量', key: 'eventCount',  children:[]
                        },
                        {
                          title: '有效事件', key: 'trueEvent',  children:[]
                        },
                        {
                          title: '道路作业', key: 'jobEvent',  children:[]
                        },
                        {
                          title: '报警总数', key: 'eventAlarmTatal',  children:[
                            {
                              title: '正确', key: 'correctAlarm',  children:[]
                            },
                            {
                              title: '误报', key: 'incorrectAlarm',  children:[]
                            },
                          ]
                        },
                        {
                          title: '未处理', key: 'notHandledAlarm',  children:[]
                        },
                        {
                          title: '报警准确率', key: 'alarmRateOfCorrect',  children:[]
                        }]);
                      setCheckedKeys(['eventType', 'eventCount', 'correctAlarm', 'incorrectAlarm', 'alarmRateOfCorrect', 'notHandledAlarm', 'eventAlarmTatal',]);
                      setTableColumns(defaultColumns);
                    }}>重置</a>
                  </div>
                }
              >
                <a href="#">自选列</a>
              </Popover>
            </Space>
          }
        >
          <Table 
            columns={tableColumns}
            dataSource={data} 
            style={{ marginTop: 12 }} 
            size='small' 
            bordered
            pagination={false}
            summary={(pageData) => {
              let sumEventCount = 0;
              let sumTrueEvent = 0;
              let sumJobEvent = 0;
              let sumEventAlarmTatal = 0;
              let sumCorrectAlarm = 0;
              let sumIncorrectAlarm = 0;
              let sumNotHandledAlarm = 0;
          
              pageData.forEach(({ eventCount, trueEvent, jobEvent, eventAlarmTatal, correctAlarm, incorrectAlarm, notHandledAlarm }) => {
                sumEventCount += eventCount;
                sumTrueEvent += trueEvent;
                sumJobEvent += jobEvent;
                sumEventAlarmTatal += eventAlarmTatal;
                sumCorrectAlarm += correctAlarm;
                sumIncorrectAlarm += incorrectAlarm;
                sumNotHandledAlarm += notHandledAlarm;
              });
              
              return (
                <Table.Summary.Row>
                  {getLeafNodes(treeData, Array.isArray(checkedKeys)?checkedKeys:checkedKeys.checked).map((node, index) => {
                    switch (node.key) {
                      case 'eventType':
                        return <Table.Summary.Cell index={index} key={node.key}><Text strong>合计</Text></Table.Summary.Cell>
                        case 'eventCount':
                          return <Table.Summary.Cell index={index} key={node.key}><Text strong>{sumEventCount}</Text></Table.Summary.Cell>
                      case 'trueEvent':
                        return <Table.Summary.Cell index={index} key={node.key}><Text strong>{sumTrueEvent}</Text></Table.Summary.Cell>
                      case 'jobEvent':
                        return <Table.Summary.Cell index={index} key={node.key}><Text strong>{sumJobEvent}</Text></Table.Summary.Cell>
                      case 'eventAlarmTatal':
                        return <Table.Summary.Cell index={index} key={node.key}><Text strong>{sumEventAlarmTatal}</Text></Table.Summary.Cell>
                      case 'correctAlarm':
                        return <Table.Summary.Cell index={index} key={node.key}><Text strong>{sumCorrectAlarm}</Text></Table.Summary.Cell>
                      case 'incorrectAlarm':
                        return <Table.Summary.Cell index={index} key={node.key}><Text strong>{sumIncorrectAlarm}</Text></Table.Summary.Cell>
                      case 'notHandledAlarm':
                        return <Table.Summary.Cell index={index} key={node.key}><Text strong>{sumNotHandledAlarm}</Text></Table.Summary.Cell>
                      case 'alarmRateOfCorrect':
                        return <Table.Summary.Cell index={index} key={node.key}><Text strong>{Math.floor(10000*sumCorrectAlarm/sumEventAlarmTatal)/100+"%"}</Text></Table.Summary.Cell>
                    }
                  })}
                </Table.Summary.Row>
              );
            }}
          />
        </Card>
        <Card title='历史事件查询' 
          style={{marginLeft: 'auto', marginRight: 'auto', width: 1440}}
          >
        </Card>
      </Flex>
    </PageContainer>
  );
};