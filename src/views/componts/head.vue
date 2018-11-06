<template>
	<header>
		<div class="content">
			<h1>VUE-SSR</h1>
			<div>
				<router-link class="link" to="/comp1">组件1</router-link>
				<router-link class="link" to="/comp2">组件2</router-link>
			</div>
		</div>
	</header>
</template>
<style lang="less" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: #000;
  color: #fff;
  .content {
    h1 {
      font-size: 20px;
      line-height: 60px;
      float: left;
    }
    div {
	  float: left;
	  line-height: 60px;
	  padding-left: 50px;
    }
    a {
	  color: #fff;
	  margin-right: 20px;
    }
  }
}
</style>
