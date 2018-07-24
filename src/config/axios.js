import axios from 'axios';
import env from './env';

const instance = axios.create({
    baseURL: env.baseUrl,
    timeout: 30000,
    withCredentials: env.credential
});

export default instance;
