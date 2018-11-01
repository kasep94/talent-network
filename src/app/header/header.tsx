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
import Popup from '../components/popup/popup';
import { Tabs, Input, Icon, Button } from 'antd';

const TabPane = Tabs.TabPane;

class Header extends React.Component<{}, { userName: string, password: string, hasPop: boolean }> {
    private userNameInput: any;
    private passwordInput: any;

    constructor(props: {}) {
        super(props);
        this.state = {
            // 账号
            userName: '',
            // 密码
            password: '',
            // 是否有弹出框
            hasPop: false,
        };
    }
    public render() {
        const { userName, password, hasPop } = this.state;
        const nSuffix = userName ? <Icon type="close-circle" onClick={this.nEmitEmpty} /> : null;
        const pSuffix = password ? <Icon type="close-circle" onClick={this.pEmitEmpty} /> : null;
        return <div className='header-page'>
            <div className='header-top both-sides-center'>
                <p>您好，欢迎进入苍南招聘网！</p>
                <p><span onClick={this.onLogin}>登入</span><span className='line'>|</span><span>注册</span></p>
            </div>
            <Tabbar data={tabbarData} onNodeClick={this.onTabbarClick} />
            <SearchWrapper data={hotData} />
            {
                hasPop && <Popup onNodeClick={this.onPopup}>
                    <div className='popup-main' onClick={this.onPopMain}>
                        <Tabs defaultActiveKey="1" onChange={this.onSelect}>
                            <TabPane tab="验证码登录" key="1">
                                <Input
                                    placeholder="请输入手机号码"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={nSuffix}
                                    value={userName}
                                    addonAfter={<span className='get-code' onClick={this.onGetCode}>获取验证码</span>}
                                    onChange={this.onChangeUserName}
                                    ref={node => this.userNameInput = node}
                                />
                                <Input
                                    placeholder="请输入验证码"
                                    prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={pSuffix}
                                    value={password}
                                    onChange={this.onChangePassword}
                                    ref={node => this.passwordInput = node}
                                />
                                <Button type="primary" block={true}>登录</Button>
                                <div className='both-sides-center'>
                                    <p className='a'>注册</p>
                                    <p className='a'>忘记密码?</p>
                                </div>
                            </TabPane>
                            <TabPane tab="用户名登录" key="2">
                                <Input
                                    placeholder="请输入手机号码"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={nSuffix}
                                    value={userName}
                                    onChange={this.onChangeUserName}
                                    ref={node => this.userNameInput = node}
                                />
                                <Input
                                    placeholder="请输入密码"
                                    prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={pSuffix}
                                    value={password}
                                    onChange={this.onChangePassword}
                                    ref={node => this.passwordInput = node}
                                />
                                <Button type="primary" block={true}>登录</Button>
                                <div className='both-sides-center'>
                                    <p className='a'>注册</p>
                                    <p className='a'>忘记密码?</p>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </Popup>
            }

        </div>
    }

    /** 单击登录 */
    private onLogin = () => {
        this.setState({
            hasPop: true
        })
    }

    /** 点击弹窗内容 */
    private onPopMain(e: HTMLElement | any) {
        e.stopPropagation();
    }

    private onGetCode = () => {
        console.log('success');
    }

    /**
     * 单击弹出框
     * @private
     * @memberof Popup
     */
    private onPopup = () => {
        this.setState({
            hasPop: false
        })
    }

    /** 用户名清空输入框 */
    private nEmitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    /**
     * 用户名输入框发生变化
     * @param e 输入的值
     * @private
     * @memberof Input
     */
    private onChangeUserName = (e: HTMLInputElement | any) => {
        this.setState({ userName: e.target.value });
    }

    /** 密码清空输入框 */
    private pEmitEmpty = () => {
        this.passwordInput.focus();
        this.setState({ password: '' });
    }

    /**
     * 密码输入框发生变化
     * @param e 输入的值
     * @private
     * @memberof Input
     */
    private onChangePassword = (e: HTMLInputElement | any) => {
        this.setState({ password: e.target.value });
    }

    /**
     * 单击tab切换
     * @private
     * @param index 索引
     * @memberof Tabbar
     */
    private onTabbarClick = (index: number) => {
        console.log(index)
        this.setState({ userName: '', password: '' });
    }

    /**
     * 单击tabs节点
     * @private
     * @param key 节点索引
     * @memberof Tabs
     */
    private onSelect = (key: string) => {
        console.log(key)
    }
}

export default Header;