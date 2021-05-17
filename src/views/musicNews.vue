<template>
  <div class="container musicNews mt20">
    <el-card shadow="hover" :body-style="{ padding: '10px' }" class="fleft bangdan-list">
      <div slot="header" class="clearfix">
        <span style="font-size:18px">热门话题</span>
        <i style="float: right; padding: 3px 0" class="el-icon-arrow-down"></i>
      </div>
      <div class="bangdan-a" v-for="(i,index) in this.$store.state.musicNes" :key="index" @click="huatiId(index)">
        <span class="ilblock fleft"><img :src="require('@/assets/images/musicnews/'+i.imgTitle)" width="60" height="60"  alt=""></span>
        <span class="ilblock hutai-title fleft">{{i.title}}</span>
      </div>
      
    </el-card>
    <div class="music-news fright">
      <div class="music-title">
        <h2 class="fleft ilblock">{{huati.title}}</h2>
        <span class="ilblock fright new-time">{{huati.createdTime}}</span>
      </div>
      <div class="huati-box">
        <p>{{huati.textfont1[0]}}</p>
        <span class="ilblock huati-img"><img :src="require('@/assets/images/musicnews/'+huati.img)" class="img100" alt=""></span>
        <p>{{huati.textfont1[1]}}</p>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name:"musicNews",
  components: {
    
  },
  data() {
    return {
      huati:[],
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
    this.huatiId(0);
  },
  methods:{
    huatiId(index){
      this.huati =  this.$store.state.musicNes[index]
    }
  },
}
</script>

<style lang="scss">
.musicNews{
  height: 1000px;
  .bangdan-list{
    width: 30%;
    .bangdan-a{
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: left;
      font-size: 16px;
      padding: 10px;
      
      cursor: pointer;
      border-bottom: 1px solid #333;
      span{
        height: 60px;
      }
      .hutai-title{
        width: 275px;
        margin-top:0 ;
        margin-left: 10px;
        height: 60px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 60px;
        text-align: left;
      }
    }
  }
  .music-news{
    width: 69%;
    min-height: 500px;
    .music-title{
      width: 100%;
      height: 63px;
      overflow: hidden;
      border-bottom: 1px solid #333;
      // background-color: aqua;
      h2{
        width: 83%;
        text-align: left;
        line-height: 60px;
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .new-time{
        margin-top: 40px;
      }
    }
    .huati-box{
      padding: 15px;
      .huati-img{
        width: 450px;
        height: 300px;
        margin: 0 auto;
      }
      p{
        text-align: left;
        text-indent: 2em;
        line-height: 34px;
        font-size: 18px;
      }
    }
    
  }
}

</style>