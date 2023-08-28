<template>
    <div>
        <el-form 
        ref="LoginFormRef" 
        class="login_form"
        >
          <el-form-item prop="username" >
            <!-- 用户名输入框 -->
             <el-input 
             prefix-icon="iconfont icon-user"
             placeholder="用户名"
             
             >用户名</el-input>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="btns">
            <el-button plain class="loginOut">退出登录</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<style>
.loginOut
{
    width: 100%;
    color: #E04242 !important;
}
</style>