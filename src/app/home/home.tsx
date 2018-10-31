/**
 * 文档作者: xwj
 * 创建时间：2018年06月15日
 * 修改时间：2018年06月15日
 * 描述信息：主页
 */
import { Carousel } from 'antd';
import * as React from 'react';
import './home.scss';

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public render(): object {
    window.PUBLIC.event.home.next('asd');
    return (
      <div className="App">
        <Carousel>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        
      </div>
    );
  }
}

export default Home;
