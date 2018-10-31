/**
 * 文档作者: xwj
 * 创建时间：2018年06月15日
 * 修改时间：2018年06月15日
 * 描述信息：头部
 */
import * as React from 'react';
import './header.scss';

class Header extends React.Component {
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            test: 'wuyu'
        }
        
    }
    public componentWillUpdate() {
        window.PUBLIC.event.home.subscribe((res: string) => {
            this.setState({
                test: res
            })
        })
    }
    public render() {
        return <div className='header'>
            <p>头部{this.state.test}</p>
        </div>
    }
}

export default Header;