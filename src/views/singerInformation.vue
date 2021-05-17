<template>
  <div class="containerfu singerIN mt20">
    <div class="singer-title">
      <div class="fleft singer-img">
        <img :src="singerDsc.cover+'?param=180y180'" class="img100" alt="">
      </div>
      <div class="fright singer-in">
        <h2>{{singerDsc.name}}</h2>
        <el-tooltip class="item" effect="light" transition="el-fade-in-linear" placement="bottom">
          <div slot="content" class="content-text" >{{singerDsc.briefDesc}}</div>
          <p class="tleft singer-desc">{{singerDsc.briefDesc}}</p>
        </el-tooltip>
        
        <div class="singer-innum fleft"><span>单曲：</span>
          <span class="innum">{{singerDsc.musicSize}}</span>
          <el-divider direction="vertical"></el-divider>
          <span>专辑：</span><span class="innum">{{singerDsc.albumSize}}</span>
          <el-divider direction="vertical"></el-divider>
          <span>MV：</span><span class="innum">{{singerDsc.mvSize}}</span>
        </div>
      </div>
    </div>
    <div style="height:37px; width:100%;" class="music-people mt20">
      <h2 class="fleft"><span class="big">热门</span>&ensp; <span class="small">歌曲</span></h2>
      <!-- <span class="ilblock more-right claer">更多</span> -->
      <el-button type="primary" icon="el-icon-video-play" class="ilblock more-right claer" @click="playSong()">播放全部</el-button>
    </div>
    <div class="musicin po_realive" v-for="(i,index) in songList[currentpage-1]" :key="index"><span class="music-number">{{index+1}}</span>
      <span class="music-play" @click="getSong(index)"><i class="el-icon-video-play"></i></span>
      <span class="music-name">{{i.song}}</span>
      <span class="music-singer">{{i.singer}}</span>
      <span class="music-time">{{i.dt}}</span>
    </div>
    <div class="fenye">
      <el-pagination
        background
        layout="prev, pager, next"
        :hide-on-single-page="true"
        @prev-click="prev"
        @next-click="next"
        @current-change="currentPage"
        :current-page="currentpage"
        :page-size="10"
        :total="total">
      </el-pagination>
    </div>
    <transition-group name="list" tag="p">
      <MusicPlay v-if="drawer" :key="1" :playList="playList" @func="getMsgFormSon" class="list-item"></MusicPlay>
    </transition-group>
  </div>
</template>

<script>
import MusicPlay from '@/components/musicPlay.vue'
export default {
  name:"singerin",
  components: {
    MusicPlay
  },
  data() {
    return {
      singerDsc:{},
      total:1,
      currentpage:1,
      songList:[],
      drawer:false,
      playList:[],
    };
  },
  mounted(){
    this.singerData();
    this.songData();
  },
  methods:{
    getSong(id){
      console.log(this.songList[this.currentpage-1][id]);
      if (this.playList.length == 0) {
        this.playList.push(this.songList[this.currentpage-1][id])
        this.drawer=true
      }else{
        this.playList=[]
        if (this.playList.length == 0) {
          this.playList.push(this.songList[this.currentpage-1][id])
          this.drawer=true
        }
      }
    },
    getMsgFormSon(val){
      console.log(val);
      this.drawer=val
    },
    playSong() {
      console.log(this.$store.state.songList.length);
      this.playList = this.songList[this.currentpage-1]
      this.drawer=true
      
    },
    singerData () {
      this.$http({
        url:"/artist/detail?id="+this.$route.params.id+"",
      }).then(res =>{
        console.log(res.data.data.artist);
        this.singerDsc = res.data.data.artist
      }).catch(err =>{

      })
    },
    songData () {
      this.$http({
        url:"/artist/top/song?id="+this.$route.params.id+"",
      }).then(res =>{
        console.log(res.data.songs);
        // this.bangdanName = res.data.playlist.name
        this.total = res.data.songs.length
        // this.updataTime = this.formatDt(res.data.playlist.name)
        //数据分组用于分页显示
        let a = this.chunk(res.data.songs,10)
        console.log(a[3]);
        
        for (let index = 0; index < a.length; index++) {
          this.formatSongs(a[index])
        }
        // this.singerDsc = res.data.data.artist
        // this.brand = res.data[1]
        // this.total = res.data[3]
      }).catch(err =>{

      })
    },
    chunk(array, size) {
      let [start, end, result] = [null, null, []];
      for (let i = 0; i < Math.ceil(array.length / size); i++) {
          start = i * size;
          end = start + size;
          result.push(array.slice(start, end));
      }
      return result;
    },
    //格式化播放时长
    formatDt(time) {
      let dt = time / 1000;
      let m = parseInt(dt / 60);
      let s = parseInt(dt % 60); //这里用Math.ceil取整会更严谨些
      m >= 10 ? m : (m = "0" + m);
      s >= 10 ? s : (s = "0" + s);
      return m + ":" + s;
    },
    formatSongs(arr) {
      let b =[]
      let n = arr.length;
      for (let i = 0; i < n; i++) {
        let obj = {}; //我们将每首歌的信息以对象的方式存储
        obj.id = arr[i].id;
        obj.song = arr[i].name;
        obj.singer = arr[i].al.name;
        obj.dt = this.formatDt(arr[i].dt); //由于返回的歌曲时长单位是ms，我们还要将其转换成00：00的格式
        b.push(obj)
      }
      this.songList.push(b); //最后将这个歌曲对象存储到组件的songList歌曲列表属性上，最后用个v-for就可以在视图上呈现出来了
    },
    // 点击上一页
    prev() {
      this.currentpage -=1
      
    },
    // 点击下一页
    next() {
      this.currentpage +=1

    },
    currentPage(val){
      
      this.currentpage = val
      
    }
    
  },
}
</script>

<style lang="scss">
.singerIN{
  width: 100%;
  height: 900px;
}
.singer-title{
  width: 100%;
  height: 190px;
  .singer-img{
    display: block;
    width: 180px;
    height: 180px;
    padding: 3px;
    background: #fff;
    border: 1px solid #d5d5d5;
  }
  .singer-in{
    width: 770px;
    height: 180px;
    padding-left: 20px;
    h2{
      font-size: 38px;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      line-height: 50px;
      text-overflow: ellipsis;
      text-align: left;
      display: block;
      width: 100%;
    }
    .content-text{
      width: 250px !important;
      height: 300px !important;
      line-height: 24px !important;
    }
    .singer-desc{
      float: left;
      height: 50px;
      line-height: 24px;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
    .singer-innum{
      width: 100%;
      height: 30px;
      line-height: 23px;
      overflow: hidden;
      font-size: 18px;
      text-align: left;
      .innum{
        font-size: 25px;
        font-weight: 400;
      }
    }
  }
}
.music-people{
  position: relative;
  .more-right{
    position: absolute;
    right: 0;
    top: 0px;
    color: #3ff33f;
  }
}
.musicin{
  width: 100%;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-bottom:1px solid #DCDFE6;
  .music-number{
    width: 40px;
    position: absolute;
    top: 2px;
    left: 0px;
    text-align: right;
    font-size: 24px;
  }
  .music-img{
    position: absolute;
    top: 0;
    left: 48px;
    width: 72px;

    font-size: 12px;
    line-height: 50px;
    text-align: center;
    color: #999;
  }
  .music-play{
    position: absolute;
    top: 0;
    left: 46px;
    width: 40px;
    cursor: pointer;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
    color: #999;
  }
  .music-name{
    display: inline-block;
    width: 450px;
    height: 50px;
    line-height: 50px;
    text-align: left;
    position: absolute;
    top: 0;
    left: 92px;
    cursor: pointer;
    overflow: hidden;
    // float: left;
  }
  .music-singer{
    height: 50px;
    width: 350px;
    line-height: 50px;
    text-align: left;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 560px;
  }
  .music-time{
    width: 100px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 910px;
  }
}
.fenye{
  width: 500px;
  margin: 15px auto;
}
</style>