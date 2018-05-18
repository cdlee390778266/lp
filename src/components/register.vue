<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="login">
	     <div class="login_form">
	       <el-tabs value="user"  @tab-click="selectForm">
		    <el-tab-pane label="用户注册" name="user">
		    	<el-form :model="userForm" :rules="userRules" ref="userForm">
				  <el-form-item  prop="name">
				    <el-input v-model="userForm.name" placeholder="用户名"></el-input>
				  </el-form-item>
				  <el-form-item  prop="email">
				    <el-input v-model="userForm.email" placeholder="邮箱"></el-input>
				  </el-form-item>
				  <el-form-item  prop="pwd">
				    <el-input v-model="userForm.pwd" placeholder="密码"></el-input>
				  </el-form-item>
				  <el-form-item  prop="cpwd">
				    <el-input v-model="userForm.cpwd" placeholder="重复密码"></el-input>
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
				  <el-form-item  prop="email">
				    <el-input v-model="adminForm.email" placeholder="邮箱"></el-input>
				  </el-form-item>
				  <el-form-item  prop="pwd">
				    <el-input v-model="adminForm.pwd" placeholder="密码"></el-input>
				  </el-form-item>
				  <el-form-item  prop="cpwd">
				    <el-input v-model="adminForm.cpwd" placeholder="重复密码"></el-input>
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
  	var checkEmail = (rule, value, callback) => {
	  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	  if (!reg.test(value)) {
	    return callback(new Error('请输入正确的邮箱！'));
	  }else {
	    callback();
	  }
	};

    var validateConfirmPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));

        } else if (value !== this[this.selectedForm].pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

    return {
    	selectedForm: 'userForm',
      	userForm: {
      		type: 'user',
        	name: '',
        	email: '',
        	pwd: '',
        	cpwd: ''
        },
		userRules: {
		  name: [
		    { required: true, message: '用户名必填！', trigger: 'blur' },
		    { min: 5, message: '长度不得小于 5个字符', trigger: 'blur'}
		  ],
		  email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
		  pwd: [
		    { required: true, message: '密码必填！', trigger: 'blur' },
		    { min: 6, max: 20,message: '密码长度在 6 到 20 个字符', trigger: 'blur'}
		  ],
		  cpwd: { validator: validateConfirmPass, trigger: 'blur' }
		},
		adminForm: {
      		type: 'admin',
        	name: '',
        	email: '',
        	pwd: '',
        	cpwd: ''
        },
		adminRules: {
		  name: [
		    { required: true, message: '用户名必填！', trigger: 'blur' },
		    { min: 5, message: '长度不得小于 5个字符', trigger: 'blur'}
		  ],
		  email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
		  pwd: [
		    { required: true, message: '密码必填！', trigger: 'blur' },
		    { min: 6, max: 20,message: '密码长度在 6 到 20 个字符', trigger: 'blur'}
		  ],
		  cpwd: { validator: validateConfirmPass, trigger: 'blur' }
		}
    }
  },
  methods: {
  	selectForm(tab, event) {
        if(tab.name == 'user') {
        	this.selectedForm = 'userForm';
        }else {
        	this.selectedForm = 'adminForm';
        }
    },
  	checkRegister(registerData, loginUsers) {
  		var hasUser = false;
  		for(var i = 0; i < loginUsers[registerData.type].length; i++) {
  			if(loginUsers[registerData.type][i].email == registerData.email) {
  				hasUser = true;
  				break;
  			}
  		}
  		if(!hasUser) {
			var goUrl = '/users';
			this.$utils.showTip('104', 'success');
			this.$utils.setUser(registerData);
  		}else {
  			this.$utils.showTip('-1040', 'error', 'error');
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
				        this.checkRegister(this[formName], loginUsers)
				    })
				    .catch(err => {
				       console.log('login error');
				    })
				}else {
					this.checkRegister(this[formName], loginUsers);
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
