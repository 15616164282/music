<template>
  <div class="container">
    <div style="height:37px; width:100%;" class="music-people msx10">
      <h2>
        <span class="big">热门</span>&ensp;
        <span class="small">歌手</span>
      </h2>
      
      <span class="ilblock more-right claer">更多</span>
      <ul class="music-address">
        <li @click="leixin(index)" v-for="(i ,index) in musicType" :key="index">{{i}}</li>
        
      </ul>
    </div>
    <div class="singer msx10">
      <!-- <div class="fleft singer-left po_realive" @click="goSingerIn(val)">
        <img src="@/assets/images/zjl.jpg" class="img100" alt />
        <div class="img-name">周杰伦</div>
      </div> -->
      <ul class=" singer-right">
        <li @click="goSingerIn(i.id)" v-for="(i ,index) in singerIn" :key="index">
          <div class="img-box">
            <img v-lazy="i.img1v1Url+'?param=260y260'" class="img100" alt="" />
          </div>
          <div class="img-name">{{i.name}}</div>
        </li>
        
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "singer",
  components: {},
  data() {
    return {
      singerIn: [],
      singerType:"-1",
      musicType:["华语","欧美","日本","韩国"],
      
    };
  },
  mounted() {
    this.singerData()
  },
  methods: {
    goSingerIn(val) {
      let routeData = this.$router.resolve({
        // path: `/describe/${id}`
        path: `/singerin/${val}`,
      });
      window.open(routeData.href, "_blank");
    },
    singerData() {
      this.$http({
        url:"/artist/list?type=-1&area="+this.singerType+"&limit=12",
        method:"get",
      }).then(res =>{
        console.log(res.data.artists);
        this.singerIn = res.data.artists
        // this.$set(this.order, 0, res.data);
      }).catch(err =>{
        console.log(err);
        
      })
    },
    leixin(val){
      console.log(val);
      
      if (val == 0) {
        this.singerType = 7
      }if (val == 1) {
        this.singerType = 96
      }if (val == 2) {
        this.singerType = 8
      }if (val == 3) {
        this.singerType = 16
      }
      this.singerData()
    }
  },
  
};
</script>

<style lang="scss">
h2 {
  float: left;
  .big {
    font-size: 26px;
    color: aqua;
    font-weight: 800;
  }
  .small {
    font-size: 18px;
    color: #333;
    font-weight: 600;
  }
}
.music-people {
  position: relative;
  .more-right {
    position: absolute;
    right: 0;
    top: 10px;
    color: #3ff33f;
  }
  .music-address {
    width: 500px;
    height: 37px;
    // text-align: unset;
    line-height: 44px;
    position: absolute;
    right: 500px;
    top: 0;
    li {
      cursor: pointer;
      float: left;
      width: 60px;
    }
  }
}
.singer {
  width: 100%;
  height: 1035px;
  .img-name {
    margin: 15px auto;
    color: #333;
    font-size: 16px;
  }
  .singer-left {
    width: 360px;
    height: 365px;
    padding: 5px;
  }
  .singer-right {
    width: 100%;
    height: 1035px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      position: relative;
      width: 282px;
      height: 320px;
      padding: 5px;
      margin-bottom: 10px;
      background-color: #ddd;
      cursor: pointer;
      .img-box{
        width: 260px;
        height: 260px;
        border-radius: 50%;
        margin: 10px auto;
        background-color: #333;
        overflow: hidden;
      }
    }
  }
}
</style>