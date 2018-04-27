import Vue from 'vue'
import axios from './http'

import store from '../store/vuex'

Vue.prototype.$store = store;

var Utils = {}

Utils.addCart = function(goods) {
  store.dispatch('addToCart', Object.assign({}, goods))
}


Utils.$http = axios

export default Utils