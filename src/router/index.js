import Vue from 'vue'
import VueRouter from 'vue-router'
import CommonUse from '../components/CommonUse.vue'
import UserInfo from '../components/UserInfo.vue'
import Set from '../components/Set.vue'

Vue.use(VueRouter)

const routes = [
  {path: "/commonUse", component: CommonUse},
  {path: "/userInfo", component: UserInfo},
  {path: "/set", component: Set},
]

const router = new VueRouter({
  routes
})

export default router
