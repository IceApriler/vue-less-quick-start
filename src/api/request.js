import axios from 'axios'
import { baseApiUrl } from '../config'
import { message } from 'ant-design-vue'
import router from '@/router/index.js'

axios.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  },
)

axios.defaults.withCredentials = true
axios.defaults.timeout = 15000

function doAxios(opts) {
  return new Promise((resolve, reject) => {
    axios(opts)
      .then(({ status, data }) => {
        if (status === 200) {
          if (data.code === 200) {
            resolve(data)
          } else if (
            data.code === 302 ||
            data.code === 403 ||
            data.code === 401
          ) {
            router.replace('/login')
          } else {
            message.error(data.message || '系统错误请联系管理员', 3)
            reject(data)
          }
        } else {
          reject(data)
        }
      })
      .catch(err => {
        message.error(err.message || '系统错误请联系管理员', 3)
        if (
          err.response &&
          err.response.data &&
          err.response.data.code === 302
        ) {
          router.replace('/login')
        }
        reject(err)
      })
  })
}

export function request(url, { method, data = {}, baseUrl }) {
  const opts = {
    url,
    method,
    baseURL: baseUrl || baseApiUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  method === 'get' ? (opts.params = data) : (opts.data = data)
  return doAxios(opts)
}

export function formRequest(url, { method, data = {}, baseUrl }) {
  const opts = {
    url,
    method,
    baseURL: baseUrl || baseApiUrl,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: data,
  }
  return doAxios(opts)
}
