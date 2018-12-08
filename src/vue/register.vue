<template>
    <div>
    <div class="content">

        <div class="register">
            <div class="right-title">
                <img src="../images/register.png" alt="">
                <span>注册</span>
            </div>

            <div class="login-input">
                <table>
                    <input type="text" placeholder="邮箱">
                </table>
                <table>
                    <div class="div-ver-code">

                        <input id="inpu-ver-code" type="text" placeholder="邮箱验证码">
                        <span class="ver-code" v-model="lasttime"  @click="getVerCode">获得验证码</span>
                    </div>
                </table>
                <table>
                    <input type="password" placeholder="密码">
                </table>
                <table>
                    <input id="aff-pwd"type="password" placeholder="确认密码">
                </table>
                <table>

                    <div class="div-service">
                        <input id="check" type="checkbox">
                        <span >已阅读并同意</span>
                        <a href="#">《DOTC用户协议》</a>
                    </div>

                </table>
                <input id="login-button" type="button" value="注册">
                <div class="login-r-b">
                    <p class="forgit-pwd">忘记密码？</p>

                    <router-link to="/login">
                        <p class="start-register">立即登录</p>
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
               lasttime:'剩余3秒',
               flag:false

           }
       },
        methods:{
           getVerCode(){
               console.log("ok")
           }
        }
    }
</script>

<style scoped>
    .content {
        height: 878px;
        width: 100%;
        background-color: #F8F8F8;
        text-align: center;
        vertical-align: middle;
        padding-top: 1px;
    }
    .register{
        width: 460px;
        height: 630px;
        box-shadow: 2px 2px 5px rgba(178,178,178,0.11);
        background-color: white;
        border-radius: 3px;
        border-top: 3px solid #00A7FF;
        color: #424242;
        margin: 135px auto;
    }
    .right-title {
        height: 26px;
        width: 100px;
        text-align: center;
        margin: 0px auto;
        line-height: 26px;
        vertical-align: center;
        margin-top: 34px;
    }
    .right-title img {
        float: left;
    }

    /*福输入框*/
    .login-input {
        width: 360px;
        margin-top: 64px;
        margin-left: 40px;
        font-size: 14px;

    }

    .login-input input {
        border-bottom: 1px solid #dbdbdb;
        width: 360px;
        margin-bottom: 47px;
        padding-bottom: 14px;
    }

    .div-ver-code span {
       float: right;
        cursor: pointer;
    }
    #inpu-ver-code{
        width: 200px;
        float: left;
    }
    .div-ver-code{
        width: 360px;
        height: 30px;
        border-bottom: 1px solid #dbdbdb;
        box-sizing:border-box;
    }
    .login-input input:focus {
        border-bottom: 1.5px solid #dbdbdb;
    }
    #aff-pwd{
        margin-bottom: 15px;
    }
    .div-service{
        width: 360px;
        height: 18px;
        vertical-align: center;
        text-align: left;
    }
    #check{
        width: 17px;
        height: 17px;
        float: left;
        background-color: #fff;
        -webkit-appearance:none;
        border: 1px solid #00A7FF;
        border-radius: 2px;
        outline: none;
        margin-bottom: 0px;
        margin-right: 7px;
    }
    #check:checked{
        background: url("../images/success.png") no-repeat center;
    }
    a{

        color: #00A7FF;
        line-height: 16px;
    }


    /*登录按钮*/
    #login-button {
        width: 360px;
        height: 42px;
        color: white;
        margin-top: 20px;
        border-radius: 21px;
        background-image: linear-gradient(90deg,
        rgba(0, 114, 255, 0.61) ,
        rgba(0, 198, 255, 0.61));
        line-height: 42px;
    }
    #login-button:active{

        box-shadow: 2px 2px 5px rgba(178,178,178,0.5);
    }
    .login-r-b{
        width: 360px;

    }
    .forgit-pwd{
        margin-top: 0px;
        float: left;
        cursor: pointer;
    }
    .start-register{
        float: right;
        cursor: pointer;
    }
</style>