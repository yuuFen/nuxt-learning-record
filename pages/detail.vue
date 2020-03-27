<template>
  <!-- 和detail文件夹重名，路由嵌套 -->
  <!-- 输出路由： -->
  <!-- 
  {
    path: "/detail",
    component: _5a66ee75,
    name: "detail",
    children: [{
      path: ":id?",
      component: _93173bd6,
      name: "detail-id"
    }]
  } 
  -->
  <div>
    <h2>Detail</h2>
    <!-- 路由出口 -->
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
