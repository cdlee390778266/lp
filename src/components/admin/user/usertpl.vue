<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="ent_cmenu mart40">
	     <ul>
	       <li><router-link to="/users/user" active-class="active">个人资料</router-link></li>
	       <li ><router-link to="/users/a" active-class="active">店铺信息</router-link></li>
	       <li><router-link to="/users/b" active-class="active">上传商品</router-link></li>
	       <li ><router-link to="/users/c" active-class="active">订单信息</router-link></li>
	       <li ><router-link to="/users/d" active-class="active">安全管理</router-link></li>
	       <li><router-link to="/users/e" active-class="active">消息中心</router-link></li>
	       <li><router-link to="/users/zc" active-class="active">公告与政策</router-link></li>
	     </ul>
	   </div>
	   <div class="ent_box4 mart40" >
	   	<transition name="fade">
		    <router-view/>
		</transition>
	   </div>
	</div>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>


</style>
