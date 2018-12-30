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
          <!-- 页头 -->
          <div slot="header" class="clearfix">
            <span>系统信息</span>
          </div>
          <!-- 内容 -->
          <div class="text item">
            <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
            <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix hanggao">
                      <span>销售排行</span>
                    </div>
                    <div class="text item">
                      <!-- 表格 -->
                      <el-table :data="tableData" stripe  style="width: 100%">
 
                        <el-table-column prop="date" label="商品名称" >
                          
                        </el-table-column> 
  
                        
  
                        <el-table-column prop="address"  label="销量">
                          
                        </el-table-column> 
                        
                      </el-table>
                    </div>
                  </el-card>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                <el-card class="box-card">
                    <div slot="header" class="clearfix hanggao">
                      <span>缺货商品</span>
                      
                    </div>
                    <div class="text item">
                      <!-- 表格 -->
                      <el-table :data="lackData" stripe  style="width: 100%">
 
                        <el-table-column prop="date" label="商品名称" >
                          
                        </el-table-column> 
  
                        
  
                        <el-table-column prop="address"  label="库存">
                          
                        </el-table-column> 

                        <el-table-column prop="Putaway"  label="入存">
                          
                        </el-table-column>
                        
                      </el-table>
                    </div>
                  </el-card>
                
                </div>
              </el-col>
            </el-row>
              
            
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
      return {
        tableData: [
                    {date: '龙凤呈祥',address: '8'},
                    {date:'茅台',address:'12'},
                    {date:'海飞丝',address:'24'},
                    {date:'尔康',address:'17'} 
                  ],
        lackData:[
                    {date: '龙凤呈祥',address: '8',Putaway:''},
                    {date:'茅台',address:'12',Putaway:''},
                    {date:'海飞丝',address:'24',Putaway:''}
        ]
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
