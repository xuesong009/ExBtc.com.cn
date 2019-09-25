import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index'
import BtcTrend from '../pages/BtcTrend'
import News from '../pages/News'
import About from '../pages/About'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'

Vue.use(Router);

export default new Router({
  /*路由高亮*/
  linkActiveClass:'active',
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
  ]
});
