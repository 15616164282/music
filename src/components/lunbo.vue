<template>
  <el-col :span="24" class="lun-box">
    <div class="grid-content bg-purple">
      <el-carousel :height=height width=500px>
        <el-carousel-item v-for="(img,index) in lunbo_img" :key="index">
          <el-image
            style="width: 100%; height: 100%"
            :src="img">
          </el-image>
          <!-- <img :src="img.src" alt="">
          <h3>{{img.src}}</h3>-->
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-col>
</template>

<script>
export default {
  name:"lunbo",
  data() {
    return {
      
      
    };
  },
  mounted(){
    
    
  },
  methods:{
    
    
  },
  props:{
    height:String,
    width:String,
    lunbo_img:Array,
  }
}
</script>

<style>

</style>