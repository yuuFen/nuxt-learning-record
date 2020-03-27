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
  // @nuxtjs/axios 将 $axios 注入了上下文
  async asyncData({$axios, error}) {
    // 在 beforeCreate 之前执行
    // 所以不能使用 this 获取到组件实例
    // 得到一个上下文对象参数
    // 会和 data 合并，覆盖 data
    try {
      const {ok, goods} = await $axios.$get('/api/goods')
      // 首次：服务端输出；
      // 之后才在客户端请求
      console.log(goods)

      if (ok) {
        return {goods}
      }
      // 错误处理
      error({statusCode: 400, message: '数据查询失败'})
    } catch (error) {
      error(error)
    }
  },
  // data() {
  //   return {
  //     goods: [
  //       { id: 1, text: "1good1", price: 100 },
  //       { id: 2, text: "2good2", price: 200 },
  //       { id: 3, text: "3good3", price: 300 }
  //     ]
  //   };
  // }
};
</script>
