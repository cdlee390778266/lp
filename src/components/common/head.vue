<template>
  <div class="lp-head">
    <div id="head">
	    <div class="head_t">
	      <div class="head_tm">
	        您好，欢迎来到梁平 <span class="marl20">请</span><router-link to="/login" class="f2">登录</router-link> <router-link to="/register" class="f1 marl20">注册</router-link>
	        <router-link to="/home" class="fright f1">客服服务</router-link>
	      </div>
	    </div>
	    <div class="head_b">
	     <div class="logo"><router-link to="/home"><img src="/static/images/logo.png" height="75" width="202" alt="梁平" /></router-link></div>
	     <ul class="nav">
	       <li><router-link to="/home" active-class="active">首页<br/>Home</router-link></li>
	       <li><router-link to="/news" active-class="active">新品快订<br/>News</router-link></li>
	       <li><router-link to="/chareacteristic" active-class="active">特色货源<br/>Chareacteristic</router-link></li>
	       <li><router-link to="/dynamic" active-class="active">资讯动态<br/>Dynamic</router-link></li>
	       <li><router-link to="/institute" active-class="active">梁平学院<br/>Institute</router-link></li>
	     </ul>
	     <form action="" method="">
	       <div class="s_type" @click="slide">
	         <h3 id="s_check">{{slideVal.txt}}</h3>
	         <a href="javascript:void(0);" class="f1" id="search_slidemenu">∨</a>
	       </div>
	       <ul id="search_slide" v-show="isShowSlide" v-if="slideOpts.length">
	        <li @click="selectSlide(item)" v-for="item in slideOpts">{{item.txt}}</li>
	      </ul>
	      <input type="text" value="" class="s_txt" v-model="searchVal"/>
	      <router-link :to="{name: 'Search', params: { stype: slideVal.type, 'searchVal': searchVal }}" class="s_smt" ></router-link>
	    </form>
	  </div>  
	</div>
  </div>
</template>

<script>
export default {
  name: 'LpHead',
  data () {
    return {
      checked: true,
      isShowSlide: false,
      slideVal: '',
      searchVal: '',
      slideOpts: [
      	{txt: '商品', type: 1},
      	{txt: '企业', type: 2},
      	{txt: '采购', type: 3}
      ]
    }
  },
  methods: {
  	slide() {
  		this.isShowSlide = !this.isShowSlide;
  	},
  	selectSlide(item) {
  		this.isShowSlide = false;
  		this.slideVal = item;
  	}
  },
  created() {
  	this.slideVal = this.slideOpts[0];
  }
}
</script>

<style>
	.lp-head {
		position: relative;
		z-index: 9;
	}
</style>
