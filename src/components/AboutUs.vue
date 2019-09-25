<template>
  <div class="aboutUs">
    <div class="aboutus-title">{{title}}</div>
    <div class="aboutus-info">
      <div class="logo-msg">
        <img src="../assets/images/aboutEx-logo.png" alt=""/>
        <p class="exInfo">ExBTC（www.exbtc.com.cn）主要为国内用户提供比特币等数字资产的行情服务。</p>
      </div>
      <div class="saleInfo">
        <span class="iconfont icon-tishishuoming tip">备注&nbsp;以下域名可以出售:</span>
        <div class="doNames">
          <ul>
            <li class="doNameList"><1> exbtc.com.cn</li>
            <li class="doNameList"><2> exbi.com.cn</li>
          </ul>
        </div>
        <p class="tipInfo">如贵公司需要该域名,可以联系我们进行购买;</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutUs",
    data() {
      return {
        title: '交易所简介'
      };
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/fonts/iconfont.css";

  .aboutUs {
    > .aboutus-title {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #cccccc;
      font-family: "Microsoft YaHei", '宋体', Arial, sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 2;
    }
    > .aboutus-info {
      > .logo-msg {
        width: 100%;

        > img {
          display: block;
          width: 185px;
          height: 55px;
          margin: 30px auto 20px;
        }
        > .exInfo {
          width: 100%;
          height: 30px;
          font-family: Consolas, "Microsoft YaHei", Arial, sans-serif;
          font-size: 15px;
          color: rgb(0, 0, 0);
          text-align: left;
          line-height: 2;
        }
      }
      > .saleInfo {
        width: 100%;
        height: 65px;
        margin-top: 20px;
        > .tip {
          font-family: "Microsoft YaHei", "宋体", sans-serif;
          font-size: 18px;
          color: rgb(255, 0, 0);
          &:before {
            margin-right: 5px;
          }
        }
        >.doNames{
          width: 100%;
          height:36px;
          padding:5px 0;
          margin-bottom: 5px;
          >ul li{
            font-family: Consolas,Arial,sans-serif;
            font-size: 18px;
            font-weight: 700;
          }
        }
        > .tipInfo {
          width: 100%;
          height: 30px;
          font-family: Consolas, "Microsoft YaHei", "宋体", sans-serif;
          font-size: 15px;
          text-indent: 2rem;
          color: rgb(0, 0, 0);
          line-height: 2;
        }
      }
    }
  }
</style>
