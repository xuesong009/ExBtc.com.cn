<template>
  <div class="nav">
    <div class="container">
      <!-- logo start -->
      <div class="logo">
        <router-link to="/Index">
          <img src="../assets/images/logo.png" alt="logo"/>
          <span class="doName">ExBtc.com.cn</span>
        </router-link>
      </div>
      <!-- logo end -->

      <!-- nav start -->
      <ul class="nav-main">
        <!-- Index start -->
        <li class="nav-list">
          <router-link to="/Index">首页</router-link>
        </li>
        <!-- Index end -->

        <!-- BtcTrend start -->
        <li class="nav-list">
          <router-link to="/BtcTrend">BTC行情</router-link>
        </li>
        <!-- BtcTrend end -->

        <!-- News start -->
        <li class="nav-list">
          <router-link to="/News">资讯</router-link>
        </li>
        <!-- News end -->

        <!-- ContactUs start -->
        <li class="nav-list">
          <router-link to="/About">联系我们</router-link>
        </li>
        <!-- ContactUs end -->
      </ul>
      <!-- nav end -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped lang="less">
  @import "../assets/less/common";

  .nav {
    height: 45px;
    background: #cccccc;

    > .container {
      width: 800px;
      height: 100%;
      /*border:1px solid red;*/
      margin: 0 auto;
      > .logo {
        height: 45px;

        .f_l();
        > a {
          display: block;
          height: 100%;

          img {
            display: block;
            width: 30px;
            height: 30px;
            .f_l();
            margin-top: 7px;
          }

          .doName {
            display: block;
            .f_r();
            height: 45px;
            margin-left: 5px;
            font-family: Consolas, 'Microsoft YaHei', sans-serif;
            font-size: 16px;
            color: rgb(255, 255, 255);
            text-align: center;
            line-height: 2.8125;
          }
        }
      }
      > .nav-main {
        .f_r();
        height: 100%;
        > .nav-list {
          .f_l();
          width: 80px;
          height: 100%;

          > a {
            display: block;
            width: 100%;
            height: 100%;
            font-family: Consolas, 'Microsoft YaHei', sans-serif;
            font-size: 18px;
            color: rgb(255, 255, 255);
            text-align: center;
            line-height: 2.5;
            position: relative;
            &:before {
              display: block;
              content: "";
              width: 0px;
              height: 3px;
              margin: 0 auto;
              background: red;
              position: relative;
              top: 45px;
              left: 0;
              z-index: 1000;
              -webkit-transition: width 500ms linear;
              -moz-transition: width 500ms linear;
              -ms-transition: width 500ms linear;
              -o-transition: width 500ms linear;
              transition: width 500ms linear;
            }
            &:hover {
              &:before {
                /*-webkit-animation: navAnimate 800ms linear;
                -o-animation: navAnimate 800ms linear;
                animation: navAnimate 800ms linear;*/
                width: 100%;
              }
            }

            /*路由高亮*/
            &.active {
              &:before {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>
