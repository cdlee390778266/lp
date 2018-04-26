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
import UserTpl from '@/components/admin/user/usertpl'
import User from '@/components/admin/user/user'
import Zc from '@/components/admin/user/zc'
import EnterpriseTpl from '@/components/admin/enterprise/enterprisetpl'
import Notice from '@/components/admin/enterprise/notice'
import Browsers from '@/components/admin/enterprise/browsers'
import Purchasers from '@/components/admin/enterprise/purchasers'
import Info from '@/components/admin/enterprise/info'

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
      path: '/goods/:id',
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
      path: '/dynamicDetail/:id',
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
    },
    {
      path: '/users',
      name: 'UserTpl',
      component: UserTpl,
      children: [
      	{
      		path: 'user',
      		component: User
      	},
      	{
      		path: 'zc',
      		component: Zc
      	},
      	{
      		path: '**',
      		component: User
      	}
      ]
    },
    {
      path: '/enterprises',
      name: 'EnterpriseTpl',
      component: EnterpriseTpl,
      children: [
      	{
      		path: 'notice',
      		component: Notice
      	},
      	{
      		path: 'browsers',
      		component: Browsers
      	},
      	{
      		path: 'purchasers',
      		component: Purchasers
      	},
      	{
      		path: 'info',
      		component: Info
      	},
      	{
      		path: '**',
      		component: Notice
      	}
      ]
    }
  ]
})
