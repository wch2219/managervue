<template xmlns:overflow="http://www.w3.org/1999/xhtml">
    <div class="trans">
        <div class="content">
            <div class="content-left">
                <div class="content-left-head">


                    <span class="content-l-title">DOTBIT</span>
                    <hr class="content-l-title-hr">
                    <div class="table_title">

                        <span class="class_1">类别  <img src="../images/updown.png" alt=""></span>


                        <span class="price">价格 <img src="../images/updown.png" alt=""></span>


                        <span>涨跌 <img src="../images/updown.png" alt=""></span>

                    </div>
                    <div class="left-uldata-div">
                        <ul v-for="item in leftdata" class="left-uldata">
                            <li @click="seleteclass"><span>{{item.name}}</span> <span>{{item.price}}</span>
                                <span v-if="item.isup" style="color: red">{{item.pricelimit}}</span>
                                <span v-if="!item.isup" style="color: green">{{item.pricelimit}}</span>
                            </li>

                        </ul>
                    </div>
                </div>
                <!--left底部-->
                <div class="content-left-bottom">

                    <div class="content-left-bottom-title">
                        <span>数量</span>
                        <span>价格</span>
                    </div>
                    <ul v-for="item in leftbottomdatas">
                        <li>
                            <span v-if="item.type==1" style="color: green">卖</span>
                            <span v-if="item.type==2" style="color: red">买</span>
                            <span>{{item.price}}</span>
                            <span>{{item.num}}</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="content-right">
                <div class="content-right-title">
                    <span> {{righttitledata.name}}</span>
                    <span>{{righttitledata.price}}</span>

                    <span>涨幅:</span>
                    <span v-if="righttitledata.isup" style="color: red">{{righttitledata.updown}}</span>
                    <span v-if="!righttitledata.isup" style="color: green">{{righttitledata.updown}}</span>
                    <span>高:</span>
                    <span>{{righttitledata.height}}</span>
                    <span>低:</span>
                    <span>{{righttitledata.low}}</span>
                </div>

                <!--k线图-->
                <iframe src="../html.html" style="height: 420px;width: 925px; background-color:#fff;" frameborder="0"></iframe>
            </div>

        </div>
    </div>
</template>
<script>

    export default {
        name: "",
        data() {
            return {
                leftdata: [
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '-3.02%', isup: false},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '-3.02%', isup: false},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '-3.02%', isup: false},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},
                    {name: 'DOTC', price: 0.00002345, pricelimit: '+3.02%', isup: true},

                ],
                leftbottomdatas: [
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 1, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},
                    {type: 2, price: 0.000002145, num: 0.24},

                ],
                righttitledata: {
                    name: 'DOTC/UDT',
                    price: '6564.1212≈12454545',
                    updown: '+4.02%',
                    isup: true,
                    height: "39411.121",
                    low: '21411.21'
                },
            }
        },
        methods:{
            seleteclass(){
                console.log('adsdasdasdsa')
            }
        }
    }
</script>

<style scoped>
    .trans {
        width: 100%;
        height: 100%;
        background-color: #F8F8F8;
        padding-top: 1px;
        margin-top: 60px;
    }

    .content {
        width: 1820px;
        height: 1453px;
        margin-left: 42px;
        margin-top: 10px;
        /*background-color: #fff;*/
    }

    /*左侧*/
    .content-left {
        width: 437px;
        height: 983px;
        float: left;
    }

    .content-left-head {
        width: 437px;
        height: 548px;
        background-color: #fff;
        padding-top: 1px;

    }

    .content-l-title {
        display: block;
        font-size: 12px;
        width: 60px;
        text-align: center;
        height: 20px;
        background-color: #00A7FF;
        color: white;
        line-height: 20px;
        margin-left: 40px;
        margin-top: 15px;
    }

    .content-l-title-hr {
        border: 0px;
        height: 1px;
        margin-left: 20px;
        background-color: #00A7FF;
    }

    td {
        width: 100px;
        height: 30px;
    }

    .table_title {
        margin-left: 20px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #E0E0E0;
    }

    .class_1 {
        margin-left: 35px;
    }

    .table_title span {
        font-size: 12px;
    }

    .table_title img {
        margin-left: 35px;
    }

    .price {
        margin-left: 72px;
        margin-right: 60px;
    }

    .left-uldata-div {
        overflow: auto;
        height: 482px;
        background-color: #fff;
    }

    .left-uldata-div::-webkit-scrollbar { /*滚动条整体样式*/
        width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    .left-uldata-div::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.0);
        background: #dfdfdf;
    }

    .left-uldata-div::-webkit-scrollbar-track { /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.0);
        border-radius: 10px;
        background: #fff;
    }

    .left-uldata {
        margin-left: 20px;

    }

    .left-uldata li {
        height: 30px;
        width: 409px;
        line-height: 30px;
        border-bottom: 1px solid #E0E0E0;
        cursor: pointer;
    }

    .left-uldata li span {
        font-size: 12px;
        display: inline-block;
    }

    .left-uldata li span:nth-child(1) {
        width: 107px;
        text-align: center;
    }

    .left-uldata li span:nth-child(2) {
        width: 170px;
        text-align: center;
    }

    .left-uldata li span:nth-child(3) {
        width: 100px;
        text-align: center;
    }

    /*左侧底部*/
    .content-left-bottom {
        width: 437px;
        height: 717px;
        background-color: #fff;
        margin-top: 12px;
    }

    .content-left-bottom-title {
        width: 437px;
        height: 53px;
        line-height: 53%;
        border-bottom: 1px solid #E0E0E0;
    }

    .content-left-bottom-title span {
        display: inline-block;
        float: right;
        line-height: 53px;
        text-align: center;
        font-size: 14px;
    }

    .content-left-bottom-title span:nth-child(1) {
        width: 153px;
    }

    .content-left-bottom-title span:nth-child(2) {
        width: 153px;
    }

    .content-left-bottom li {
        height: 30px;
        border-bottom: 1px solid #E0E0E0;

    }

    .content-left-bottom li span {
        line-height: 30px;
        font-size: 12px;
        display: inline-block;
        text-align: center;
    }

    .content-left-bottom li span:nth-child(1) {
        width: 150px;
    }

    .content-left-bottom li span:nth-child(2) {
        width: 100px;
    }

    .content-left-bottom li span:nth-child(3) {
        float: right;
        width: 150px;
    }

    .content-right {
        float: right;
        width: 1370px;
        height: 1453px;
    }

    .content-right-title {
        height: 62px;
        background-color: #fff;
    }

    .content-right-title span {
        display: inline-block;
        text-align: center;
        line-height: 62px;
    }

    .content-right-title span:nth-child(1) {
        margin-left: 30px;
        font-size: 16px;
    }

    .content-right-title span:nth-child(2) {
        margin-left: 70px;
        font-size: 16px;
    }

    .content-right-title span:nth-child(3) {
        margin-left: 70px;
        font-size: 16px;
    }

    .content-right-title span:nth-child(5),
    .content-right-title span:nth-child(7) {
        margin-left: 10px;
        font-size: 16px;
    }

</style>