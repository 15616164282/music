<template>
  <div class="bottom">
    <div class="container">
      <ul class="bottom-title">
      <li>关于网站 |</li>
      <li>举报监督 |</li>
      <li>BUG反馈 |</li>
      <li>投诉指引</li>
    </ul>
    
    </div>
    <el-divider></el-divider>
    <div class="container center">
      <p>&copy;2021 音乐网站制作人————HJJ   版权所有</p>
      <p>湖南涉外经济学院</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"bottom"
}
</script>

<style lang="scss">
.bottom{
  width: 100%;
  height: 150px;
  background-color: #333;
  margin-top: 10px;
  padding: 15px 0;
  .bottom-title{
    margin: 0 auto;
    width: 320px;
    height: 30px;
    li{
      width: 78px;
      height: 30px;
      float: left;
      color: #fff;
      font-size: 16px;
      line-height: 30px;
    }
  }
  .center{
    text-align: center;
    color: #fff;
  }
}
</style>