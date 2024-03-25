import React, { ReactNode, useRef } from 'react';
import styles from './index.less';
import { Button } from 'antd';

type RiskLocationBlockProps = {
  title: string, 
  subTitle: string, 
  children?: ReactNode
}
const RiskLocationBlock = (props: RiskLocationBlockProps) => {
  return (
    <div className={styles.sectionDiv}>
      <div className={styles.sectionTitleDiv}>
        <div>{props.title}</div>
        <div>{props.subTitle}</div>
      </div>
      <div className={styles.sectionBgDiv}>{props.children}</div>
    </div>
  )
}

export default function Page() {
  const risk_location = useRef<HTMLElement | null>(null);
  const risk_category = useRef<HTMLElement | null>(null);
  const risk_sources = useRef<HTMLElement | null>(null);
  const risk_oclock = useRef<HTMLElement | null>(null);

  function handleClick(scrollto: string) {    
    switch (scrollto) {
      case 'risk_location':
        window.scrollTo({
          top: risk_location.current!.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'risk_category':
        window.scrollTo({
          top: risk_category.current!.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'risk_sources':
        window.scrollTo({
          top: risk_sources.current!.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'risk_oclock':
        window.scrollTo({
          top: risk_oclock.current!.offsetTop,
          behavior: 'smooth',
        });
        break;
    }
  }

  return (
    //背景
    <div className={styles.pageBgDiv}>
      {/* 页头区域 */}
      <div className={styles.headerDiv}>
        <div className={styles.logoDiv}>
          <img src='/dwst_logo_with_name.png' height={24}/>
        </div>
        <Button className={styles.headerMenuBtn} type='link' onClick={()=>handleClick('risk_location')}>风险位置</Button>
        <Button className={styles.headerMenuBtn} type='link' onClick={()=>handleClick('risk_category')} >风险类型</Button>
        <Button className={styles.headerMenuBtn} type='link' onClick={()=>handleClick('risk_sources')}>风险源</Button>
        <Button className={styles.headerMenuBtn} type='link' onClick={()=>handleClick('risk_oclock')}>风险时段</Button>
        <Button className={styles.headerMenuBtn} type='link' href='/dashboard/eventData'>返回工作台</Button>
        <div className={styles.dayTimeDiv}>
          <div>2024年3月21日 星期四</div>
          <div>19:29</div>
        </div>
      </div>
      {/**主标题 */}
      <div className={styles.mainTitleDiv}>高速公路隧道交通<br/>全时空监控系统</div>
      {/**副标题 */}
      <div className={styles.subTitleDiv}>道路风险态势数据分析报告</div>
      {/* 数据采样范围 */}
      <div className={styles.dataSamplesDiv}>
        <div>报告数据采样范围</div>
        <div>道路区域：</div>
        <div>
          <span>天台山隧道上行</span><span>icon</span><span>（👈点击这里编辑）</span>
        </div>
        <div>日期范围：</div>
        <div>
          <span>2023年8月1日 至 2023年8月16日</span><span>icon</span><span>（👈点击这里编辑）</span>
        </div>
        <div>位置范围：</div>
        <div><span>K122+456 ~ K123+789</span></div>
        <div>风险类型：</div>
        <div><span>所有类型</span></div>
        <div>风险源：</div>
        <div><span>所有车辆</span></div>
        <div>风险时段：</div>
        <div><span>16时 ~ 22时</span></div>
      </div>
      {/* 报告内容总结区域 */}
      <div className={styles.repContent}>
        <div>报告内容</div>
        <div className={styles.repContentBgimg}></div>
      </div>
      {/**风险位置维度 */}
      <div className={styles.sectionDiv} ref={risk_location}>
        <div className={styles.sectionTitleDiv}>
          <div>风险位置维度</div>
          <div>from the perspective of risk location</div>
        </div>
        <div className={styles.sectionBgDiv}></div>
      </div>
      {/* <RiskLocationBlock title='风险位置维度' subTitle='from the perspective of risk location'/> */}
      {/**风险类型维度 */}
      <div className={styles.sectionDiv} ref={risk_category}>
        <div className={styles.sectionTitleDiv}>
          <div>风险类型维度</div>
          <div>from the perspective of risk category</div>
        </div>
        <div className={styles.sectionBgDiv}></div>
      </div>
      {/**风险源维度 */}
      <div className={styles.sectionDiv} ref={risk_sources}>
        <div className={styles.sectionTitleDiv}>
          <div>风险源维度</div>
          <div>from the perspective of risk sources</div>
        </div>
        <div className={styles.sectionBgDiv}></div>
      </div>
      {/**风险时段维度 */}
      <div className={styles.sectionDiv} ref={risk_oclock}>
        <div className={styles.sectionTitleDiv}>
          <div>风险时段维度</div>
          <div>from the perspective of clock range</div>
        </div>
        <div className={styles.sectionBgDiv}>
          <img src='/bg_risk_oclock.png'/>
        </div>
      </div>
      {/**页脚区域 */}
      <div className={styles.pageFootDiv}>

      </div>
    </div>
  );
}
