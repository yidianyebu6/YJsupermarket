<template>
    <el-aside width="230px" >
      <div class="biaoti">
        <h1 class="">华联超市管理系统</h1>
        <p class="hello">
          <span>您好,</span>
          <span>admin</span>
        </p>
        <p>
          <router-link to="/index" >管理首页</router-link> 
           | 
          <router-link to="/" >退出系统</router-link> 
        </p>
      </div>
      <!-- 菜单 -->
      <el-menu
        :default-active="$route.path"
        
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
        >
          
          <el-submenu index="1">
            <template slot="title">
              
              <span>分类管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">分类管理</el-menu-item>
              <el-menu-item index="1-2">添加分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/commodity"><router-link to="/commodity">商品管理</router-link> </el-menu-item>
              <el-menu-item index="1-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
             
              <span>进货管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">库存管理</el-menu-item>
              <el-menu-item index="1-2">添加库存</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              
              <span>出货管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">销售列表</el-menu-item>
              <el-menu-item index="1-2">商品出库</el-menu-item>
              <el-menu-item index="1-3">商品退货</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              
              <span>统计管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">销售统计</el-menu-item>
              <el-menu-item index="1-2">进货统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/usermanage"><router-link to="/usermanage" >账号管理</router-link> </el-menu-item>
              <el-menu-item index="/adduser"><router-link to="/adduser" >添加账号</router-link> </el-menu-item>
              <el-menu-item index="/amendpad"><router-link to="/amendpad" >修改密码</router-link> </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              
              <span>会员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">会员管理</el-menu-item>
              <el-menu-item index="1-2">添加会员</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="8">
            <template slot="title">
              
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index"><router-link to="/index" >系统管理</router-link></el-menu-item>
              <el-menu-item index="1-2">系统配置</el-menu-item>
              <el-menu-item index="1-3">权限管理</el-menu-item>
              <el-menu-item index="1-4">添加管理组</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            
            
            
      </el-menu>
    </el-aside>
</template>
<script>
export default {
  
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>
