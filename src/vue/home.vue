<template>
    <div>
        <div>
            <header class="head">
                <title>系统管理系统</title>

                <div class="head-menu">
                    <div class="menu">
                    <img src="../images/menu.png">
                    </div>
                    <span>欢迎管理平台</span>
                </div>

                <div class="head-right">
                    <div class="head-right-exit">
                        <img src="../images/exit.png">
                        <span>退出登录</span>
                    </div>
                    <div class="head-right-pwd">
                        <img src="../images/password.png">
                        <span>修改密码</span>
                    </div>
                </div>
            </header>
        </div>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    .head{
        width: 100%;
        height: 50px;
        background: #002330;
    }
    .head title{
        width: 230px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        background: #001030 repeat;
        color: white;
        float: left;
        display: block;

    }
    .head-menu{
        float: left;
        line-height: 50px;
        color: white;
        vertical-align: middle;
        font-size: 12px;
    }
    .menu{
        float: left;
        height: 50px;
        width: 40px;
        text-align: center;
        background: #002330;
    }
    .menu img{
        vertical-align: middle;
    }

    .menu:focus{
        background: #001030;
    }
     .menu:active{
        background: #001030;
    }

    .head-menu span{
        margin-left: 20px;
    }
    .head-right{
        float: right;
    }
    .head-right-exit,
    .head-right-pwd{
        float: right;
        width: 100px;
        height: 50px;
        color: white;
        line-height: 50px;
        font-size: 12px;
        text-align: center;
    }

    .head-right-pwd:active{

        background: #001030;
    }
    . .head-right-exit:focus{
        background: #001030;
    }
   img{
        vertical-align: middle;
    }
</style>