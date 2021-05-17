<template>
  <el-autocomplete
    popper-class="my-autocomplete"
    v-model="state"
    :fetch-suggestions="querySearch"
    placeholder="请输入歌名/歌手"
    @select="handleSelect"
    @change="change"
    @focus="focus"
  >
    <i class="el-icon-search" slot="suffix" @click="handleIconClick"></i>
    <template slot-scope="{ item }">
      <div class="name">{{ item.first}}</div>
      <!-- <span class="addr">{{ item}}</span> -->
    </template>
  </el-autocomplete>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      restaurants: [],
      state: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },

    handleSelect(item) {},
    handleIconClick(ev) {},
    change() {
      this.$router.push({
        path: `/searchList/${this.state}`
      });
    },
    focus() {
      this.$http({
        url: "/search/hot",
        method: "get"
      })
        .then(res => {
          console.log(res.data.result.hots);
          this.restaurants = res.data.result.hots;
          // this.$set(this.order, 0, res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" >
.el-autocomplete {
  width: 50%;
  margin-right: 20% !important;
  margin-top: 10px !important;
  float: right;

  /* background-color: blue; */
}
.el-input {
  width: 100% !important;
  background-color: $zhuColor;
  border: 2px solid $zhuColor;
  cursor: pointer;
}
.el-input__inner {
  /* background-color: black !important; */
  width: 92% !important;
  float: left !important;
}
.el-input__suffix {
  right: 0 !important;
  width: 8%;
  background-color: $zhuColor;
  cursor: pointer;
}
.el-icon-search {
  line-height: 40px !important;
  font-size: 20px !important;
  font-weight: bolder !important;
  color: #fff;
}
</style>