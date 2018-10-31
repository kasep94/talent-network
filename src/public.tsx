/**
 * 文档作者: xwj
 * 创建时间：2018年06月15日
 * 修改时间：2018年06月15日
 * 描述信息：全局属性
 */
import { PublicType } from './app/types';
import event from './event';
import local from './local';
import util from './util';

declare global {
  interface Window { PUBLIC: PublicType; }
}

/* const url: any = process.env.PUBLIC_URL;
window.PUBLIC = {
  api: url.API_URL
}; */
window.PUBLIC = {
  event,
  local,
  util,
};

window.console.log(window.PUBLIC);