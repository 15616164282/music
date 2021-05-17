<template>
  <div class="container">
    <div style="height:37px; width:100%;border-bottom:1px solid #DCDFE6" class="music-people">
        
      <h2><span class="big">热门</span>&ensp; <span class="small">歌单</span></h2>
      <span class="ilblock more-right claer">更多</span>
      
    </div>
    <ul class="gedan-box">
      <li v-for="(i,index) in gedanIn" :key="index" @click="gogedanIn(i.id)" class="gedan">
        <div class="gedan-img po_realive">
          <img v-lazy="i.coverImgUrl+'?param=240y240'" class="img100" alt="">
          <div class="gedan-play"><i class="el-icon-caret-right"></i></div>
        </div>
        <h4>{{i.name}}</h4>
        <p>{{i.tag}}</p>
      </li>
      
    </ul>
    
  </div>
</template>

<script>
export default {
  name:"gedan",
  components: {
    
  },
  data() {
    return {
      gedanIn:[],
      
    };
  },
  mounted(){
    this.gedanData()
    
  },
  methods:{
    gogedanIn(val) {
      let routeData = this.$router.resolve({
        path: `/gedanin/${val}`,
      });
      window.open(routeData.href, "_blank");
    },
    gedanData() {
      this.$http({
        url:"/top/playlist/highquality?before=1503639064232&limit=10",
        method:"get",
      }).then(res =>{
        console.log(res.data.playlists);
        this.gedanIn = res.data.playlists
        // this.$set(this.order, 0, res.data);
      }).catch(err =>{
        console.log(err);
        
      })
    },
    
  },
}
</script>

<style lang="scss">
.gedan-box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .gedan{
    width: 224px;
    height: 260px;
    padding: 10px;
    .gedan-img{
      width: 224px;
      height: 224px;
      overflow: hidden;
      .gedan-play{
        display: none;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        opacity: 0.8;
        background-color: #fff;
        position: absolute;
        top: 40%;
        left: 40%;
        i{
          line-height: 60px;
          font-size: 32px;
          color: #333;
        }
      }
      
    }
    .gedan-img:hover img{
      transform: scale(1.2);
      transition: all 0.8s ease 0s;
    -webkit-transform: scale(1.2);
    }
    .gedan-img img {
      transition: all 0.8s ease 0s;
    }
    .gedan-img:hover .gedan-play{
      display: block;
      transform: scale(1.2);
      transition: all 0.8s ease 0s;
    -webkit-transform: scale(1.2);
    }
    .gedan-img .gedan-play {
      transition: all 0.8s ease 0s;
    }
    h4{
      height: 22px;
      max-width: 100%;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 22px;
      max-height: 44px;
      text-align: left;
    }
    p{
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 22px;
      font-size: 14px;
      text-align: left;
    }
  }
}
</style>