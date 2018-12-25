import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter);
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import {api, post, fetch, patch, put} from './http/httputils.js'
//定义全局变量

Vue.prototype.$api = api;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.use(ElementUI);


import app from './App.vue'
import './css/main.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import home from './vue/home.vue'
import login from './vue/login.vue'
import content from './vue/content.vue'
import contentright from './vue/contentright'
import contentmannager from './vue/contentmanager'
Vue.use(Mint);
var router = new VueRouter({
    routes: [
        {
            path: '/', component: login

        },
        {
            path: '/home', component: home,
            children: [
                {
                    path: '/home', component: content,
                    children: [
                        {path: '/home', component: contentright,

                            // children:{
                            //     path:'/home/contentright/manager',component:contentmannager
                            // }
                        },
                        {path: '/home/contentright', component: contentright}
                    ]
                },

            ]

        },


        {
            path: '/login',
            component: login,
        },

    ]
});

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
});

module.exports = {};