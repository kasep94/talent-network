/**
 * 文档作者: xwj
 * 创建时间：2018年06月16日
 * 修改时间：2018年06月16日
 * 描述信息：缓存数据
 */

import { Home } from './home';

const obj = (data: any) => {
    return data.__proto__;
}

export default Object.assign({}, obj(new Home()));