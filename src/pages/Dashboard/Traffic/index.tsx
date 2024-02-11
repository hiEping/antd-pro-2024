import DemoArea from '@/components/DemoArea';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Flex, Space } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

// const onChange = (e: RadioChangeEvent) => {
//   console.log(`radio checked:${e.target.value}`);
// };

const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const dateFormat = 'YYYY/MM/DD';

export default function Page() {
  const [jamList, setJamList] = useState([]);

  useEffect(() => {
    fetch('/api/trafficJam')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJamList(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
      <Flex gap="large" vertical>
        <ProCard title="交通拥堵状况" gutter={[16, 16]} ghost wrap>
          <ProCard colSpan={16} bordered title="各点位拥堵峰值">
            <DemoArea jamDataList={jamList} />
          </ProCard>
          <ProCard title="点位拥堵排名" colSpan={8} bordered></ProCard>
          <ProCard title="拥堵24小时变化" colSpan={24} bordered>
            col24
          </ProCard>
        </ProCard>
        <ProCard title="交通流量状况" gutter={[16, 16]} ghost></ProCard>
        <ProCard title="道路服务水平" gutter={[16, 16]} ghost></ProCard>
      </Flex>
    </PageContainer>
  );
}
