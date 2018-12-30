<template>
  <el-container id='index'>
        <!-- 左侧 -->
        <Leftcontent></Leftcontent>
      
        <!-- 右侧 -->
    <el-container id="naoketong">
      <!-- 头部 -->
      <Righttop></Righttop>
      <!-- 躯体 -->
      
      <el-main>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>修改密码</span>
            </div>
            <div class="text item">
              <el-form :model="ruleForm2" :label-position="labelPosition" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm directionL">
                <el-form-item label="旧密码:" prop="wornPass">
                  <el-input type="password" v-model="ruleForm2.wornPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码:" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
              
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">修改</el-button>
                  
                </el-form-item>
              </el-form>
            </div>
          </el-card>

        
        

      </el-main>
      <!-- 页脚 -->
      <Rightbottom></Rightbottom>
    </el-container>

  </el-container>
</template>

<script>
import Leftcontent from '../components/Leftcontent';
import Rightbottom from '../components/Rightbottom';
import Righttop from '../components/Righttop';

export default {
  data() {
     var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入旧密码'));
        } else {
          
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        labelPosition: 'top',
        ruleForm2: {
          pass: '',
          checkPass: '',
          wornPass:'',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          wornPass: [
            { validator: validatePass3, trigger: 'blur' }
          ],
         
        }
    }
  },
  methods: {
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
     
    },
  components:{
        Leftcontent,
        Rightbottom,
        Righttop
  }
};
</script>

<style>
.directionL{
  text-align: left
}
</style>
