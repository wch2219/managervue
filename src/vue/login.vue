<template>
    <div>

        <div class="content">


            <div class="login">
                <div class="right-title">

                    <span>系统管理</span>
                </div>

                <div class="login-input">
                    <table>
                        <span>手机号/邮箱</span>
                        <input type="text" placeholder="请输入用户名" v-model="loginParams.phone">
                    </table>
                    <table>
                        <span>密码</span>
                        <input type="password" placeholder="请输入密码" v-model="loginParams.password">
                    </table>


                    <input id="login-button" type="button" value="登录" @click="login">
                </div>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                loginParams:{
                    phone: '',
                    password: '',
                },

                logindata: {code: 204, mess: "账号空", result: null}

            };
        },
        created: {

            // this:login(),
        },
        methods: {

            login: function () {

                if (this.loginParams.phone.length === 0) {
                    Toast('账号为空');
                    return
                }
                if (this.loginParams.password.length === 0) {
                    Toast('密码为空');
                    return
                }

                this.$post(this.$api.loginapi, this.loginParams)
                    .then((response) => {
                        console.log(response);
                        localStorage.setItem("token",response.result.token);
                        console.log( localStorage.getItem("token"));
                        if (response.code === 200){
                            this.$router.push({path: '/home'})
                        }

                    })

            }

        },

    }
</script>

<style scoped>
    .content {
        height: 100%;
        width: 100%;
        text-align: center;
        vertical-align: middle;
    }


    .login {
        width: 440px;
        height: 430px;
        box-shadow: 2px 2px 5px rgba(178, 178, 178, 0.11);
        border-radius: 3px;
        margin: auto;
        position: absolute;
        border-top: 3px solid #001030;
        color: #424242;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
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


        display: block;
        font-size: 22px;
    }

    /*福输入框*/
    .login-input {
        width: 360px;
        margin-top: 6px;
        margin-left: 40px;
        font-size: 14px;
        position: relative;
    }
    .login-input table{

    }
    .login-input input {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        width: 360px;

        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
    }

    .login-input span {
        float: left;
        margin-top: 50px;
    }

    .login-input input:focus {
        /*border-bottom: 1.5px solid #dbdbdb;*/
    }

    /*登录按钮*/
    #login-button {
        width: 360px;
        height: 42px;
        color: white;
        margin-top: 50px;
        border-radius: 21px;
        background-image: linear-gradient(90deg,
        rgb(0, 16, 48),
        rgba(4, 34, 118, 0.84));

    }

    #login-button:active {

        box-shadow: 2px 2px 5px rgba(178, 178, 178, 0.5);
    }
</style>