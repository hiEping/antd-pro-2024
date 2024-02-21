import type { JamDataType } from '@/components/TrafficJam';
import DemoArea, { SegmentAvgSpeed, TopJamList } from '@/components/TrafficJam';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Flex, message, Space } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const dateFormat = 'YYYY/MM/DD';

export default function Page() {
  const [messageApi, contextHolder] = message.useMessage();
  const [jamList, setJamList] = useState([]);
  const [segmentAvgSpeed, setSegmentAvgSpeed] = useState([]);

  useEffect(() => {
    fetch('/api/segmentAvgSpeed')
      .then((res) => res.json())
      .then((json) => setSegmentAvgSpeed(json.data))
      .catch((e) => {
        messageApi.open({
          type: 'error',
          content: '获取[segmentAvgSpeed]数据失败\n' + e.message,
        });
      });
    fetch('/api/trafficJam')
      .then((res) => res.json())
      .then((json) => setJamList(json.data))
      .catch((e) => {
        messageApi.open({
          type: 'error',
          content: '获取[trafficJam]数据失败\n' + e.message,
        });
      });
  }, []);

  const top5JamList = (originList: JamDataType[]) => {
    const sortedList = originList.sort((a, b) => a.avgSpeed - b.avgSpeed);
    if (sortedList.length >= 5) return sortedList.slice(0, 5);
    return sortedList;
  };

  return (
    <PageContainer
      fixedHeader
      tabList={[
        {
          tab: '天台山隧道上行',
          key: '1',
        },
        {
          tab: '李家河隧道下行',
          key: '2',
        },
      ]}
      // tabActiveKey='2'
      extra={
        <Space>
          <Button type="link">拥堵阈值设置</Button>
          <DatePicker onChange={onDateChange} defaultValue={dayjs()} format={dateFormat} />
        </Space>
      }
    >
      {contextHolder}
      <Flex gap="large" vertical>
        <ProCard title="交通拥堵状况" gutter={[16, 16]} ghost wrap>
          <ProCard
            colSpan={16}
            bordered
            title="当日拥堵变化趋势（每5分钟）"
            style={{ height: 400 }}
          >
            <DemoArea data={jamList} />
          </ProCard>
          <ProCard title="拥堵程度TOP 5" colSpan={8} bordered style={{ height: 400 }}>
            <TopJamList data={top5JamList([...jamList])} />
          </ProCard>
          <ProCard title="道路平均车速" colSpan={24} bordered style={{ height: 150 }}>
            <SegmentAvgSpeed data={segmentAvgSpeed} />
          </ProCard>
        </ProCard>
        <ProCard title="交通流量状况" gutter={[16, 16]} ghost></ProCard>
        <ProCard title="道路服务水平" gutter={[16, 16]} ghost></ProCard>
      </Flex>
    </PageContainer>
  );
}
