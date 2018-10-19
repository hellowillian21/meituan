import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './views/index/index.vue'
import Film from './views/film/film.vue'
import FilmDetail from './views/film/film-detail.vue'
Vue.use(MintUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path: "/", component: Index},
  {path: "/film", component: Film},
  {path: "/film-detail", component: FilmDetail}
]

// 创建route的实例
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
