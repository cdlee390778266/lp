<template>
  <div>
    <div id="head">
	    <div class="head_t">
	      <div class="head_tm">
	        您好，欢迎来到梁平 <span class="marl20">请</span><router-link to="/login" class="f2">登录</router-link> <router-link to="/register" class="f1 marl20">注册</router-link>
	        <a href="" class="fright f1">客服服务</a>
	      </div>
	    </div>
	    <div class="head_b">
	     <div class="logo"><a href="index.html"><img src="/static/images/logo.png" height="75" width="202" alt="梁平" /></a></div>
	     <ul class="nav">
	       <li><router-link to="/home">首页<br/>Home</router-link></li>
	       <li><router-link to="/news">新品快订<br/>News</router-link></li>
	       <li><router-link to="/chareacteristic">特色货源<br/>Chareacteristic</router-link></li>
	       <li><router-link to="/dynamic">资讯动态<br/>Dynamic</router-link></li>
	       <li><router-link to="/institute">梁平学院<br/>Institute</router-link></li>
	     </ul>
	     <form action="" method="">
	       <select name="" id="s_cat" >
	         <option value="商品">商品</option>
	         <option value="企业">企业</option>
	         <option value="采购">采购</option>
	       </select>
	       <div class="s_type">
	         <h3 id="s_check">商品</h3>
	         <a href="javascript:void()" class="f1" id="search_slidemenu">∨</a>
	       </div>
	       <ul id="search_slide">
	        <li>商品</li>
	        <li>企业</li>
	        <li>采购</li>
	      </ul>
	      <input type="text" value="" class="s_txt" />
	      <input type="submit" value=" " class="s_smt" /> 
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
      checked: true
    }
  }
}
</script>

<style>


</style>
