import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Register from '@/components/register'
import GetPwd from '@/components/getpwd'
import News from '@/components/news'
import Flow from '@/components/flow'
import Goods from '@/components/goods'
import Shop from '@/components/shop'
import Chareacteristic from '@/components/chareacteristic'
import Dynamic from '@/components/dynamic'
import DynamicDetail from '@/components/dynamic_detail'
import Institute from '@/components/institute'
import Search from '@/components/search'
import SearchCmp from '@/components/search_cmp'
import SearchShop from '@/components/search_shop'
import Cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/getPwd',
      name: 'GetPwd',
      component: GetPwd
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/flow',
      name: 'Flow',
      component: Flow
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/chareacteristic',
      name: 'Chareacteristic',
      component: Chareacteristic
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/dynamicDetail',
      name: 'DynamicDetail',
      component: DynamicDetail
    },
    {
      path: '/institute',
      name: 'Institute',
      component: Institute
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/searchCmp',
      name: 'SearchCmp',
      component: SearchCmp
    },
    {
      path: '/searchShop',
      name: 'SearchShop',
      component: SearchShop
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
