import axios from 'axios';

axios.defaults.timeout = 2000;
axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8'
//axios.defaults.baseURL = 'http://103.28.215.253:10662/api/v1';

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
   })
 }

