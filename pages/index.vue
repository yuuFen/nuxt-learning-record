<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="`/detail/${good.id}`">{{ good.text }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  head() {
    // 配置 head
    return {
      title: "商品列表",
      meta: [
        { name: "description", hid: "description", content: "set page meta" }
      ],
      link: [{ rel: "favicon", href: "favicon.ico" }]
    };
  },
  data() {
    return {
      goods: [
        { id: 1, text: "1good1", price: 100 },
        { id: 2, text: "2good2", price: 200 },
        { id: 3, text: "3good3", price: 300 }
      ]
    };
  }
};
</script>
