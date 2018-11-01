/**
 * 文档作者: xwj
 * 创建时间：2018年06月15日
 * 修改时间：2018年06月15日
 * 描述信息：工具类
 */

import axios from 'axios';

export const Util = {
    httpPost: (url: string, data: object): Promise<object> => {
        return new Promise(((resolve, reject) => {
            axios.post(url, data)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
        }))
    }
}
