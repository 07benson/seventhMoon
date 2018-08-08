/**
 * Created by haoqianhuang on 2018/8/3.
 */
import axios from 'axios'
axios.defaults.timeout = 2000;
axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.baseURL = 'http://103.28.215.253:10662/api/v1';
axios.interceptors.request.use(config => {
  //进行请求前的操作
  return config;
}, err => {
  console.log('请求报错');
  return Promise.reject();
  //最好把错误
  //return Promise.resolve();
});

axios.interceptors.response.use(data => {
  if (data.status && data.status === 200) {
    console.log(data.msg);
    return;
  }
  return data;
}, err => {
  if (err.response.status === 504) {
    console.log('服务器异常');
  } else if (err.response.status === 401) {
    console.log('登录过期');
  } else if (err.response.status === 403) {
    console.log('权限不足，请联系管理员');
  }
});

export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: url,
    params: params
  })
};

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    headers: {}
  })
};
