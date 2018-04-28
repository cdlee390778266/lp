import Vue from 'vue'
import { Loading, Message } from 'element-ui'
import axios from './http'
import VueCookies from 'vue-cookies'
import CONFIG from './config';

import store from '../store/vuex'

Vue.prototype.$store = store;

var utils = {}

utils.addCart = function(goods) {
  store.dispatch('addToCart', Object.assign({}, goods))
}

utils.setUser = function(user) {
	store.dispatch('setUser', Object.assign({}, user))
}

utils.getUsers = function() {
	return store.getters.getUsers;
}

utils.getText = function(code, type) {
	return CONFIG[type][code];
}

utils.showTip = function(code, codeType, tipType) {
	Message({
	    showClose: true,
	    message: utils.getText(code, codeType),
	    type: tipType ? tipType : 'success'
	});
}

utils.hideTip = function() {
	Message.close();
}

utils.setLogin = function(bool) {
	store.dispatch('setLogin', bool);
}

utils.getCookies = function(key) {
	return JSON.parse(VueCookies.get(key));
}

utils.setCookies = function(key, data) {
	var date = new Date;
	date.setDate(date.getDate() + 2);
	VueCookies.set(key, JSON.stringify(data), date)
}

utils.removeCookies = function(key) {
	VueCookies.remove(key);
}

utils.$http = axios

export default utils