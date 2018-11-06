
<template>
  <section class="content">
    <p>{{ item.merchant_name }}</p>
    <p>{{ item.status_msg }}</p>
    <p>{{ item.contact }}</p>
    <p>{{ item.phone }}</p>
    <p>{{ item.student_info_status }}</p>
    <p>{{ item.id }}</p>
    <p>{{ item.created_at }}</p>
  </section>
</template>
<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return (function() {
      store.dispatch("fetchItem");
    })();
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
      return this.$store.state.item;
    }
  },
  mounted(){
    // this.$store.dispatch("fetchItem");
  }
};
</script>
<style lang="less" scoped>
.s {
  font-size: 20px;
  color: red;
}
</style>

