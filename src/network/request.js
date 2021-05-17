import axios from 'axios';
// /*设置baseURL*/
let baseURL = '/api';
// // process.env.NODE_ENV  用于判断当前运行环境，根据 npm run serve 或 npm run build 
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://localhost:3000/';
}
console.log('a', baseURL)
export function request(config) {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 6000
    // headers:{'Content-Type':'application/json;charset=utf-8'}
  })
  // config.params = qs.stringify(config.params,{ arrayFormat: 'repeat' })
  // console.log(config.params);

  return instance(config)

}