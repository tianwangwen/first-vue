import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout/layout'
import mainWrap from '@/pages/layout/mainWrap'
import index from '@/pages/main/index'
import home from '@/pages/main/home'
import games from '@/pages/main/games'
import num2048 from '@/pages/webview/2048'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainWrap',
      component: mainWrap,
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: index
        },
        {
          path: 'home',
          component: home
        },
        {
          path: 'games',
          component: games
        }
      ]
    },
    {
      path: '/game',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '2048',
          component: num2048
        }
      ]
    }
  ]
})
