
<template>
  <div>
    <div class="playbox" v-if="flag==false">
      <i class="el-icon-loading loadingMusic"></i>
    </div>
    <div class="playcon">
      <i class="el-icon-switch-button guanbi" @click="handleClose"></i>
      <VueAplayer
        :autoplay="true"
        :list="songList"
        :music="songList[0]"
        :showlrc="true"
        :narrow="false"
        theme="#b7daff"
        mode="circulation"
        v-if="flag"
        listmaxheight="230px"
        ref="aplayer"
      ></VueAplayer>
    </div>
  </div>
</template>



<script>
import VueAplayer from "vue-aplayer";
import axios from "axios";
export default {
  name: "musicPlay",
  components: {
    //别忘了引入组件
    VueAplayer
  },
  data() {
    return {
      flag: false,
      musicList: "",
      songList: []
      // drawer:true
    };
  },
  async mounted() {
    // // 异步加载，先加载出player再使用
    await this.init();
    this.$refs.aplayer.play();
  },

  methods: {
    async init() {
      // //加载vuex中的数据
      let getMusicList = this.playList;
      console.log(getMusicList);

      for (let i = 0; i < getMusicList.length; i++) {
        let obj = {};
        obj.title = getMusicList[i].song;
        obj.artist = getMusicList[i].singer;
        obj.pic = getMusicList[i].picUrl;
        obj.id = getMusicList[i].id;
        let url = await this.$http({
          url: "/song/url?id=" + getMusicList[i].id + ""
        });
        obj.src = url.data.data[0].url;
        let lrc = await this.$http({
          url: "/lyric?id=" + getMusicList[i].id + ""
        });
        if (lrc.data.hasOwnProperty("lrc")) {
          obj.lrc = lrc.data.lrc.lyric;
        } else {
          obj.lrc = "轻音乐无歌词";
        }

        //把数据一个个push到songList数组中，在a-player标签中使用 :music="songList" 就OK了
        this.songList.push(obj);
      }
      //因为是异步请求，所以一开始播放器中是没有歌曲的，所有给了个v-if不然会插件默认会先生成播放器，导致报错(这个很重要)
      this.flag = true;
    },
    handleClose() {
      this.$confirm("关闭将无法继续播放音乐, 是否继续?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$emit("func", false);
          this.$message({
            type: "success",
            message: "关闭成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消关闭"
          });
        });
    }
  },
  watch: {
    playList(newQuestion, oldQuestion) {
      console.log("aaaaa");
      // playmusic()
      this.songList = [];
      this.init();

      this.$refs.aplayer.play();
    }
  },
  props: {
    playList: Array
  }
};
</script>
 
<style lang="scss" >
.playbox {
  width: 320px;
  height: 630px;
  position: relative;
  background-color: #fff;
  .loadingMusic {
    position: absolute;
    top: 154px;
    right: 100px;
    font-size: 38px;
    color: #333;
    z-index: 200;
  }
}
.playcon {
  width: 320px;
  height: 630px;
  position: relative;

  .guanbi {
    position: absolute;
    top: 154px;
    right: 10px;
    font-size: 24px;
    color: #333;
    z-index: 200;
    //  line-height: 25px;
    .aplayer-body {
      height: 460px !important;
    }
  }
}
.aplayer .aplayer-body {
  display: block !important;
  position: relative !important;
}
.aplayer.aplayer-withlrc .aplayer-body .aplayer-pic {
  width: 100% !important;
  height: 150px !important;
  margin: 0 auto !important;
}
.aplayer.aplayer-withlrc .aplayer-body .aplayer-info {
  width: 100% !important;
  height: 300px !important;
  padding: 10px 7px 0;
}
.aplayer-lrc {
  position: relative;
  height: 230px !important;
  text-align: center;
  overflow: hidden;
  margin-bottom: 7px;
}

.aplayer-lrc .aplayer-lrc-contents {
  transform: translateY(-32px);
}
.aplayer-lrc p {
  font-size: 16px !important;
  color: #666;
  line-height: 20px !important;
  height: 20px !important;
  padding: 0;
  margin: 0;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  opacity: 0.4;
  overflow: hidden;
}
.aplayer-lrc p.aplayer-lrc-current {
  opacity: 1;
  font-size: 20px !important;
  height: 35px !important;
  overflow: visible;
  height: auto;
}
.aplayer-controller {
  height: 35px !important;
}
</style>
