import { Util } from './util';

const obj = (data:any) => {
    return data.__proto__;
}

export default Object.assign({}, obj(new Util()));