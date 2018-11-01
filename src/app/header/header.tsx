/**
 * 文档作者: xwj
 * 创建时间：2018年06月15日
 * 修改时间：2018年06月15日
 * 描述信息：头部
 */
import * as React from 'react';
import './header.scss';
import {tabbarData} from '../components/tabbar/tabbar.model';
import Tabbar from '../components/tabbar/tabbar';

class Header extends React.Component {

    constructor(props: any) {
        super(props);
    }
    public render() {
        return <div className='header-page flex'>
            <Tabbar data={tabbarData} onNodeClick={this.onTabbarClick}/>
        </div>
    }

    private onTabbarClick = (index: number) => {
        console.log(index)
    }
}

export default Header;