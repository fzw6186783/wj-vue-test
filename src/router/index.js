import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import LibraryIndex from "../components/library/LibraryIndex";
import register from "../components/register";

Vue.use(Router)

export default new Router({
  mode: 'history',//去除#
  routes: [
    // 下面都是固定的写法
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [

        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true// 表 示是否需要登录验证
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]

    },
    {
      path: '/login',
      name: 'Login',
      component: Login



    },
    {
      path: '/register',
      name: 'Register',
      component: register
    }

  ]
})

