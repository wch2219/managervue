import http from './baseHttp.js'
import {Indicator} from 'mint-ui';
import {Toast} from 'mint-ui';
export const api ={
    baseapi :'http://192.168.1.135:8080/manager/',
    loginapi :'user/login',//登录
};
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    openloading();
    return new Promise((resolve,reject) => {
        http.get(url,{
            params:params
        })
            .then(response => {
                success(resolve,response)
            },err => {
                error(reject,err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    openloading();
    return new Promise((resolve,reject) => {
        http.post(url,data)
            .then(response => {
                success(resolve,response)

            },err => {
                error(reject,err)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
    openloading();
    return new Promise((resolve,reject) => {
        http.patch(url,data)
            .then(response => {
                success(resolve,response)

            },err => {
                error(reject,err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
    openloading();
    return new Promise((resolve,reject) => {
        http.put(url,data)
            .then(response => {
                success(resolve,response)

            },err => {
                error(reject,err)
            })
    })
}


function openloading() {
    Indicator.open({
        text: 'Loading....',
        spinnerType: 'fading-circle'
    });
}


function success(resolve,response) {
    Indicator.close();
    resolve(response.data);
}

function error(reject,err) {
    Indicator.close();
    reject(err)
}




