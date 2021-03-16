import axios from 'axios';
import store from '../store/store';
import { LOGOUT } from '../actions/types';

const api = axios.create({
  // baseURL: 'http://dev74.onlinetestingserver.com:5009/api',
  baseURL: 'http://localhost:5019/api',
  

    headers:{
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }


});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);


api.interceptors.request.use((config) => {
  document.querySelector('.spinner-container').style.display = 'block';
  return config;
}, (error) => {
  document.querySelector('.spinner-container').style.display = 'none';
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use((response) => {
  document.querySelector('.spinner-container').style.display = 'none';
  return response;
}, (error) => {
  document.querySelector('.spinner-container').style.display = 'none';
  return Promise.reject(error);
});

export default api;
