
import http from 'axios'
import { Message } from 'element-ui';

http.defaults.baseURL = 'http://192.168.1.135:8080/manager/';
http.defaults.headers.post['Content-Type'] = 'application/json';
// http.defaults.headers.post['Content-Type'] = ' x-www-form-urlencoded';
// http.defaults.headers.post['token'] = localStorage.getItem('token');


http.defaults.timeout = 5000;
//http request 拦截器
http.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


//http response 拦截器
http.interceptors.response.use(
    response => {
        if(response.data.errCode ==2){
            router.push({
                path:"/login",
                querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
);
export default http;
