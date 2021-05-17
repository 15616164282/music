<template>
  <div id="app">
    <Head/>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Head from './components/head.vue'
import Bottom from './components/bottom.vue'
export default {
  name: 'app',
  components: {
    Head,
    Bottom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
