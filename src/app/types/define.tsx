export class RouterType {
    public path: string;    // 路由路径
    public component: any;  // 组件
}

export interface PublicType {
    util: object;    // api地址
    event: any;   // Subject订阅
    local: any; // 缓存数据
}

export interface Node {
    label: string;
    name: string;
}

export interface CompProps<T> {
    data: T[];
}

export interface CompClickProps<T> {
    data: T[];
    onNodeClick: (node: T) => void;
}

export interface CompIndexProps<T> {
    data: T[];
    onNodeClick: (index: number) => void;
}

export interface TabbarState {
    index: number;
}