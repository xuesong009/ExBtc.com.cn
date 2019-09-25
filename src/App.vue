<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      Nav
    }
  }
</script>

<style lang="less">
  /* 引入resetCss less */
  @import "./assets/less/resetCss";
  /*引入common less*/
  @import "./assets/less/common";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
