<template>
  <div class="index_container">
      <el-container class="home-container">
          <!-- 头部区域 -->
          <el-header>
              <div class="my">
                  我的
              </div>
              <!-- <div class="item">
                  常用
              </div> -->
          </el-header>
          <!-- 页面主体区 -->
          <el-container class="container">
              <!-- 侧边栏 -->
              <el-aside width="200px" class="aside">
                  <!-- 侧边栏菜单区域 -->
                  <el-menu background-color="#FAFAFA" text-color="#A1A1A1" active-text-color="#409EFF" unique-opened
                      :collapse-transition="true" :router="true">
                      <!-- 一级菜单 -->
                      <el-menu-item index="/commonUse" @click="handler">
                              <template slot="title">
                                  <!-- 图标 -->
                                  <i class="el-icon-s-order"></i>
                                  <!-- 文本 -->
                                  <span>常用</span>
                              </template>
                          </el-menu-item>
                      <el-menu-item index="/userInfo">
                              <template slot="title">
                                  <!-- 图标 -->
                                  <i class="el-icon-s-custom"></i>
                                  <!-- 文本 -->
                                  <span>用户信息</span>
                              </template>
                          </el-menu-item>
                          <el-menu-item index="/set">
                              <template slot="title">
                                  <!-- 图标 -->
                                  <i class="el-icon-setting"></i>
                                  <!-- 文本 -->
                                  <span>设置</span>
                              </template>
                          </el-menu-item>
                  </el-menu>
              </el-aside>
              <!-- 右侧内容主体区 -->
              <el-main>
                  <!--路由占位符 -->
                  <router-view></router-view>
              </el-main>
          </el-container>
      </el-container>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';


export default { 
  components: { RouterView },

}
</script>

<style scoped>
.index_container {
  /* background-color: #2b4b6b; */
  height: 100%;
}

.home-container {
  height: 100%;
}

/*头部区域样式 */
.el-header {
  background-color: #12A3C0;
  position: relative;

}

.el-header .my {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 100%;
  text-align: center;
  color:#fff;
  line-height: 60px;
}

.el-header .item {
  position: absolute;
  top: 28%;
  left: 50%;
  width: 200px;
  height: 100%;
  line-height: 100%;
  text-align: center;
  color:#fff;

}

 /*主体区域样式*/
.el-main {
  background-color: #FAFAFA;
}
</style>