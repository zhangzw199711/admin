import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home.vue'
import sliderPath from './sliderPath'    //导入slider路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
         name:'首页',
         auth:false
      },
      component: home,
      children:sliderPath
    }
  ]
})
