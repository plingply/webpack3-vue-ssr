
<template>
  <section class="s">
    {{ item.merchant_name }}
    <p>组件12356</p>
    {{ item1.status_msg }}
    <div>
      <img src="public/img/logo-120.png" alt="">
    </div>
  </section>
</template>
<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return (function() {
      store.dispatch("fetchItem");
      store.dispatch("fetchItem1");
    })();
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
      return this.$store.state.item;
    },
    item1() {
      return this.$store.state.item1;
    }
  }
};
</script>
<style lang="less" scoped>
.s {
  font-size: 20px;
  color: red;
}
</style>

