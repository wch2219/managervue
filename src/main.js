import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
import app from './App.vue'
import './css/main.css'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import home from './vue/home.vue'
import login from './vue/login.vue'
import contentleft from './vue/contgent_left.vue'

Vue.use(Mint);
var router = new VueRouter({
    routes:[
        {path:'/',component:login

        },
        {path:'/home',component:home,
            children:[
                {path:'/home',component:contentleft}
            ]

        },


        {
            path:'/login',
            component:login,
        },

    ]
})

var vm = new Vue({
    el:'#app',
    router,
    render:c => c(app)
})

module.exports={

}