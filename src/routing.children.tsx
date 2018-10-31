/**
 * 文档作者: wj
 * 创建时间：2018年06月12日
 * 修改时间：2018年06月12日
 * 描述信息：子路由
 */
import Header from './app/header/header';
import { RouterType } from './app/types/define';

const routes: RouterType[] = [
    {
        component: Header,
        path: '/home',
    }
]

export default routes;