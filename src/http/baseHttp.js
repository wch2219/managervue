
import http from 'axios'


http.defaults.baseURL = 'http://192.168.1.134:8080/manager/';

http.defaults.timeout = 30*1000;

http.defaults.headers.post['Content-Type'] = 'application/json';