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
              <span>添加管理员账号</span>
             
            </div>
            <div  class="text item">
             <el-form status-icon :label-position="labelPosition" :model="ruleForm2"  :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm acc">
              <el-form-item label="用户名" prop="user">
                <el-input v-model="ruleForm2.user"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="添加用户组" prop="region">
                <el-select v-model="ruleForm2.region" placeholder="请选择用户组">
                  <el-option label="会员" value="shanghai"></el-option>
                  <el-option label="超级会员" value="beijing"></el-option>
                </el-select>
              </el-form-item>
             
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">添加</el-button>
                
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
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
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
            user:'',
            pass: '',
            checkPass: '',
            region:'',
          },
          rules2: {
            user:[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
            ],
            pass: [
              { validator: validatePass, required: true, message: '请输入密码', trigger: 'blur' },
              { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2,  trigger: 'blur' ,required: true,},
              
            ],
            region:[
              { required: true, message: '请选择用户组', trigger: 'change' }
            ]
           
          }
        };
      
      
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
      }
    },
  components:{
        Leftcontent,
        Rightbottom,
        Righttop
  }
  
};
</script>

<style>
.acc{
  text-align: left;
}
</style>
