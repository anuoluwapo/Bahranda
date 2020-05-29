import Vue from 'vue'
// import vueRouter from 'vue-router'
import App from './App.vue'
// import Login from './components/Login.vue'
// import Content from './components/Content.vue'

// vueRouter.use(vueRouter)
// const routes = [
//   {path: '/login', component: Login},
//   {path: '/', component: Content}
// ]
// const router = new vueRouter({
//   routes
// })
Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
