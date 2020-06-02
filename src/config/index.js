const VUE_APP_ENV = process.env.VUE_APP_ENV

console.log(VUE_APP_ENV)
/** api url */
let baseApiUrl
switch (VUE_APP_ENV) {
  case 'dev':
    baseApiUrl = 'http://10.10.10.10:80/fupin'
    break
  case 'prod':
    baseApiUrl = 'http://10.10.10.10:80/fupin'
    break
  case 'qa':
    baseApiUrl = ''
    break
  default:
    baseApiUrl = ''
}

export { baseApiUrl }
