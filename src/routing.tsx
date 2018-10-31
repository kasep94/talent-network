/**
 * 文档作者: wj
 * 创建时间：2018年06月12日
 * 修改时间：2018年06月12日
 * 描述信息：路由
 */

import Home from './app/home/home';
import Me from './app/me/me';
import { RouterType } from './app/types';

const routes: RouterType[] = [
    {
        component: Home,
        path: '/home'
    },
    {
        component: Me,
        path: '/me',
    },
    {
        component: Home,
        path: '/',
    }
]

export default routes;