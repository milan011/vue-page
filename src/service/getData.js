import axios from '@/config/axios';

/**
 * 用户登陆
 */

export const login = (data, config) => axios.post('/login', data, config);
