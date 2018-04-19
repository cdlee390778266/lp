<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="login">
	     <div class="login_form">
	       <h1><a href="javascript:void(0)" id="login_menu">登录</a><a href="javascript:void(0)" id="logina_menu">管理员登录</a></h1>
	       <form action="" method="" id="login">
	         <p><input type="text" value=""  class="login_text1" placeholder="邮箱/昵称" /></p>
	         <p><input type="password" value="" placeholder="账户密码" class="login_text1"  id="log_pwd1"  /></p>
	         <div class="rem_p">
	           <router-link class="fright underline" to="/getPwd">忘记密码？</router-link>
	           <div class="remember">
	            <label for="remem"></label>
	             <input type="checkbox" name="" value="1" id="remem" />
	             记住用户名
	           </div>
	         </div>
	         <p class="center"><input type="submit" name="" value="登 录" class="green_a1" style="float:none" /></p>
	       </form>
	       <form action="" method="" id="logina">
	         <p><input type="text" value=""  class="login_text1" placeholder="邮箱/昵称" /></p>
	         <p><input type="password" value="" placeholder="账户密码" class="login_text1"  id="log_pwd2"  /></p>
	         <div class="rem_p">
	           <router-link class="fright underline" to="/getPwd">忘记密码？</router-link>
	           <div class="remembera">
	             <lable>
	               <input type="checkbox" name="" value="" />
	             </lable>
	             记住用户名
	           </div>
	         </div>
	         <p class="center"><input type="submit" name="" value="登 录" class="green_a1" style="float:none" /></p>
	       </form>
	     </div>
	     <div class="login_notice">
	       <div class="login_nt">
	         <p class="mart10"><span class="f1">还没有账号？</span></p>
	         <p class="mart40"><router-link class="green_a2" to="/register">注 册</router-link></p>
	       </div>
	       <p class="mart40">你也可以用站外账号登录</p>
	       <p class="mart40"><a href="" class="f1"><img src="/static/images/qq.png" height="37" width="36" alt="QQ登录"><br/>QQ登录</a></p>
	     </div>
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
