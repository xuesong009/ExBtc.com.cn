<template>
  <div class="banner">
    <ul>
      <li class="banner-list"><a href=""></a></li>
      <li class="banner-list"><a href=""></a></li>
      <li class="banner-list"><a href=""></a></li>
    </ul>
    <div class="dots">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner"
  }
</script>

<style scoped lang="less">
  .banner {
    width: 100%;
    height:450px;
    background: url("../assets/images/banner-bg.jpg") no-repeat;
    /*background-size: 800px 450px;*/
    /*border: 1px solid blue;*/
    > ul {
      width: 300%;
      list-style: none;
      > .banner-list {
        > a {

        }
      }
    }
  }
</style>
