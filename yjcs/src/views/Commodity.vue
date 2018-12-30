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
            <span>商品管理</span>  
          </div>
          <div class="text item">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item >
                  <el-select v-model="formInline.region" placeholder="------------选择分类------------">
                    <el-option label="生活类" value="shenhuo"></el-option>
                    <el-option label="家具类" value="jiaju"></el-option>
                  </el-select>
                </el-form-item>


                <el-form-item label="关键字" >
                  <el-input v-model="formInline.user" ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
              </el-form>


              <el-table :data="tableData"  style="width: 100%">
                
                  <el-table-column label="商品条形码" width="100px" >
                      <template slot-scope="scope">    
                          <span style="margin-left: 10px">{{ scope.row.shape }}</span>
                        </template>
                  </el-table-column>

                  <el-table-column label="商品名称"  >
                      <template slot-scope="scope">    
                          <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                  </el-table-column>

                  <el-table-column label="所属分类" width="90px" >
                      <template slot-scope="scope">    
                          <span style="margin-left: 10px">{{ scope.row.classify }}</span>
                        </template>
                  </el-table-column>

                  <el-table-column label="售价（元）" width="90px" >
                      <template slot-scope="scope">    
                          <span style="margin-left: 10px">{{ scope.row.price }}</span>
                        </template>
                  </el-table-column>

                  <el-table-column label="促销价" width="90px" >
                      <template slot-scope="scope">    
                          <span style="margin-left: 10px">{{ scope.row.promotion }}</span>
                        </template>
                  </el-table-column>

                  <el-table-column label="市场价" width="90px" >
                      <template slot-scope="scope">    
                          <span style="margin-left: 10px">{{ scope.row.market }}</span>
                        </template>
                  </el-table-column>

                  <el-table-column label="库存" width="90px" >
                      <template slot-scope="scope">    
                          <span style="margin-left: 10px">{{ scope.row.repertory }}</span>
                        </template>
                  </el-table-column>

                  <el-table-column label="库存总额" width="90px" >
                      <template slot-scope="scope">    
                          <span style="margin-left: 10px">{{ scope.row.total }}</span>
                        </template>
                  </el-table-column>

                  <el-table-column label="销售总额" width="90px">
                      <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.sellTotal }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column label="管理">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
              </el-table>

              <div class="block">
                <span class="demonstration"></span>
                <el-pagination
                  layout="prev, pager, next"
                  :total="1000">
                </el-pagination>
              </div>

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
        formInline: {
          user: '',
          region: ''
        },
        tableData: [
          {
          shape: '21124',
          name: '尔康',
          classify: '生活用品',
          price:'24',
          promotion:'12',
          market:'60',
          repertory:'1',
          total:'1520',
          sellTotal:'1000',
        },
        {
          shape: '21124',
          name: '尔康',
          classify: '生活用品',
          price:'24',
          promotion:'12',
          market:'60',
          repertory:'1',
          total:'1520',
          sellTotal:'1000',
        },{
          shape: '21124',
          name: '尔康',
          classify: '生活用品',
          price:'24',
          promotion:'12',
          market:'60',
          repertory:'1',
          total:'1520',
          sellTotal:'1000',
        }
        ]
        
    }
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      },
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
.text{
  text-align: left
}
.cell{
  padding: 0;
}
.el-pagination{
  text-align: center;
  margin-top: 20px;
}
</style>
