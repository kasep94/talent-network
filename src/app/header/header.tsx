/**
 * 文档作者: xwj
 * 创建时间：2018年06月15日
 * 修改时间：2018年06月15日
 * 描述信息：头部
 */
import * as React from 'react';
import './header.scss';
import { tabbarData } from '../components/tabbar/tabbar.model';
import Tabbar from '../components/tabbar/tabbar';
import SearchWrapper from '../components/search-wrapper/search-wrapper';
import { hotData } from '../components/search-wrapper/search-wrapper.model';

class Header extends React.Component {

    constructor(props: any) {
        super(props);
    }
    public render() {
        return <div className='header-page'>
            <Tabbar data={tabbarData} onNodeClick={this.onTabbarClick} />
            <SearchWrapper data={hotData} />
        </div>
    }

    private onTabbarClick = (index: number) => {
        console.log(index)
    }
}

export default Header;