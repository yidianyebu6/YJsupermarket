<template>
  <div class="home">
    <el-card class="box-card dl">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm qufen">

          <el-form-item label="账号" prop="text">
            <el-input type="password" v-model="ruleForm2.text" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="Pass">
            <el-input type="password" v-model="ruleForm2.Pass" autocomplete="off"></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" class="btn">登录</el-button>
            <el-button @click="resetForm('ruleForm2')" class="btn">重置</el-button>
          </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>



export default {
  name: 'home',
  data() {
      return {
        ruleForm2: {
          text: '',
          Pass: '',
          
        },
        rules2: {
          text: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' }
          ],
          Pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' }
          ],
          
        }
      };
    },
    methods: {
      //提交表单的方法
      submitForm(formName) {
        //调用组件的验证方法提交表单
        this.$refs[formName].validate((valid) => {
          //valid参数表示验证结果，true验证通过，false验证失败
          if (valid) {
            //验证成功
            alert('登录成功');
          } else {

            alert('请重新输入');
            return false;
          }
        });
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
  .text {
      font-size: 14px;
    }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
  
  .home{
    width: 100%;
    height: 100%;
     background: url("../../public/images/beijingtu.jpg");
    background-size: 100% /**/
    }
  .home .box-card{
    width: 500px;
    height: 205px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  } 
  .btn{
    margin-left: 60px !important;
  }
  .dl{
    background: url("../../public/images/5594.jpg")
  }
  .qufen{
    padding: 20px 20px 0 0 !important;
  }
</style>
