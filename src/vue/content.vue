<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>

        <div id="didi-navigator">
            <span class="title">导航菜单</span>
            <div>
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        @select="selects"
                >
                    <img src="../images/exit.png"/>
                    <el-submenu index="1">
                        <template slot="title">
                            <img src="../images/system.png">
                            <span>系统管理</span>
                        </template>

                        <el-menu-item index="1-1">
                            <template slot="title">
                                <img src="../images/manager.png">
                                <span>管理员管理</span>
                            </template>
                        </el-menu-item>

                    </el-submenu>


                    <el-submenu index="2">
                        <template slot="title">
                            <img src="../images/manager.png">
                            <span>管理</span>
                        </template>

                        <el-menu-item index="2-1">
                            <template slot="title">
                                <img src="../images/video.png">
                                <span>视频管理</span>
                            </template>
                        </el-menu-item>

                        <el-menu-item index="2-2">
                            <template slot="title">
                                <img src="../images/adver.png">
                                <span>广告管理</span>
                            </template>
                        </el-menu-item>

                        <el-menu-item index="2-3">
                            <template slot="title">
                                <img src="../images/users.png">
                                <span>用户管理</span>
                            </template>
                        </el-menu-item>

                        <el-menu-item index="2-4">
                            <template slot="title">
                                <img src="../images/tousu.png">
                                <span>投诉管理</span>
                            </template>
                        </el-menu-item>


                    </el-submenu>


                </el-menu>
            </div>


        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

        data() {
            return {}
        },

        created:{
            push(){
                console.log('created');
                this.$route.push({
                    path: '/home/contentright',
                    query: {
                        id: ''
                    }
                })
            }
        },

        methods: {

            selects(key, keyPath) {
                console.log(key + "asdasdsdsa");
                switch (key) {

                    case '1-1':
                        this.push(key);

                        break;
                    default:
                        // console.log(key, keyPath+'sdasdasdas');

                        break
                }

            },
            push(key){

                this.$route.push({
                    path: '/home/contentright',
                    params: {
                        id: key
                    }
                })
            }


        }
    }
</script>

<style scoped>
    #didi-navigator {
        width: 230px;
        height: 100%;
        float: left;
        background: #222D32;
    }

    .title {
        display: block;
        width: 230px;
        line-height: 40px;
        background: #1A2226;
        color: white;
        font-size: 12px;
        padding-left: 20px;
        box-sizing: border-box;

    }


</style>