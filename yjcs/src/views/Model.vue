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
      return {
        
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
</style>
