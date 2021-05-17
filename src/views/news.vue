<template>
  <div class="container mt20">
    <el-card shadow="hover" :body-style="{ padding: '10px' }" class="fleft bangdan-list">
      <div slot="header" class="clearfix">
        <span style="font-size:18px">热门榜单</span>
        <i style="float: right; padding: 3px 0" class="el-icon-arrow-down"></i>
      </div>
      <div class="bangdan-a">飙升榜</div>
      <div class="bangdan-a">华语新歌榜</div>
      <div class="bangdan-a">日本公信榜</div>
      <div class="bangdan-a">韩国Melon榜</div>
    </el-card>
    <div class="music-news fright">
      <div class="music-title">
        <h4 class="fleft">丁当“90s华语金曲翻玩计划”全新启动 摇滚经典《烦》解闷新生活运动</h4>
        <span class="ilblock fright claer">更多</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"news",
  components: {
    
  },
  data() {
    return {
      height:"450px",
      lunBo_Img:[
        require('@/assets/images/banner1.jpg'),
        require('@/assets/images/banner2.jpg'),
        require('@/assets/images/banner3.jpg'),
        require('@/assets/images/banner4.jpg'),
        require('@/assets/images/banner5.jpg'),
      ]
    };
  },
  mounted(){
    
    
  },
  methods:{
    
    
  },
}
</script>

<style lang="scss">

</style>