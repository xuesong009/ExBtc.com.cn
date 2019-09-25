<template>
  <div class="contact">
    <div class="contactus-title">{{title}}</div>
    <ul class="contactus-info">
      <!-- Email start -->
      <li class="list">
        <p class="title">
          <span class="iconfont icon-email"></span>
          <span class="email">邮箱地址</span>
        </p>
        <span class="info">767825490@qq.com</span>
      </li>
      <!-- Email end -->

      <!-- Phone start -->
      <li class="list">
        <p class="title">
          <span class="iconfont icon-shouji"></span>
          <span class="phone">电&nbsp;&nbsp;话</span>
        </p>
        <span class="info">183-0658-6909</span>
      </li>
      <!-- Phone end -->

      <!-- weChat end -->
      <li class="list">
        <p class="title">
          <span class="iconfont icon-wechat"></span>
          <span class="weChat">微&nbsp;&nbsp;信</span>
        </p>
        <span class="info">xuesong099</span>
      </li>
      <!-- weChat start -->

      <!-- QQ start -->
      <li class="list">
        <p class="title">
          <span class="iconfont icon-qq"></span>
          <span class="QQ">QQ</span>
        </p>
        <span class="info">767825490</span>
      </li>
      <!-- QQ end -->

      <!-- Address start -->
      <li class="list">
        <p class="title">
          <span class="iconfont icon-tubiao-houtai-"></span>
          <span class="address">地址</span>
        </p>
        <span class="info">山东省&nbsp;临沂市&nbsp;兰山区</span>
      </li>
      <!-- Address end -->
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ContactUs",
    data() {
      return {
        title: '联系我们'
      };
    },
    components:{},
    computed:{},
    methods:{},
    created:{}
  }
</script>

<style scoped lang="less">
  @import "../assets/less/common";
  @import "../assets/fonts/iconfont.css";

  .contact {
    margin-bottom: 15px;
    > .contactus-title {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #cccccc;
      font-family: "Microsoft YaHei", '宋体', Arial, sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 2;
    }
    > .contactus-info {
      margin-top: 25px;
      > .list {
        width: 100%;
        height: 45px;
        > .title {
          width: 120px;
          margin-right: 15px;
          >.iconfont{
            font-size: 16px;
            margin-right: 5px;
          }
        }
        >.title,
        >.info{
          display: inline-block;
          height: 100%;
          font-family: "Microsoft YaHei", Consolas, Arial, sans-serif;
          font-size: 16px;
          text-align: left;
          line-height: 2.8125;
        }
      }
    }
  }
</style>
