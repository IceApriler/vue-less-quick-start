import { formRequest } from './request'

/** 登录 */
export function login(params) {
  return formRequest('/login', {
    method: 'post',
    data: params,
  })
}
/** 退出 */
export function logout(params) {
  return formRequest('/logout', {
    method: 'get',
    data: params,
  })
}
