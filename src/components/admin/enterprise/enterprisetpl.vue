<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="ent_cmenu mart40">
	     <ul>
	       <li><router-link to="/enterprises/notice" active-class="active">企业公告</router-link></li>
	       <li ><router-link to="/enterprises/browsers" active-class="active">浏览者公告</router-link></li>
	       <li ><router-link to="/enterprises/purchasers" active-class="active">采购商公告</router-link></li>
	       <li ><router-link to="/enterprises/c" active-class="active">学院信息</router-link></li>
	       <li ><router-link to="/enterprises/info" active-class="active">资讯动态</router-link></li>
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
