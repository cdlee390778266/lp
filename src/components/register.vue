<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="login">
	     <div class="login_form">
	       <el-tabs value="user">
		    <el-tab-pane label="用户注册" name="user">
		    	<el-form :model="userForm" :rules="userRules" ref="userForm">
				  <el-form-item  prop="name">
				    <el-input v-model="userForm.name" placeholder="用户名"></el-input>
				  </el-form-item>
				  <el-form-item  prop="name">
				    <el-input v-model="userForm.name" placeholder="邮箱"></el-input>
				  </el-form-item>
				  <el-form-item  prop="pwd">
				    <el-input v-model="userForm.pwd" placeholder="密码"></el-input>
				  </el-form-item>
				  <el-form-item  prop="pwd">
				    <el-input v-model="userForm.pwd" placeholder="重复密码"></el-input>
				  </el-form-item>
				  <el-form-item class="center">
				    <el-button type="primary" @click="submitForm('userForm')">登录</el-button>
				  </el-form-item>
				</el-form>
		    </el-tab-pane>
		    <el-tab-pane label="企业注册" name="admin">
		    	<el-form :model="adminForm" :rules="adminRules" ref="adminForm">
				  <el-form-item  prop="name">
				    <el-input v-model="adminForm.name" placeholder="用户名"></el-input>
				  </el-form-item>
				  <el-form-item  prop="name">
				    <el-input v-model="adminForm.name" placeholder="邮箱"></el-input>
				  </el-form-item>
				  <el-form-item  prop="pwd">
				    <el-input v-model="adminForm.pwd" placeholder="密码"></el-input>
				  </el-form-item>
				  <el-form-item  prop="pwd">
				    <el-input v-model="adminForm.pwd" placeholder="重复密码"></el-input>
				  </el-form-item>
				  <el-form-item class="center">
				    <el-button type="primary" @click="submitForm('adminForm')">登录</el-button>
				  </el-form-item>
				</el-form>
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
import CONFIG from '../service/config';
export default {
  data () {
    return {
      	userForm: {
      		type: 'user',
        	name: '',
        	pwd: '',
        	remember: false
        },
		userRules: {
		  name: [
		    { required: true, message: '邮箱必填！', trigger: 'blur' },
		    { min: 5, message: '长度不得小于 5个字符', trigger: 'blur'}
		  ],
		  pwd: [
		    { required: true, message: '密码必填！', trigger: 'blur' },
		    { min: 6, max: 20,message: '密码长度在 6 到 20 个字符', trigger: 'blur'}
		  ]
		},
		adminForm: {
      		type: 'admin',
        	name: '',
        	pwd: '',
        	remember: false
        },
		adminRules: {
		  name: [
		    { required: true, message: '邮箱必填！', trigger: 'blur' },
		    { min: 5, message: '长度不得小于 5个字符', trigger: 'blur'}
		  ],
		  pwd: [
		    { required: true, message: '密码必填！', trigger: 'blur' },
		    { min: 6, max: 20,message: '密码长度在 6 到 20 个字符', trigger: 'blur'}
		  ]
		}
    }
  },
  methods: {
  	checkLogin(loginData, loginUsers) {
  		var isLogin = false;
  		var hasUser = false;
  		var isPwdCorrect = false;
  		for(var i = 0; i < loginUsers[loginData.type].length; i++) {
  			if(loginUsers[loginData.type][i].name == loginData.name) {
  				hasUser = true;
  				if(loginUsers[loginData.type][i].password == loginData.pwd) {
  					isPwdCorrect = true;
  				}
  				break;
  			}
  		}
  		if(hasUser) {
  			if(isPwdCorrect) {
  				var goUrl = '/users';
  				this.$utils.showTip('101', 'success');
  				this.$utils.setLogin(true);
  				if(loginData.type == 'admin') goUrl = '/enterprises'
  				loginData.isLogin = true;
  				this.$utils.setCookies(CONFIG.cookieKey, loginData);
  				setTimeout(() => {
  					this.$utils.hideTip();
  					this.$router.push(goUrl);
  				}, 1000)
  			}else {
  				this.$utils.showTip('-1011', 'error', 'error');
  			}
  		}else {
  			this.$utils.showTip('-1010', 'error', 'error');
  		}
  	},
	submitForm(formName) {
		this.$refs[formName].validate((valid) => {
			if (valid) {
				var loginUsers = this.$utils.getUsers();
				if(loginUsers.length <= 0) {
					this.$utils.$http.get('/static/data/login/login.json')
				    .then(res => {
				        loginUsers = res.data.data;
				        this.$utils.setUser(loginUsers);
				        this.checkLogin(this[formName], loginUsers)
				    })
				    .catch(err => {
				       console.log('login error');
				    })
				}else {
					this.checkLogin(this[formName], loginUsers);
				}
			} else {
				console.log('error submit!!');
				return false;
			}
		});
	}
  }
}
</script>

<style>


</style>
