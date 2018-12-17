<template>
    <div id="didi-navigator">
        <span class="title">导航菜单</span>
        <div>
            <ul>
                <li v-for="(tab,index) in tabs" :key="index" @click="openclick(index)">
                    <span class="parent">{{ tab.text }} </span>
                    <ul v-for="tabsss in tab.tabss" v-if="tab.open">

                    <li>
                    <span class="childen">{{ tabsss.text }}</span>
                    </li>
                    </ul>
                </li>

            </ul>

        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                tabs: [
                    {
                        text: '系统管理',
                        open:false,
                        tabss: [
                            {text: '管理员管理'},

                        ]
                    },
                    {
                        open:false,
                        text: '管理',
                        tabss: [
                            {text: '管理员管理'},
                            {text: '管理员管理'},
                            {text: '管理员管理'},
                            {text: '管理员管理'},
                            {text: '管理员管理'},
                        ]
                    },

                ]

            }
        },
        methods:{
            openclick(index){
                this.tabs[index].open = !this.tabs[index].open;
            }
        }
    }
</script>

<style scoped>
    .title {
        display: block;
        width: 230px;
        height: 30px;
        line-height: 30px;
        background: #002330;
        color: white;
        font-size: 12px;
        padding-left: 10px;
        box-sizing: border-box;

    }
    .childen,
    .parent{
        padding-left: 10px;
        display: block;
        width: 230px;
        height: 30px;
        background: #002330;
        font-size: 12px;
        color: white;
        box-sizing: border-box;
    }
    .childen{
        padding-left: 20px;
    }
</style>