<template>
  <div>
    <div class="container bangdan mt20">
      <el-card shadow="hover" :body-style="{ padding: '10px' }" class="fleft bangdan-list">
        <div slot="header" class="clearfix">
          <span style="font-size:18px">热门榜单</span>
          <i style="float: right; padding: 3px 0" class="el-icon-arrow-down"></i>
        </div>
        <div
          class="bangdan-a"
          @click="getBangDan(i.id)"
          v-for="(i,index) in bangdanIn"
          :key="index"
        >{{i.name}}</div>
      </el-card>
      <div class="music">
        <div class="music-title">
          <h2>
            <span class="big">{{bangdanName}}</span>&ensp;
            <span class="small">{{updataTime | formatDate}} &ensp;更新</span>
          </h2>
          <el-button
            type="primary"
            icon="el-icon-video-play"
            class="fright"
            @click="playSong()"
          >播放全部</el-button>
        </div>
        <div class="musicin po_realive" v-for="(i,index) in songList[currentpage-1]" :key="index">
          <span class="music-number">{{index+1}}</span>
          <span class="music-img">
            <i class="el-icon-top"></i>
          </span>
          <span class="music-play" @click="getSong(index)">
            <i class="el-icon-video-play"></i>
          </span>
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
            :page-size="15"
            :total="total"
          ></el-pagination>
        </div>
      </div>
      <transition-group name="list" tag="p">
        <MusicPlay
          v-if="drawer"
          :key="1"
          :playList="playList"
          @func="getMsgFormSon"
          class="list-item"
        ></MusicPlay>
      </transition-group>
    </div>
  </div>
</template>

<script>
import MusicPlay from "@/components/musicPlay.vue";
export default {
  name: "bangdan",
  components: {
    MusicPlay
  },
  data() {
    return {
      bangdanIn: [],
      gedanId: "19723756",
      songList: [],
      playList: [],
      bangdanName: "",
      updataTime: "",
      total: 1,
      currentpage: 1,
      drawer: false
    };
  },
  mounted() {
    this.bangdanData();
    this.bangdanInData();
    // this.lrcData();
  },
  methods: {
   
    getSong(id) {
      console.log(this.songList[this.currentpage - 1][id]);
      if (this.playList.length == 0) {
        this.playList.push(this.songList[this.currentpage - 1][id]);
        this.drawer = true;
      } else {
        this.playList = [];
        if (this.playList.length == 0) {
          this.playList.push(this.songList[this.currentpage - 1][id]);
          this.drawer = true;
        }
      }
    },
    getMsgFormSon(val) {
      console.log(val);
      this.drawer = val;
    },
    playSong() {
      console.log(this.$store.state.songList.length);
      this.playList = this.songList[this.currentpage - 1];
      this.drawer = true;
    },
    // 点击上一页
    prev() {
      this.currentpage -= 1;
    },
    // 点击下一页
    next() {
      this.currentpage += 1;
    },
    currentPage(val) {
      this.currentpage = val;
      // this.routerData ()
    },
    getBangDan(val) {
      this.gedanId = val;
      (this.songList = []), this.bangdanInData();
    },
    bangdanData() {
      this.$http({
        url: "/toplist",
        method: "get"
      })
        .then(res => {
          console.log(res.data.list);
          for (let index = 0; index < 6; index++) {
            this.bangdanIn.push(res.data.list[index]);
          }
          // this.$set(this.order, 0, res.data);
        })
        .catch(err => {
          console.log(err);
        });
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
      let b = [];
      let n = arr.length;
      for (let i = 0; i < n; i++) {
        let obj = {}; //我们将每首歌的信息以对象的方式存储
        obj.id = arr[i].id;
        obj.song = arr[i].name;
        obj.singer = arr[i].ar[0].name;
        obj.picUrl = arr[i].al.picUrl;
        obj.dt = this.formatDt(arr[i].dt); //由于返回的歌曲时长单位是ms，我们还要将其转换成00：00的格式
        b.push(obj);
      }
      this.songList.push(b); //最后将这个歌曲对象存储到组件的songList歌曲列表属性上，最后用个v-for就可以在视图上呈现出来了
    },

    bangdanInData() {
      this.$http({
        url:
          "/playlist/detail?id=" +
          this.gedanId +
          "&userid=" +
          this.$store.state.userId +
          "",
        method: "get"
      })
        .then(res => {
          console.log(res.data);
          this.bangdanName = res.data.playlist.name;
          this.total = res.data.playlist.tracks.length;
          this.updataTime = res.data.playlist.updateTime;
          //数据分组用于分页显示
          let a = this.chunk(res.data.playlist.tracks, 15);
          for (let index = 0; index < a.length; index++) {
            this.formatSongs(a[index]);
          }
          // this.$set(this.order, 0, res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" >
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
    font-weight: 100;
  }
}
.bangdan {
  height: 870px;
  .bangdan-list {
    width: 200px;
    .bangdan-a {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .music {
    float: right;
    width: 990px;
    // height: 500px;
    padding-left: 30px;
    .music-title {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #dcdfe6;
    }
    .musicin {
      width: 100%;
      height: 50px;
      font-size: 16px;
      line-height: 50px;
      border-bottom: 1px solid #dcdfe6;
      .music-number {
        width: 40px;
        position: absolute;
        top: 2px;
        left: 0px;
        text-align: right;
        font-size: 24px;
      }
      .music-img {
        position: absolute;
        top: 0;
        left: 48px;
        width: 72px;

        font-size: 12px;
        line-height: 50px;
        text-align: center;
        color: #999;
      }
      .music-play {
        position: absolute;
        top: 0;
        left: 100px;
        width: 40px;
        cursor: pointer;
        font-size: 24px;
        line-height: 50px;
        text-align: center;
        color: #999;
      }
      .music-name {
        display: inline-block;
        width: 400px;
        height: 50px;
        line-height: 50px;
        text-align: left;
        position: absolute;
        top: 0;
        left: 155px;
        cursor: pointer;
        // float: left;
      }
      .music-singer {
        width: 250px;
        line-height: 50px;
        height: 50px;
        text-align: left;
        position: absolute;
        top: 0;
        left: 560px;
      }
      .music-time {
        width: 150px;
        line-height: 50px;
        text-align: left;
        position: absolute;
        top: 0;
        left: 910px;
      }
    }
    .fenye {
      width: 500px;

      margin: 15px auto;
    }
  }
}
</style>