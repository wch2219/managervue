<template>
    <div>

        <div class="content">
            <div class="login">

                <div class="login-right">
                    <div class="right-title">

                        <span>系统管理</span>
                    </div>

                    <div class="login-input">
                        <table>
                            <span>手机号/邮箱</span><br>
                            <input type="text" placeholder="请输入用户名">
                        </table>
                        <table>
                            <span>密码</span> <br>
                            <input type="password" placeholder="请输入密码">
                        </table>
                        <router-link to="/home">
                        <input id="login-button" type="button" value="登录">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nama:'sadasdasdas',

            };
        },
        methods:{


        }
    }
</script>

<style scoped>
    .content {
        height: 786px;
        width: 100%;
        background-color: #F8F8F8;
        text-align: center;
        vertical-align: middle;
        padding-top: 1px;
    }

    .login {
        width: 440px;
        height: 430px;
        margin:  auto;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }


    /*右侧*/
    .login-right {
        width: 440px;
        height: 430px;
        margin-left: 20px;
        box-shadow: 2px 2px 5px rgba(178,178,178,0.11);
        background-color: white;
        border-radius: 3px;
        border-top: 3px solid #00A7FF;
        color: #424242;
    }

    .right-title {
        height: 26px;
        width: 100px;
        margin: 0px auto;
        line-height: 26px;
        vertical-align: center;
        margin-top: 34px;
    }



    .right-title span {
        line-height: 26px;
        height: 26px;
        margin-left: 6px;
        float: left;
        font-size: 22px;
    }

    /*福输入框*/
    .login-input {
        width: 360px;
        margin-top: 6px;
        margin-left: 40px;
        font-size: 14px;

    }

    .login-input input {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        width: 360px;
        margin-top: 10px;
        padding: 10px;
    }

    .login-input span {
        float: left;
        margin-top: 50px;
    }

    .login-input input:focus {
        border-bottom: 1.5px solid #dbdbdb;
    }

    /*登录按钮*/
    #login-button {
        width: 360px;
        height: 42px;
        color: white;
        margin-top: 50px;
        border-radius: 21px;
        background-image: linear-gradient(90deg,
        rgba(0, 114, 255, 0.61) ,
        rgba(0, 198, 255, 0.61));

    }
    #login-button:active{

        box-shadow: 2px 2px 5px rgba(178,178,178,0.5);
    }
</style>