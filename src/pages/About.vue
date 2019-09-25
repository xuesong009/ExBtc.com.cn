<template>
  <!--
    备注:
       由于.wrap width 800px,而.footer width 100%,
       所以给定.box width 100%;
  -->
  <div class="box">
    <div class="wrap clearfix">
      <!-- nav start -->
      <div class="contact-nav">
        <div class="contact-title">
          <span class="iconfont icon-icon34"></span>
          <span class="title-info">关于我们</span>
        </div>
        <ul>
          <li>
            <!-- About us start -->
            <router-link to="/About/AboutUs">交易所简介</router-link>
            <!-- About us end -->
          </li>
          <li>
            <!-- Contact us start -->
            <router-link to="/About/ContactUs">联系我们</router-link>
            <!-- Contact us end -->
          </li>
        </ul>
      </div>
      <!-- nav end -->

      <!-- info start -->
      <div class="contact-info">
        <router-view></router-view>
      </div>
      <!-- info end -->
    </div>

    <!-- footer start -->
    <Footer/>
    <!-- footer end -->
  </div>
</template>

<script>
  import Footer from '../components/Footer'

  export default {
    name: "About",
    data() {
      return {};
    },
    components: {
      Footer
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped lang="less">
  @import "../assets/less/common";
  @import "../assets/fonts/iconfont.css";

  .box{
    width: 100%;
    >.wrap {
      width: 800px;
      margin: 0 auto;
      /*border: 1px solid red;*/
      > .contact-nav {
        width: 158px;
        border: 1px solid #cccccc;
        margin-top: 20px;
        .f_l();
        > .contact-title {
          width: 100%;
          height: 35px;

          > .icon-icon34 {
            margin-left: 10px;
          }
          > .title-info {
            font-family: "Microsoft YaHei", Arial, sans-serif;
            font-size: 14px;
            color: rgba(0, 0, 0, .5);
            filter: alpha(opacity=50);
            line-height: 2.5;
          }
        }
        > ul {
          width: 100%;
          > li {
            > a {
              display: block;
              width: 100%;
              height: 35px;
              /*:before position*/
              position: relative;
              font-family: "Microsoft YaHei", Arial, '宋体', sans-serif;
              font-size: 16px;
              color: rgb(0, 0, 0);
              text-indent: 2rem;
              line-height: 2.1875;

              /* 路由高亮 */
              &.active {
                background: #cccccc !important;
                &:before {
                  display: block;
                  content: "";
                  width: 5px;
                  height: 100%;
                  background: rgb(255, 0, 0);
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
            }

          }
        }
      }
      > .contact-info {
        .f_l();
        width: 600px;
        margin: 20px 20px 0;
      }
    }
  }
</style>
