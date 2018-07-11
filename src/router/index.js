import Vue from 'vue'
import Router from 'vue-router'

/// 一级页面
import Home from '@/components/home/home'
import Introduction from '@/components/introduction/introduction'
import Culture from '@/components/culture/culture'
import News from '@/components/news/news'
import Media from '@/components/media/media'
import Fax from '@/components/fax/fax'

/// 二级页面
// 文化标识
import CultureName from '@/components/culture/name/name'
import CultureBadge from '@/components/culture/badge/badge'
import CultureMotto from '@/components/culture/motto/motto'
import CultureFlag from '@/components/culture/flag/flag'
import CultureSong from '@/components/culture/song/song'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/introduction',
      component: Introduction
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/news/:page',
      component: News
    },
    {
      path: '/media',
      component: Media
    },
    {
      path: '/media/:page',
      component: Media
    },
    {
      path: '/fax',
      component: Fax
    },
    {
      path: '/culture',
      component: Culture,
      redirect: '/culture/name',
      children: [
        {
          path: 'name',
          component: CultureName
        },
        {
          path: 'badge',
          component: CultureBadge
        },
        {
          path: 'motto',
          component: CultureMotto
        },
        {
          path: 'song',
          component: CultureSong
        },
        {
          path: 'flag',
          component: CultureFlag
        }
      ]
    }
  ],
  scrollBehavior(to, from) {
    if (to.hash && to.hash !== '#') {
      return {
        selector: to.hash
      }
    }
  }
})
