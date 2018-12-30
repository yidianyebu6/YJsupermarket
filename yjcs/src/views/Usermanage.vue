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
        <el-table :data="tableData"  style="width: 100%">
            <el-table-column label="用户名称"  >
                <template slot-scope="scope">   
                    
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
            </el-table-column>
            <el-table-column label="用户组">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>超级贵族</p>
                    
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="管理">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
      
    
    
      
      
      
        


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
         tableData: [{
          date: '大表哥',
          name: '超级管理员',
          
        }]
    }
    
  },
  methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
