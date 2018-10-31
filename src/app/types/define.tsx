export class RouterType {
    public path: string;    // 路由路径
    public component: any;  // 组件
}

export interface PublicType {
    util: object;    // api地址
    event: any;   // Subject订阅
    local: any; // 缓存数据
}