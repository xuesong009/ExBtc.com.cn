# exbtc
## 1.使用less
###1.1 安装
``` 
安装 less && less-loader
npm install less less-loader --save
```
###1.2 配置
./build/webpack.base.config.js文件中:
```
module: {
   rules: [
      ...
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
   ]
},
```

###1.3 使用
2种使用方式
####1.3.1 添加lang="less"
style标签中添加lang="less"
```
<style lang="less">
  /* less code */
<style>
```

####1.3.2 引入外部.less文件

style标签中引入外部.less文件
```
如: @import "../../index.less"
```

## 2.项目结构
###2.1 ./src/pages
####2.1.1 Index.vue
Index.vue 首页;
引用:Nav.vue/Banner.vue;

####2.1.2 News.vue
News.vue 资讯;
引用:Nav.vue;

####2.1.3 BtcTrend.vue
BtcTrend.vue 行情;
引用:Nav.vue;

####2.1.4 About.vue
About.vue 关于我们;
引用:Nav.vue;

2个子页面:
./components/AboutUs.vue;
./components/ContactUs.vue;
相关配置:
```vue
<div class="wrap">
  <!-- nav start -->
  <div class="contact-nav">
     <ul>
        <li>
          <!-- About us start -->
          <router-link to="/About/AboutUs">关于我们</router-link>
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
```

../router/index.js相关配置:
```
{
  path: '/About',
  name: 'About',
  component: About,
  redirect: '/About/AboutUs',
  children: [
     {
        /* 注意路径 */
        path: 'AboutUs',
        component: AboutUs
     },
     {
        /* 注意路径 */
        path: 'ContactUs',
        component: ContactUs
     }
  ]
}
```

###2.2 ./src/components
Nav.vue 组织页面(pages);
```$xslt
<div class="nav">
    <ul class="container">
      <li class="nav-list">
        <router-link to="/Index">首页</router-link>
      </li>
      <li class="nav-list">
        <router-link to="/BtcTrend">Btc行情</router-link>
      </li>
      <li class="nav-list">
        <router-link to="/News">资讯</router-link>
      </li>
      <li class="nav-list">
        <router-link to="/ContactUs">联系</router-link>
      </li>
    </ul>
  </div>
```

###2.3 ./src/App.vue
App.vue中使用Nav.vue;
页面渲染在这里;
```$xslt
<div id="app">
    <Nav/>
    <router-view/>
  </div>
```

###2.3 ./src/router
index.js 路由管理;
```$xslt
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/BtcTrend',
      name: 'BtcTrend',
      component: BtcTrend
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
});
```



## 3.备注
###3.1 common.less
位置:
使用:
字体图标使用参考:./src/fonts/demo_index.html;
