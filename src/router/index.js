import Vue from 'vue'
import Router from 'vue-router'

/// 一级页面
import Home from '@/components/home/home'
import Introduction from '@/components/introduction/introduction'
import News from '@/components/news/news'
import Media from '@/components/media/media'
import Fax from '@/components/fax/fax'
import Video from '@/components/video/video'
import Mark from '@/components/mark/mark'
import Culture from '@/components/culture/culture'
import Contribute from '@/components/contribute/contribute'

/// 二级页面
// 新闻
import NewsContent from '@/components/news/NewsContent/news-content'
import MediaContent from '@/components/media/MediaContent/media-content'
import FaxContent from '@/components/fax/FaxContent/fax-content'
import MarkContent from '@/components/mark/MarkContent/mark-content'
import VideoContent from '@/components/video/VideoContent/video-content'

// 湘大印记
import MarkHistory from '@/components/mark/history/history'
import MarkCharacter from '@/components/mark/character/character'

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
      component: News,
      children: [
        {
          path: ':page',
          component: News
        }
      ]
    },
    {
      path: '/news/view/:newsId',
      component: NewsContent
    },
    {
      path: '/media',
      component: Media,
      children: [
        {
          path: ':page',
          component: Media
        }
      ]
    },
    {
      path: '/media/view/:newsId',
      component: MediaContent
    },
    {
      path: '/fax',
      component: Fax,
      children: [
        {
          path: ':page',
          component: Fax
        }
      ]
    },
    {
      path: '/fax/view/:newsId',
      component: FaxContent
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/video/view/:newsId',
      component: VideoContent
    },
    {
      path: '/mark',
      component: Mark,
      redirect: '/mark/character',
      children: [
        {
          path: 'history',
          component: MarkHistory
        },
        {
          path: 'character',
          component: MarkCharacter,
          children: [
            {
              path: ':page',
              component: Fax
            }
          ]
        }
      ]
    },
    {
      path: '/mark/view/:newsId',
      component: MarkContent
    },
    // {
    //   path: '/mark/:newsId',
    //   component: Mark
    // },
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
    },
    {
      path: '/contribute',
      component: Contribute
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
