<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="login">
	     <div class="login_form">
	       <el-tabs @tab-click="handleClick" value="user">
		    <el-tab-pane label="用户登录" name="user">
		    	<el-form :model="userForm" :rules="userRules" ref="userForm">
				  <el-form-item  prop="userName">
				    <el-input v-model="userForm.userName"></el-input>
				  </el-form-item>
				  <el-form-item  prop="userEmail">
				    <el-input v-model="userForm.userEmail"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-checkbox v-model="userForm.userRemember">记住用户名</el-checkbox>
				    <router-link class="fright forget" to="/getPwd">忘记密码？</router-link>
				  </el-form-item>
				  <el-form-item class="center">
				    <el-button type="primary" @click="submitForm('userForm')">登录</el-button>
				  </el-form-item>
				</el-form>
		    </el-tab-pane>
		    <el-tab-pane label="管理员登录" name="admin">
		    	<form action="" method="">
		         <p><input type="text" value=""  class="login_text1" placeholder="邮箱/用户名" /></p>
		         <p><input type="password" value="" placeholder="账户密码" class="login_text1"  id="log_pwd2"  /></p>
		         <div class="rem_p">
		           <router-link class="fright underline" to="/getPwd">忘记密码？</router-link>
		           <div class="remembera">
		             <label>
		               <input type="checkbox" name="" value="" />
		             </label>
		             记住用户名
		           </div>
		         </div>
		         <p class="center"><input type="submit" name="" value="登 录" class="green_a1" style="float:none" /></p>
		       </form>
		    </el-tab-pane>
		  </el-tabs>
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
      	userForm: {
      		type: 'user',
        	userName: '',
        	userEmail: '',
        	userRemember: false
        },
		userRules: {
		  userName: [
		    { required: true, message: '邮箱必填！', trigger: 'blur' },
		    { min: 5, message: '长度不得小于 5个字符', trigger: 'blur'}
		  ],
		  userEmail: [
		    { required: true, message: '密码必填！', trigger: 'blur' },
		    { min: 6, max: 20,message: '密码长度在 6 到 20 个字符', trigger: 'blur'}
		  ]
		}
    }
  },
  methods: {
  	handleClick() {

  	},
	submitForm(formName) {
		this.$refs[formName].validate((valid) => {
			if (valid) {
				alert('submit!');
			} else {
				console.log('error submit!!');
				return false;
			}
		});
	},
    
  }
}
</script>

<style>


</style>
