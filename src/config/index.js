const VUE_APP_ENV = process.env.VUE_APP_ENV

console.log(VUE_APP_ENV)
/** api url */
let baseApiUrl
switch (VUE_APP_ENV) {
  case 'dev':
    baseApiUrl = 'http://111.62.218.53:80/fupin'
    // baseApiUrl = 'http://192.168.1.58:82/fupin'
    break
  case 'prod':
    baseApiUrl = 'http://111.62.218.53:80/fupin'
    break
  case 'qa':
    baseApiUrl = ''
    break
  default:
    baseApiUrl = ''
}

export { baseApiUrl }
