<template>
  <div class="head">
    <el-container class="container">
      <el-header>
        <div class="logo">
          <router-link to="/">
            <div class="fleft">
              <img src="@/assets/images/logo.png" alt="logo" />
            </div>
            <div class="fleft logo-title">
              <img src="@/assets/images/音乐网站-字2.png" alt="logo" />
            </div>
          </router-link>
        </div>
        <Search></Search>
        <div class="loginer ilblock fright" v-if="userStatus=='undefined'">
          <router-link to="/login">
            <span class="ilblock">
              <el-button type="primary" class="logina">登录</el-button>
            </span>
          </router-link>
        </div>
        <div class="loginer ilblock fright" v-if="userStatus!='undefined'">
          <span class="ilblock fleft nikname">{{userStatus}}&ensp;&ensp;&ensp;</span>
          <el-button type="primary" class="logina" @click="logout()">退出</el-button>
        </div>
      </el-header>
    </el-container>
    <div class="head-menu">
      <div class="container">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#333"
          text-color="#fff"
          :router="true"
          active-text-color="#fff"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/bangdan">榜单</el-menu-item>
          <el-menu-item index="/singer">歌手</el-menu-item>
          <el-menu-item index="/gedan">歌单</el-menu-item>
          <el-menu-item index="/musicNews">快讯</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./search";
export default {
  name: "head",
  components: {
    Search
  },
  data() {
    return {
      activeIndex: "/",
      activeIndex2: "/"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$http({
        url: "/logout",
        method: "get"
      })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.$store.commit("userId", "");
            this.$store.commit("username", "undefined");
            this.$store.commit("token", "");
            this.$message.success("您已退出登录");
          }

          // this.$set(this.order, 0, res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    userStatus() {
      return this.$store.state.username;
    }
  },
  props: {
    msg: String
  }
};
</script>


<style scoped lang="scss">
.el-header {
  height: 88px !important;

  padding: 10px 0 !important;
  position: relative;
  .logo {
    float: left;
    .logo-title {
      margin-top: 10px;
      margin-left: 10px;
    }
  }
  .loginer {
    width: 225px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    right: 10px;
    top: 20px;
    .logina {
      width: 80px;
      height: 40px;
      margin-left: 15px;
      line-height: 20px;
      font-size: 16px;
    }
  }
}
.head-menu {
  width: 100%;
  height: 61px;
  background-color: #333;
  .el-menu-item {
    width: 110px;
  }
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none !important;
  color: #fff;
  background-color: RGB(0, 244, 244) !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
