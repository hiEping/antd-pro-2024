import type { JamDataType, SegmentAvgSpeedType } from '@/components/TrafficJam';
import DemoArea, { SegmentAvgSpeed, TopJamList } from '@/components/TrafficJam';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Flex, message, Space } from 'antd';
import dayjs from 'dayjs';
import { isArray } from 'lodash';
import { useEffect, useState } from 'react';

export default function Page() {
  const [messageApi, contextHolder] = message.useMessage();
  const [jamList, setJamList] = useState<JamDataType[]>([]);
  const [segmentAvgSpeedArr, setSegmentAvgSpeedArr] = useState<SegmentAvgSpeedType[]>([]);

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const dateFormat = 'YYYY/MM/DD';

  useEffect(() => {
    fetch('/api/trafficJam')
      .then((res) => res.json())
      .then((json) => {
        setJamList(json.data);
      })
      .catch((e) => {
        messageApi.open({
          type: 'error',
          content: '获取[trafficJam]数据失败\n' + e.message,
        });
      });
    // fetch('/api/segmentAvgSpeed')
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setSegmentAvgSpeedArr(json.data);
    //   })
    //   .catch((e) => {
    //     messageApi.open({
    //       type: 'error',
    //       content: '获取[segmentAvgSpeed]数据失败\n' + e.message,
    //     });
    //   });
  }, []);

  const top5JamList = (originList: JamDataType[]) => {
    const sortedList = originList.sort((a, b) => a.avgSpeed - b.avgSpeed);
    if (sortedList.length >= 10) return sortedList.slice(0, 10);
    return sortedList;
  };

  const handleColumnClick = (selectedTime: string) => {
    fetch('/api/segmentAvgSpeed')
      .then((res) => res.json())
      .then((json) => {
        const newArr = json.data.map((item: SegmentAvgSpeedType) => ({
          ...item,
          timeSegment: selectedTime,
        }));
        setSegmentAvgSpeedArr(newArr);
      })
      .catch((e) => {
        messageApi.open({
          type: 'error',
          content: '获取[segmentAvgSpeed]数据失败\n' + e.message,
        });
      });
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
        <ProCard title="交通拥堵状况" gutter={16} ghost>
          <ProCard direction="column" gutter={[0, 16]} ghost>
            <ProCard title="当日拥堵变化趋势（每5分钟峰值）">
              <DemoArea data={jamList} elementClickHandler={handleColumnClick} />
            </ProCard>
            <ProCard
              title={
                isArray(segmentAvgSpeedArr) && segmentAvgSpeedArr.length > 0
                  ? '道路各分段车速 - ' + segmentAvgSpeedArr[0].timeSegment
                  : '道路各分段车速'
              }
              style={{ height: 150 }}
            >
              <SegmentAvgSpeed data={segmentAvgSpeedArr} />
            </ProCard>
          </ProCard>
          <ProCard title="拥堵时刻TOP 10" colSpan={8}>
            <TopJamList data={top5JamList([...jamList])} />
          </ProCard>
        </ProCard>

        <ProCard title="交通流量状况" gutter={[16, 16]} ghost></ProCard>
        <ProCard title="道路服务水平" gutter={[16, 16]} ghost></ProCard>
      </Flex>
    </PageContainer>
  );
}
