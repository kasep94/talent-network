/**
 * 文档作者: xwj
 * 创建时间：2018年06月19日
 * 修改时间：2018年06月19日
 * 描述信息：导航栏
 * 影响模块：header
 */

import * as React from 'react';
import { Node, CompIndexProps, TabbarState } from '../../types';
import './tabbar.scss';



export class Tabbar extends React.Component<CompIndexProps<Node>, TabbarState> {
    constructor(props: CompIndexProps<Node>) {
        super(props);
        this.state = {
            index: 0
        }
    }

    public render(): any {
        const { data } = this.props;
        const { index } = this.state;
        return data ? <div className='tabbar-comp'>
            {
                data.map((value: Node, i: number) => {
                    return <p className={index === i ? 'active' : ''}
                        key={'tabbar-c' + value.name}
                        onClick={this.onNodeClick.bind(this, i)}>{value.label}</p>
                })
            }
        </div> : ''
    }

    /**
     * 单击节点
     * @param event 节点属性
     */
    public onNodeClick(index: number) {
        this.setState({
            index
        })
        // this.props.onNodeClick(index);
        this.props.onNodeClick(index)
    }
}

export default Tabbar;