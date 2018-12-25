<template>
        <div class="contentright">

            <header class="contentright-head">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item > &nbsp 首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{type}}</el-breadcrumb-item>

                </el-breadcrumb>
            </header>
            <router-view></router-view>
        </div>
</template>

<script>
    export default {
        name: "",
            data:{

            type:''

            },
        created:{
           get(){

              this.type = this.$route.querry.id;
            console.log(type+"dasdasd")

           }

        }
    }
</script>

<style scoped>

    .contentright{



    }
    .contentright-head{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #ECF0F5;

        vertical-align: middle;
    }

    .contentright-head span{
        display: inline-block;
        line-height: 40px;
        font-size: 13px;
    }
</style>