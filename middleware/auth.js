export default function({ route, redirect, store }) {
  // 如果没有 token，则重定向到 login
  // vuex 存在浏览器的内存中，刷新后清空
  // 所以刷新时需要在服务端重新将 token 填充到 vuex 中（如果存在token）
  if (!store.state.user.token) {
    redirect("/login?redirect=" + route.path);
  }
}
