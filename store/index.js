export const actions = {
  // 该只能出现在 index
  // 只在服务端执行一次
  // 这里用来在初始化的时候
  // 把 cookie 中的 token，填充到 vuex 中
  // 参数 2 是 nuxt 上下文
  nuxtServerInit({ commit }, { app }) {
    // 1. 获取 cookie（使用 cookie-universal-nuxt）
    console.log(app.$cookies);

    const token = app.$cookies.get("token");
    // 2. 写入 user 模块中
    if (token) {
      commit("user/init", token);
    }
  }
};
