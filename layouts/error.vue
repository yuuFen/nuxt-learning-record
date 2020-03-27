<template>
  <!-- 错误页 -->
  <div>
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <p>{{ error }}</p>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  // 服务器会传递一个 error 对象
  props: ["error"],
  layout: "blank"
};
</script>

<style></style>
