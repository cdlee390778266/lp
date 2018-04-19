<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="login" >
	   <div class="login_form" style="height:420px;">
	   <h1><a href="javascript:void(0)" style="color:#B2CD27" id="reg_menu">用户注册</a><a href="javascript:void(0)" id="regq_menu" >企业注册</a></h1>
	   <form action="" method="" style="height:420px;" id="reg" >
	     <p><input type="text" value=""  class="login_text1" placeholder="邮箱/昵称" /></p>
	     <p><input type="text" value=""  class="login_text3" placeholder="请输入验证码" /><a href="" ><img src="/static/images/code.png" height="44" width="93" alt="验证码" /></a></p>
	     <p><input type="password" value="" placeholder="输入新密码" class="login_text1"  id="log_pwd3"  /></p>
	     <p class="center"><input type="submit" name="" value="注 册" class="green_a1" style="float:none" /></p>
	   </form>
	    <form action="" method="" style="height:420px;" id="regq" >
	     <p><input type="text" value=""  class="login_text1" placeholder="邮箱/店铺名" /></p>
	     <p><input type="text" value=""  class="login_text3" placeholder="请输入验证码" /><a href="" ><img src="/static/images/code.png" height="44" width="93" alt="验证码" /></a></p>
	     <p><input type="password" value="" placeholder="输入新密码" class="login_text1" id="log_pwd4"  /></p>
	     <p class="center"><input type="submit" name="" value="注 册" class="green_a1" style="float:none" /></p>
	   </form>
	   </div>
	   <div class="login_notice" style="height:400px;">
	   <div class="login_nt">
	   <p class="mart10"><span class="f1">已有账号</span></p>
	   <p class="mart40"><router-link to="/login" class="green_a2">登 录</router-link></p>
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
