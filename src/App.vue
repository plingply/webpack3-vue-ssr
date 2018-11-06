<template>
    <div id="app" data-server-rendered="true">
        <head-compontent></head-compontent>
        <router-view class="view"></router-view>
    </div>
</template>
<script>
import headCompontent from "./views/componts/head.vue"
export default {
    components:{
        headCompontent
    }
}
</script>

<style lang="less">
@import "./style/index.less";
</style>
