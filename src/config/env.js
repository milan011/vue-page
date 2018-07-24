/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '';


const dev = {
    routerMode: 'hash',  //history
    baseUrl: '',
    credential: true
};

const prod = {
    ...dev,
};

export default process.env.NODE_ENV === 'development' ? dev : prod;
