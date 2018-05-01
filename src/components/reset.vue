<template>
  <div>
    <div class="main g_bg padb40">
	  <div class="marcenter">
	   <div class="login" >
	   <div class="login_form" style="height:420px;">
	   	<h1><span style="color:#B2CD27">重置密码</span></h1>
	   	<el-form :model="resetForm" status-icon :rules="rules2" ref="resetForm" class="demo-ruleForm">
        <el-form-item prop="pass">
          <el-input type="password" v-model="resetForm.pass" auto-complete="off" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="resetForm.checkPass" auto-complete="off" placeholder="重复新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('resetForm')">提交</el-button>
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码！'));
        } else if(value.length < 6 || value.length > 20) {
          callback(new Error('新密码长度需在 6-20 位！'));
        }else {
          if (this.resetForm.checkPass !== '') {
            this.$refs.resetForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validateConfirmPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.resetForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        resetForm: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validateConfirmPass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$utils.$http.get('/static/data/home/business.json')
            .then(res => {
                this.$utils.showTip('102', 'success', 'success');
                this.$router.push('/reset');
            })
            .catch(err => {
                console.log(err)
            })
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
