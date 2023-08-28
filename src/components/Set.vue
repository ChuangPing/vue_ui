<template>
    <div>
        <span>设置单位</span>
        <div class="setContainer">
        <span class="text">毫米  <i class="el-icon-check right"></i></span>
        <!-- <el-divider ></el-divider> -->
        <span class="text">英尺 </span>

        <!-- <el-divider class="top"></el-divider> -->
        <span class="text top">是否打开相机  <el-switch
  active-color="#13ce66"
  class="right"
  inactive-color="#D3D3D5">
</el-switch></span>
    </div>
    </div>
     
</template>

<style>
.setContainer
{
    margin-top: 30px;
    
}
.text{
    display: inline-block;
    height: 40px;
    text-align: left;
    width: 100%;
    line-height: 40px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.el-divider
{
    margin: 0px !important;

}
.top
{
    margin-top: 30px !important;
}
.right
{
    float: right;
    margin-top: 10px;
    margin-right: 10px;
}
</style>