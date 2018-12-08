<template>
    <div oncontextmenu="return false" onselectstart="return false" class="app">


        <!--&lt;!&ndash;头部&ndash;&gt;-->
        <!--<header>-->

            <!--&lt;!&ndash;<div class="header1">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="contaer header1-title">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="title-l">&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="./images/icon_biao.png" alt=""/>&ndash;&gt;-->
                        <!--&lt;!&ndash;<span> 2018-07-09</span><span>12:06:43</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->

                    <!--&lt;!&ndash;<div class="title-r">&ndash;&gt;-->
                        <!--&lt;!&ndash;<span>APP下载<img src="./images/icon_jiantoudown.png" alt=""></span>&ndash;&gt;-->
                        <!--&lt;!&ndash;<span>简体中文<img src="./images/icon_jiantoudown.png" alt=""></span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div class="header2">-->
                <!--<div class="header2-div contaer">-->
                    <!--<h4>多比特交易所</h4>-->
                    <!--<ul>-->
                        <!--<router-link to="/home">-->
                        <!--<li><a href="#">首页</a></li>-->
                        <!--</router-link>-->
                        <!--<router-link to="/transaction">-->
                            <!--<li><a href="#">交易</a></li>-->
                        <!--</router-link>-->

                        <!--<li><a href="#">财务</a></li>-->
                        <!--<li><a href="">安全</a></li>-->
                        <!--<router-link to="/help"><li><a href="#">帮助</a></li></router-link>-->
                    <!--</ul>-->
                    <!--<div class="header2-div-r">-->
                        <!--<router-link to="/login">-->

                            <!--<input class="login" type="button" value="登录">-->
                        <!--</router-link>-->
                        <!--<router-link to="/register">-->
                        <!--<input class="register" type="button" value="注册">-->
                        <!--</router-link>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</header>-->

            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    .app{
        width: 100%;
        height: 100%;
    }
    /*头部*/
    header {
        height: 100px;
        top: 0px;
        width: 100%;
        margin: 0px;
        text-align: center;
        position: fixed;
    }

    .header1 {
        height: 40px;

        background-color: #000000;
    }

    .contaer {
        width: 1700px;
        margin: 0px auto;

    }

    .header1-title {
        height: 40px;

    }

    .title-l {

        height: 40px;
        float: left;
        vertical-align: middle;
    }

    .title-l img {
        height: 16px;
        height: 16px;
        margin-top: 11px;
        float: left;
    }

    .header1-title span {
        margin-left: 11px;
        line-height: 40px;
        font-size: 14px;
        color: #ffffff;
    }

    .title-r {
        height: 40px;
        float: right;
        cursor: default;
    }

    .header1-title span img {
        width: 9px;
        margin-left: 4px;
        margin-bottom: 2px;
        height: 5px;
    }

    .header2 {
        height: 60px;
        background-color: #FFFFFF;
    }

    .header2-div {
        margin: 0 auto;
    }

    .header2-div h4 {
        line-height: 60px;
        color: #000000;
        font-size: 18px;
        float: left;
    }

    .header2-div ul {
        margin-left: 60px;
        width: 536px;
        height: 60px;
        float: left;

    }

    .header2-div li a {
        width: 90px;
        height: 32px;
        float: left;
        color: black;
        font-weight: normal;
        text-decoration: unset;
        margin: 0 auto;
        line-height: 60px;
        list-style: none;
        text-align: center;
    }

    .header2-div li a:hover {
        color: #009cff;
    }

    /*登录注册*/
    .header2-div-r {
        margin-top: 14px;
        float: right;
    }

    .login {
        background: #ffffff 0 center no-repeat;
        color: #69BAFF;
        width: 100px;
        height: 32px;
        border: 1px solid #69BAFF;
        margin-left: 20px;
        border-radius: 16px;
        cursor: pointer;
    }

    .register {
        background: #ffffff 0 center no-repeat;
        color: #FFB400;
        width: 100px;
        height: 32px;
        border: 1px solid #FFB400;
        margin-left: 20px;
        border-radius: 16px;
        cursor: pointer;
    }

    .login:active {
        color: #009cff;
        border: 1px solid #009cff;
    }

    .register:active {
        color: #FFB400;
        border: 1px solid #FFB400;
    }

    .header2-div input:visited {
        box-shadow: none
    }
</style>