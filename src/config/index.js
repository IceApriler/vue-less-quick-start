const VUE_APP_ENV = process.env.VUE_APP_ENV

console.log(VUE_APP_ENV)
/** api url */
let baseApiUrl
switch (VUE_APP_ENV) {
  case 'dev':
    baseApiUrl = ''
    break
  case 'prod':
    baseApiUrl = ''
    break
  case 'qa':
    baseApiUrl = ''
    break
  default:
    baseApiUrl = ''
}

export { baseApiUrl }
