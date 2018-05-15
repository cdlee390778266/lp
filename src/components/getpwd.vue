<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="login" >
	   <div class="login_form" style="height:420px;">
	   	<h1><span style="color:#B2CD27">忘记密码</span></h1>
	   	<el-form :model="getForm" status-icon :rules="rules" ref="getForm" class="demo-ruleForm">
		  <el-form-item prop="email">
			<el-input placeholder="邮箱" v-model="getForm.email">
			<el-button slot="append" @click="submitForm('getForm')">发送</el-button>
			</el-input>
		  </el-form-item>
		</el-form>
	   </div>
	   <div class="login_notice" style="height:400px;">
	   <div class="login_nt">
	   <p class="mart10"><a href="" class="f1">还没有账号？</a></p>
	   <p class="mart40"><a href="reg.html" class="green_a2">注 册</a></p>
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
    data() {
      var checkEmail = (rule, value, callback) => {
      	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!reg.test(value)) {
          return callback(new Error('请输入正确的邮箱！'));
        }else {
          callback();
        }
      };
      return {
        getForm: {
          email: ''
        },
        rules: {
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      checkEmail(email, loginUsers) {
        var isExistence = false;
        //检查邮件是否已注册
        if(email) {
          bbq:
          for(var key in loginUsers) {
            for(var i = 0; i < loginUsers[key].length; i++) {
              if(loginUsers[key][i].email == email) {
                isExistence = true;
                break bbq;
              }
            }
          }
        }
        if(isExistence) {
          this.$utils.showTip('102', 'success', 'success');
          this.$router.push({ name: 'Reset', params: { email: email }})
        }else {
          this.$utils.showTip('-1020', 'error', 'error');
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
                    this.checkEmail(this.getForm.email, loginUsers);
                })
                .catch(err => {
                   console.log('login error');
                })
            }else {
              this.checkEmail(this.getForm.email, loginUsers);
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
