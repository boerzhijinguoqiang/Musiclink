import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import rulePage from '@/components/rulePage/rulePage'
import morePage from '@/components/morePage/morePage'
import home from '@/components/home/home'
import videoPage from '@/components/videoPage/videoPage'
import login from '@/components/login/login'
import trackPage from '@/components/trackPage/trackPage'
import UniqueCover from '@/components/UniqueCover/UniqueCover'
import myOriginal from '@/components/myOriginal/myOriginal'
Vue.use(Router)
export default new Router({
  routes: [
  {
      path: '/rulePage',
      name: 'rulePage',
      component: rulePage
    },
    {
      path: '/home',
      name: 'home',
      component: home

    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/morePage',
      name:'morePage',
      component: morePage
    },
    {
      path:'/videoPage',
      name:'videoPage',
      component: videoPage
    },
    {
      path:'/login',
      name:'login',
      component: login
    },
    {
      path:'/trackPage',
      name:'trackPage',
      component: trackPage
    },
    {
      path:'/UniqueCover',
      name:'UniqueCover',
      component: UniqueCover
    },
    {
      path:'/myOriginal',
      name:'myOriginal',
      component: myOriginal
    }
  ],
  mode: 'history'
})
