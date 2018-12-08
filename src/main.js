import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './App.vue'
import './css/main.css'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import home from './vue/home.vue'
import login from './vue/login.vue'
import register from './vue/register.vue'
import help from './vue/help.vue'
import transaction from './vue/transaction.vue'
import footer from './vue/footer.vue'

Vue.use(Mint);
var router = new VueRouter({
    routes:[
        {path:'/',component:login

        },
        {path:'/home',component:home},
        {path:'/transaction',component:transaction},

        {
            path:'/help',component:help,
            children:[
                {path:'/help',component:footer}
            ]
        },
        {
            path:'/login',
            component:login,
            children:[
                {path:'/login',component:footer}
            ]
        },
        {
            path:'/register',
            component:register,
            children:[
                {path:'/register',component:footer}
            ]
        }

    ]
})

var vm = new Vue({
    el:'#app',
    router,
    render:c => c(app)
})

module.exports={

}