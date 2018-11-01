/**
 * 文档作者: xwj
 * 创建时间：2018年06月15日
 * 修改时间：2018年06月15日
 * 描述信息：主页
 */
import { Carousel, Tabs } from 'antd';
import * as React from 'react';
import './home.scss';
import LeftSort from '../components/left-sort/left-sort';
import leftSort1 from '../components/left-sort/left-sort.model';
import Box from '../components/box/box';
import boxData from '../components/box/box.model';
import { menuData, tabPaneData } from './home.model';

const TabPane = Tabs.TabPane;

class Home extends React.Component {
  constructor(props: {}) {
    super(props);
  }
  public render(): object {
    window.PUBLIC.event.home.next('asd');
    return (
      <div className='home-page'>
        <header className='flex'>
          <div className='left-nav'>
            <LeftSort data={leftSort1} />
            <div className='menu'>
              {
                menuData.map(v => {
                  return <p className='a' key={v.name}>{v.label}</p>
                })
              }
            </div>
          </div>

          <Carousel>
            <div className='right-carousel'><h3>1</h3></div>
            <div className='right-carousel'><h3>2</h3></div>
            <div className='right-carousel'><h3>3</h3></div>
            <div className='right-carousel'><h3>4</h3></div>
          </Carousel>
        </header>
        <div className='content'>
          <Tabs defaultActiveKey="1" onChange={this.onSelect}>
            {
              tabPaneData.map(v => {
                return <TabPane tab={v.label} key={v.name}><Box data={boxData} /></TabPane>
              })
            }
          </Tabs>
        </div>
      </div>
    );
  }

  /**
   * 单击切换
   * @param key 切换的值
   * @memberof TabPane
   */
  private onSelect(key: string) {
    console.log(key)
  }

}

export default Home;
