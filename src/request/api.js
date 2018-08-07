/**
 * api接口统一管理
 */
import { get, post } from './http';

// 接口示例Demo
export const apiAddress = data => post('api/v1/users/my_address/address_edit_before', data);

