<template>
    <div class="CommonContainer">
        <span class="text">软件版本号：<span class="number">28730</span></span>
        <el-divider></el-divider>
        <span>数据版本号：<span class="number">1.0.14</span> </span>
    </div>
</template>

<template>
    <div>
        <div class="CommonContainer">
        <span class="text">软件版本号：  <span class="number">28730</span><i class="el-icon-refresh-right right">更新软件</i></span>
        <!-- <el-divider ></el-divider> -->
        <span class="text">数据版本号：   <span class="number">1.0.14</span><i class="el-icon-refresh-right right">更新数据</i></span>
    </div>
    </div>
     
</template>

<style>
.CommonContainer
{
    margin-top: 30px;
    
}
 /*文字样式*/
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

.number
{
    color: #A5A5A5;
}

/*图标样式*/
.right
{
    float: right;
    margin-top: 10px;
    margin-right: 10px;
}
</style>