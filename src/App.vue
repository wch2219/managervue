<template>
    <div oncontextmenu="return false" onselectstart="return false" class="app">

            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    .app{
        width: 100%;
        height: 100%;
    }

</style>