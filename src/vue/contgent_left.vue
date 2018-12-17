<template>
    <div>
        <span class="title">导航菜单</span>
        <div>
            <ul>
                <li v-for="tab in tabs">
                    <span>{{ tab.text }}</span>

                </li>
                <!--<ul v-for="tabsss in tab.tabss">-->

                    <!--<li>-->
                        <!--<span>{{ tabsss.text }}</span>-->
                    <!--</li>-->
                <!--</ul>-->
            </ul>

        </div>
    </div>
</template>

<script>
    export default {

        data: {
            tabs: [
                {
                    text: '系统管理',
                    tabss: [
                        {text: '管理员管理'},

                    ]
                },
                {
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
</style>