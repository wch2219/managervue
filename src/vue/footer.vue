<template>
    <footer>
        <div class="footer-top">


        <img src="../images/logo_big.png" alt="">
        <div class="right">

            <div class="footer-l">
                <span>关于</span>
                <ul>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">关于DOTBIT</a></li>
                    <li><a href="#">费率声明</a></li>
                </ul>
            </div>
            <div class="footer-c">
                <span>法律</span>
                <ul>
                    <li><a href="#">服务协议</a></li>
                    <li><a href="#">隐私协议</a></li>

                </ul>
            </div>

            <div class="footer-r">
                <span>支持</span>
                <ul>
                    <li><a href="#">公告</a></li>
                    <li><a href="#">提交工单</a></li>
                    <li><a href="#">上币申请</a></li>
                </ul>
            </div>
        </div>

        </div>

        <div class="footer-bottom">DBT国际数字交易所</div>
    </footer>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    footer{

        height: 300px;
        width: 100%;
        bottom: 0px;
    }
    .footer-top{

        height: 236px;
        width: 100%;
        background-color: #262839;
        border-top: 3px solid #00A7FF;


    }
    img{

       margin-top: 46px;
        margin-left: 30px;
    }
    .right{
        float: right;
        text-align: center;
        vertical-align: middle;
       margin-top: 35px;

    }
    .footer-l,
    .footer-c,
    .footer-r{
        float: left;
        margin-right: 118px;
        color: white;
        font-size: 13px;
        height: 26px;
        display:inline-block
    }

    .footer-l span,
    .footer-c span,
    .footer-r span
    {
        color: white;
        font-size: 14px;
        float: left;
        margin-bottom: 15px;
    }
    ul{

    }
    a{
        color: white;
        float: left;
        font-size: 10px;
        margin-bottom: 10px;
    }

    .footer-bottom{
        height: 64px;
        width: 100%;
        background-color: #262839;
        text-align: center;
        line-height: 50px;
        color: white;
        font-size: 10px;
        border-top: 1px solid white;
    }
</style>