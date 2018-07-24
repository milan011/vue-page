/*
 * 创建的 axios 实例，可以参考 axios官网文档 自己进行更多的配置
 */

import axios from 'axios';
import env from './env';

const instance = axios.create({
    baseURL: env.baseUrl,
    timeout: 30000,
    withCredentials: env.credential
});

export default instance;
