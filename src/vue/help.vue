<template>
    <div class="content">
        <div class="help">
            <div class="help-left">
                <ul>
                    <li class="h-l-li">
                        <h4>
                            常见问题
                        </h4>
                        <ul class="h-l-li-ul">
                            <li><span></span><a href="#">账户问题</a></li>
                            <li><span></span><a href="#">转入转出</a></li>
                            <li><span></span><a href="#">关于交易</a></li>
                        </ul>
                    </li>

                    <li class="h-l-li">
                        <h4>
                            官方公告
                        </h4>
                        <ul class="h-l-li-ul">
                            <li><span></span><a href="#">关于DOTBIT上线公告</a></li>
                            <li><span></span><a href="#">关于开放DOTBIT交易公告</a></li>
                            <li><span></span><a href="#">关于服务器扩容通信</a></li>
                        </ul>
                    </li>
                    <li class="h-l-li">
                        <h4>
                            常见问题
                        </h4>
                        <ul class="h-l-li-ul">
                            <li><span></span><a href="#">账户问题</a></li>
                            <li><span></span><a href="#">转入转出</a></li>
                            <li><span></span><a href="#">关于交易</a></li>
                        </ul>
                    </li>
                    <li class="h-l-li">
                        <h4>
                            常见问题
                        </h4>
                        <ul class="h-l-li-ul">
                            <li><span></span><a href="#">账户问题</a></li>
                            <li><span></span><a href="#">转入转出</a></li>
                            <li><span></span><a href="#">关于交易</a></li>
                        </ul>
                    </li>
                    <li class="h-l-li">
                        <h4>
                            常见问题
                        </h4>
                        <ul class="h-l-li-ul">
                            <li><span></span><a href="#">账户问题</a></li>
                            <li><span></span><a href="#">转入转出</a></li>
                            <li><span></span><a href="#">关于交易</a></li>
                        </ul>
                    </li>
                    <li class="h-l-li">
                        <h4>
                            常见问题
                        </h4>
                        <ul class="h-l-li-ul">
                            <li><span></span><a href="#">账户问题</a></li>
                            <li><span></span><a href="#">转入转出</a></li>
                            <li><span></span><a href="#">关于交易</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="help-right">
                <h4>分类目录</h4>
                <hr>
                <ul class="help-r-ul">
                    <li><a href="#">常见问题(3)</a></li>
                    <li><a href="#">官方公告(3)</a></li>
                    <li><a href="#">平台相关(3)</a></li>
                    <li><a href="#">法律条约(3)</a></li>
                    <li><a href="#">众筹资讯(3)</a></li>
                    <li><a href="#">服务支持(3)</a></li>
                </ul>
                <hr>
                <h4>最新资讯</h4>
                <hr>
                <ul class="help-r-ul">
                    <li><a href="#">DOTBIT国际早报</a></li>
                    <li><a href="#">DOTBIT重新支持比特币支付，未来或支持以太坊或莱特币</a></li>
                    <li><a href="#">平台相关(3)</a></li>
                    <li><a href="#">法律条约(3)</a></li>
                    <li><a href="#">众筹资讯(3)</a></li>
                    <li><a href="#">服务支持(3)</a></li>
                </ul>
            </div>
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
    .content {
        width: 100%;
        height: 100%;
        background-color: #F8F8F8;
        padding-top: 1px;

    }

    .help {
        width: 1200px;
        height: 770px;
        margin: 135px auto;
    }

    .help-left {
        width: 880px;
        height: 770px;
        background-color: #fff;
        box-sizing: border-box;
        float: left;
        padding-left: 48px;
        padding-top: 35px;
        box-shadow: 2px 2px 6px rgba(178, 178, 178, 0.11);
    }

    .help-right {
        width: 300px;
        height: 770px;
        float: right;
        background-color: #fff;
        box-sizing: border-box;
        box-shadow: 2px 2px 6px rgba(178, 178, 178, 0.11);
    }

    .h-l-li {
        width: 380px;
        height: 192px;
        border: 1px solid #E6E6E6;
        float: left;
        margin-right: 24px;
        margin-bottom: 20px;
        font-weight: normal;

    }

    .h-l-li h4 {
        font-size: 14px;
        color: #00A7FF;
        font-weight: normal;
        margin-top: 22px;
        margin-left: 20px;
    }

    .h-l-li-ul {
        margin-left: 22px;
        margin-top: 20px;
        line-height: 16px;
        height: 12px;
        vertical-align: center;
    }
    .help-r-ul li,
    .h-l-li-ul li {
        background:url("../images/bluedot.png") no-repeat 0rem 0.3rem;
        line-height: 14px;
    }

    .h-l-li-ul a {
        font-size: 12px;
        line-height: 14px;
        color: #00A7FF;
        margin-left: 5px;
        line-height: 16px;
    }
    .help-right h4{
        font-weight: normal;
        font-size: 16px;
        color: #424242;
        margin-left: 20px;
        line-height: 56px;
        display: block;

    }
    hr{
        border: 0px;
        height: 1px;
        background-color: #E2E2E2;
    }
    .help-r-ul{
        margin-left: 42px;
        margin-top: 20px;
    }
    .help-r-ul li{
        margin-bottom: 15px;
    }
    .help-r-ul li a{
        font-size: 14px;
        color: #424242;
        margin-left: 5px;
       margin-bottom: 15px;
    }
</style>