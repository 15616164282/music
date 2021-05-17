<template>
  <div class="home">
    <div class="lunbo container">
      <LunBo :height=height :lunbo_img="lunBo_Img"></LunBo>
    </div>
    <div class="music-title container">
      <div class="fleft music-left">
        <h2><span class="big">精选</span>&ensp; <span class="small">歌单</span></h2>
        <span class="ilblock more-left">更多</span>
        <div class="img-box claer">                                   
          <div class="big-img fleft " @click="gogedanIn(2624548674)">
            <img src="http://p4.music.126.net/mEYgPW5mPfuIbIAkHaKEzQ==/109951165794556209.jpg?param=360y360" class="img100" alt="">
            <div class="gedan-play">[暖心电影原声] 一碗电影原声姜汤 温暖你心</div>
          </div>
          <ul class="small-img fright flex">
            <li @click="gogedanIn(2585023447)">
              <img src="http://p3.music.126.net/CK69qTqJVtSX1jiRc_9bTQ==/109951163832885902.jpg?param=200y200" class="img100" alt="">
              <div class="gedan-play">你的名字钢琴曲</div>  
            </li>
            <li @click="gogedanIn(2085001911)">
              <img src="http://p4.music.126.net/T2NvcH0jBNwqOI-IrX6_nw==/109951164966788695.jpg?param=200y200" class="img100" alt="">
              <div class="gedan-play">纯音乐】甜甜的纯音乐♡</div>  
            </li>
            <li @click="gogedanIn(2190625773)">
              <img src="http://p3.music.126.net/8b-xuHT1ZjUpyPRoC8769Q==/18609234302252451.jpg?param=200y200" class="img100" alt="">
              <div class="gedan-play">听罢这般电影旋律｜好似领略百感人生</div>  
            </li>
            <li @click="gogedanIn(5451679698)">
              <img src="http://p4.music.126.net/YiE95VH9tvc3_L58n_XgnA==/109951165616019352.jpg?param=200y200" class="img100" alt="">
              <div class="gedan-play">控球 节奏 打球时听的歌</div>  
            </li>
          </ul>
        </div>
      </div>
      <div class="fright music-right">
        <div style="height:37px; width:100%;" >
          <h2><span class="big">热门</span>&ensp; <span class="small">榜单</span></h2>
          <span class="ilblock more-right claer">更多</span>
        </div>
        <el-card :body-style="{ padding: '0px' }" class="music-card " >
          <img src="@/assets/images/飙升榜.png" width="100" height="100" class="fleft" @click="goBangDan()">
          <div style="padding: 10px; width:290px; text-align:left;" class="fright" @click="goBangDan()">
            <div ><span>1.</span>海底（Live）</div>
            <div><span>2.</span>小茗同学</div>
            <div><span>3.</span>重生</div>
            <div><span>4.</span>还是会想你</div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" class="music-card" >
          <img src="@/assets/images/新歌榜.png" width="100" height="100" class="fleft" @click="goBangDan()">
          <div style="padding: 10px; width:290px; text-align:left;" class="fright" @click="goBangDan()">
            <div><span>1.</span>海底（Live）</div>
            <div><span>2.</span>溯 (Reverse) </div>
            <div><span>3.</span>红马 (女版)</div>
            <div><span>4.</span>Say Ya</div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" class="music-card">
          <img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" width="100" height="100" class="fleft"  @click="goBangDan()">
          <div style="padding: 10px; width:290px; text-align:left;" class="fright"  @click="goBangDan()">
            <div><span>1.</span>如何爱他像你</div>
            <div><span>2.</span>被爱乱想症</div>
            <div><span>3.</span>黑矮星</div>
            <div><span>4.</span>幕</div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="container" style="height:80px;"><img src="@/assets/images/广告条.jpg" class="img100" alt=""></div>
    <div class="container msx10">
      <div style="height:37px; width:100%;" class="music-people">
        <h2><span class="big">热门</span>&ensp; <span class="small">歌手</span></h2>
        <span class="ilblock more-right claer">更多</span>
        <ul class="music-address">
          <li @click="leixin(index)" v-for="(i ,index) in musicType" :key="index">{{i}}</li>
        </ul>
      </div>                          
      <div class="singer msx10">
        <div class="fleft singer-left po_realive" @click="goSingerIn(singerFri.id)">
          <img :src="singerFri.img1v1Url+'?param=260y260'" class="img100" alt="">
          <div class="img-name">{{singerFri.name}}</div>
        </div>
        <ul class="fright singer-box">
          <li @click="goSingerIn(i.id)" v-for="(i ,index) in singerIn" :key="index">
           
              <img v-lazy="i.img1v1Url+'?param=260y260'" class="img100" alt="" />
            
            <div class="img-name">{{i.name}}</div>
          </li>
          
        </ul>
      </div>
      <div style="height:37px; width:100%;border-bottom:1px solid #DCDFE6" class="music-people">
        
        <h2><span class="big">音乐</span>&ensp; <span class="small">快讯</span></h2>
        <span class="ilblock more-right claer">更多</span>
        <!-- <el-divider></el-divider> -->
      </div>   
      <ul class="music-news">
        
        <li class="music-new" @click="gonews()" v-for="(i,index) in this.$store.state.musicNes" :key="index"><span class="tleft ilblock">{{i.title}}</span><span class="tright ilblock">{{i.createdTime}}</span></li>
        
      </ul> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LunBo from '@/components/lunbo.vue'

export default {
  name: 'Home',
  components: {
    LunBo,
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
      ],
      singerFri:{},
      singerIn: [],
      singerType:"-1",
      musicType:["华语","欧美","日本","韩国"],
    };
  },
  mounted(){
    this.singerData()
  },
  methods:{
    goSingerIn(val) {
      let routeData = this.$router.resolve({
        // path: `/describe/${id}`
        path: `/singerin/${val}`,
      });
      window.open(routeData.href, "_blank");
    },
    goBangDan() {
      let routeData = this.$router.resolve({
        // path: `/describe/${id}`
        path: "/bangdan",
      });
      window.open(routeData.href, "_blank");
    },
    gonews() {
      let routeData = this.$router.resolve({
        // path: `/describe/${id}`
        path: "/musicNews",
      });
      window.open(routeData.href, "_blank");
    },
    gogedanIn(val) {
      let routeData = this.$router.resolve({
        path: `/gedanin/${val}`,
      });
      window.open(routeData.href, "_blank");
    },
    singerData() {
      this.$http({
        url:"/artist/list?type=-1&area="+this.singerType+"&limit=9",
        method:"get",
      }).then(res =>{
        this.singerFri = res.data.artists[0]
        for (let index = 1; index < 9; index++) {
          this.singerIn.push(res.data.artists[index])
          
        }
        
        // this.$set(this.order, 0, res.data);
      }).catch(err =>{
        console.log(err);
        
      })
    },
    leixin(val){
      this.singerIn=[]
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
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  h2{
    float: left;
    .big{
      font-size: 26px;
      color: aqua;
      font-weight: 800;
    }
    .small{
      font-size: 18px;
      color: #333;
      font-weight: 600;
    }
  }
  .music-title{
    width: 100%;
    height: 370px;
    
    padding: 20px 0;
    
    .music-left{
      position: relative;
      width: 798px;
      .more-left{
        position: absolute;
        right: 0;
        top: 6px;
        color: #3ff33f;
      }
      .img-box{
        width: 100%;
        .big-img{
          width: 46%;
          height: 338px;
          padding: 10px 10px 10px 0;
          position: relative;
          cursor: pointer;
          .gedan-play{
            position: absolute;
            bottom: 11px;
            width: 95%;
            height: 30px;
            line-height: 30px;
            color: #fff;
            background-color: #333;
            opacity: 0.6;
          }
        }
        .small-img{
          width: 48%;
          height: 338px;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 10px;
          li{
            position: relative;
            width: 180px;
            height: 165px;
            cursor: pointer;
            .gedan-play{
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 30px;
              line-height: 30px;
              color: #fff;
              background-color: #333;
              overflow: hidden;
              opacity: 0.6;
            }
          }
        }
      }
      
    }
    .music-right{
      position: relative;
      width: 413px;
      padding-left: 15px;
      padding-bottom: 10px;
      // padding-top: 10px;
      .more-right{
        position: absolute;
        right: 0;
        top: 6px;
        color: #3ff33f;
      }
      .music-card{
        width: 100%;
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }
  .music-people{
    position: relative;
    .more-right{
      position: absolute;
      right: 0;
      top: 10px;
      color: #3ff33f;
    }
    .music-address{
      width: 500px;
      height: 37px;
      // text-align: unset;
      line-height: 44px;
      position: absolute;
      right: 500px;
      top: 0;
      li{
        float: left;
        width: 60px;
      }
    }
  }
  .singer{
    width: 100%;
    height: 370px;
    position: relative;
    .img-name{
      position: absolute;
      bottom: -8px;
      width: 95%;
      height: 30px;
      font-size: 16px;
      line-height: 30px;
      color: #fff;
      background-color:rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    .singer-left{
      width: 360px;
      height: 365px;
      padding: 5px;
    }
    .singer-box{
      width: 856px;
      height: 362px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        position: relative;
        width: 200px;
        height: 176px;
        padding: 5px;
        .img-name{
          position: absolute;
          bottom: -11px;
          width: 95%;
          height: 30px;
          font-size: 16px;
          line-height: 30px;
          color: #fff;
          background-color:rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
      }
    }
  }
  .music-news{
    width: 100%;
    .music-new{
      height: 30px;
      width: 100%;
      line-height: 30px;
      cursor: pointer;
      span{
        width: 50%;
      }
    }
  }
}
.lunbo{
  width: 1226px;
  height: 450px;
}

</style>
