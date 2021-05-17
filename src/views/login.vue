<template>
  <div class="login">
    <div class="login-box">
      
    <h4 v-if="loginOrRegister">用户注册</h4>
    <h4 v-else>用户登录</h4>
    <div class="form-box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        action="loginAndRegister"
        label-width="90px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号:" prop="username">
          <el-input
            @change="captcha()"
            v-model.number="ruleForm.username"
            autocomplete="off"
            prefix-icon="el-icon-user"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="loginOrRegister" label="验证码:" prop="useremail">
          <el-input
            
            v-model="ruleForm.yanzhengma"
            autocomplete="off"
            prefix-icon="el-icon-user"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            prefix-icon="el-icon-key"
            placeholder="请输入密码/验证码"
            show-password
            @keyup.enter.native="submitForm('ruleForm')"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="loginOrRegister" label="确认密码:" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            prefix-icon="el-icon-key"
            placeholder="请再次输入密码"
            show-password
            @keyup.enter.native="submitForm('ruleForm')"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="loginOrRegister" label="昵称:" >
          <el-input
            type="text"
            v-model="ruleForm.nickname"
            autocomplete="off"
            prefix-icon="el-icon-key"
            placeholder="请输入昵称"
            @keyup.enter.native="submitForm('ruleForm')"
          ></el-input>
        </el-form-item>
        <Vcode :show="isShow" @success="success" @fail="fails" @close="closeRe"/>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" @keyup.enter.native="submitForm('ruleForm')">
            <span v-if="loginOrRegister">注册</span>
            <span v-else>登录</span>
          </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button icon="el-icon-right" class="fright" @click="register">
            <span v-if="loginOrRegister">立即登录</span>
            <span v-else>立即注册</span>
          </el-button>
        </el-form-item>
      </el-form>
      <div class="hezuo" v-if="loginOrRegister==false">
        <div class="fleft"><el-button class="qq " circle></el-button>QQ</div>
        <div class="fright"><el-button class="weix " circle></el-button>微信</div>
        
        
      </div>
    </div>
    <!-- <el-form-item label="验证码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            prefix-icon="el-icon-key"
            show-password
          ></el-input>
        </el-form-item> -->
        
  </div>
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";
import instance, { request } from "../network/request";
export default {
  name: "login",
  components: { 
    Vcode
  },
  data() {
    var validateUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          
            callback();
          
        }
      }, 1000);
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    
    return {
      isShow: false, // 验证码模态框是否出现，
      photoHua:1,
      loginOrRegister:false,
      
      ruleForm: {
        username: "",
        yanzhengma:"",
        pass: "",
        checkPass: "",
        nickname:"",
      },
      rules: {
        username: [{ validator: validateUserName, trigger: "blur" }],
        yanzhengma: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },

    };
  },
  created(){

  },
  methods: {
    submitForm(formName) {
      
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isShow = true;
          
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //发送验证码
    captcha(){
      
      this.$http({
          url:"/captcha/sent?phone="+this.ruleForm.username+"",
          method:'get',
        }).then(res =>{
          console.log(res);
          if (res.data.code == 200) {
            this.$notify.success({
              message:"验证码发送成功",
              duration:5000
            })
          } else {
            this.$message({
            message: '验证码发送失败',
            type: 'warning'
            });
          }
        }).catch(err =>{
          console.log(err);
        })
    },
    // 成功的回调
    success(){
      this.isShow = false; // 通过验证后，关闭图片验证弹出框，让用户继续填写验证码

      //判断登录还是注册
      if (this.loginOrRegister) {
        this.$http({
          url:"/register/cellphone?phone="+this.ruleForm.username+"&password="+this.ruleForm.pass+"&captcha="+this.ruleForm.yanzhengma+"&nickname="+this.ruleForm.nickname+"",
          method:'post',
        }).then(res =>{
          console.log(res);
          if (res.data.code == 200) {
            this.$notify.success({
              title:"提示",
              message:"注册成功",
              duration:5000
            })
            this.$store.commit('userId',res.data.profile.userId)
            this.$store.commit('username',res.data.profile.nickname)
            this.$store.commit('token',res.data.token)
            this.$router.replace('/')
          } else {
            this.$message({
            message: '注册失败',
            type: 'warning'
            });
          }
        }).catch(err =>{
          console.log(err);
        })
      } else {
        this.$http({
          url:"/login/cellphone?phone="+this.ruleForm.username+"&password="+this.ruleForm.pass+"",
          method:'post',
        }).then(res =>{
          console.log(res);
          if (res.data.code == 200) {
            this.$notify.success({
              title:"提示",
              message:"登录成功",
              duration:5000
            })
            this.$store.commit('userId',res.data.profile.userId)
            this.$store.commit('username',res.data.profile.nickname)
            this.$store.commit('token',res.data.token)
            this.$router.replace('/')
          } else {
            this.$message({
            message: '账号密码错误',
            type: 'warning'
            });
          }
        }).catch(err =>{
          console.log(err);
        })
      }
      
      
      
      
    },
    //失败的回调，失败的逻辑是，用户失败指定次数之后，加入弹窗提示信息
    fails(){
      this.photoHua += 1;
      if(this.photoHua > 5){
        this.$message({
        message: '其实ψ(*｀ー´)ψ......你要是一直拼不成功，我会让你一直拼下去的哟...',
        type: 'warning'
        });
      }

    },

    //点击图片验证的背景部分事件
    closeRe(){
      this.$message({
          message: '请完成滑动验证，验证成功之后验证框会自动消失...(๑╹◡╹)ﾉ',
          type: 'warning'
      });
    },
    register(){
      if (this.loginOrRegister == false) {
        this.loginOrRegister = true
        
      } else {
        this.loginOrRegister = false
        
      }
    }
  },
  
};
</script>

<style lang="scss">
.login{
  width: calc(100% - 20px);
  height: 550px;
  min-height: 300px;
  // margin: 120px auto;
  padding: 10px;
  background-color: #f9f9f9;
}
.login-box {
  width: 600px;
  height: 550px;
  margin: 10px auto;
  background-color: #ffffff;
  
  .login-logo{
    width: 100px;
    height: 100px;
    margin: 0 auto 10px;
    
  }
  h4 {
    font-size: 30px;
    font-weight: normal;
    text-align: center;
    margin: 30px auto;
  }
  .form-box {
    width: 72%;
    height: 100%;
    margin: 0 auto;
    .el-input__icon {
      color: #00d20d;
      font-size: 22px;
    }
    .el-input__suffix {
      background-color: transparent;
    }
    .el-input__inner {
      width: 100% !important;
    }
    .hezuo{
      width: 79%;
      height: 30px;
      line-height: 30px;
      margin-top: 50px;
      margin-left: 90px;
      // background-color: red;
      .qq{
        background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png);
        background-repeat: no-repeat;
        background-position: -29px -1px;
        background-size: cover;
        width: 30px;
        height: 30px;
        margin-right: 6px;
        background-color: #0288d1;
      }
      .weix{
        background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-position: -134px -1px;
        background-size: cover;
        width: 30px;
        height: 30px;
        margin-right: 6px;
        background-color: #00d20d;
      }
    }
  }
}
</style>