<template>
  <div class="footer">
    <div class="wrap">
      <div class="footer-info clearfix">
        <!-- 热门链接 start -->
        <div class="hotLinks links">
          <div class="info-title">热门链接</div>
          <ul>
            <li class="info-list"><a href="">比特币行情</a></li>
            <li class="info-list"><a href="">比特币价格</a></li>
            <li class="info-list"><a href="">比特币资讯</a></li>
            <li class="info-list"><a href="">钱包</a></li>
            <li class="info-list"><a href="">挖矿</a></li>
            <li class="info-list"><a href="">比特币是什么</a></li>
            <li class="info-list"><a href="">如何购买比特币</a></li>
          </ul>
        </div>
        <!-- 热门链接 end -->

        <!-- 热门币种 start -->
        <div class="hotCoins links">
          <div class="info-title">热门币种</div>
          <ul>
            <li class="info-list"><a href="">BTC</a></li>
            <li class="info-list"><a href="">XRP</a></li>
            <li class="info-list"><a href="">LTC</a></li>
            <li class="info-list"><a href="">ETH</a></li>
            <li class="info-list"><a href="">EOS</a></li>
          </ul>
        </div>
        <!-- 热门币种 end -->

        <!-- about us start -->
        <div class="aboutUs links">
          <div class="info-title">关于我们</div>
          <ul class="clearfix">
            <li class="info-list"><a href="">战略合作</a></li>
            <li class="info-list"><a href="">关于我们</a></li>
            <li class="info-list"><a href="">联系我们</a></li>
          </ul>
        </div>
        <!-- about us end -->
      </div>
      <div class="footer-bottom">
        <div class="logo">
          <img src="../assets/images/footer-logo.png" alt=""/>
        </div>
        <div class="copyright">
          <a href="">Copyright &copy; 2019-2059 xuesong099 All rights reserved.</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {};
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/common";

  .footer {
    width: 100%;
    height: 235px;
    overflow: hidden;
    background: #999999;
    /*定位 底部*/
    position: absolute;
    left: 0;
    bottom: 0;
    > .wrap {
      width: 800px;
      height: 100%;
      margin: 0 auto;

      > .footer-info {
        margin: 15px 30px 10px;
        > .links {
          .f_l();
          width: 180px;
          > .info-title {
            font-family: Consolas, 'Microsoft YaHei', Arial, sans-serif;
            color: rgba(255, 255, 255, .6);
            filter: alpha(opacity=60);
            font-size: 16px;
            margin-bottom: 5px;
          }
          > ul {
            > .info-list {
              .f_l();
              margin: 5px;
              &:nth-child(1),
              &:nth-child(3),
              &:nth-child(6),
              &:last-child {
                margin-left: 0;
              }
              &:last-child {
                margin-bottom: 0;
              }
              > a {
                font-family: Consolas, "Microsoft YaHei", Arial, sans-serif;
                font-size: 14px;
                color: rgba(0, 0, 0, .8);
                filter: alpha(opacity=80);
                &:hover {
                  color: rgba(255, 255, 255, .8);
                  filter: alpha(opacity=80);
                }
              }
            }
          }
        }
        .hotCoins {
          margin: 0 50px 0 120px;
        }
      }
      > .footer-bottom {
        height: 160px;
        margin: 0 30px 0px 25px;

        text-align: center;
        > .copyright {
          margin-top: 8px;
          > a {
            font-family: Consolas, Arial, "Microsoft YaHei", sans-serif;
            font-size: 14px;
            color: rgba(255, 255, 255, .6);
            filter: alpha(opacity=60);
          }
        }
      }
    }
  }
</style>
