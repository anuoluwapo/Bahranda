import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)

import Login from './components/Login.vue'
import Content from './components/Content.vue'
import DashboardTemplate from './components/DashboardTemplate.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Content },
    { path: '/login', component: Login },
    { path: '/home', component: Content },
    { path: '/dashboard', component: DashboardTemplate }
  ]
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
