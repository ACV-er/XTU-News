import Mock from 'mockjs'

const URL_BASE = 'https://xtunews.kilingzhang.com/phpcms-api'

Mock.mock(`${URL_BASE}/home.php`, {
  'code': 0,
  'data': {
    'list': {
      // mediaInfo
      'shouyejiaodiantu|5': [ // sliderList
        {
          // ${item.origin_news_id || item.news_id}
          'origin_news_id|+1': 0,
          'news_id|+1': 0,
          // item.pic
          'pic': '',
          // item.title
          'title': '@cword(5,10)',
          // item.description
          'description': '@csentence(10, 30)',
          // item.mtime.split(' ')[0].split('-')[2]
          // type(date) or type(datetime)
          'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")'
        }
      ],
      'meitixiangda|5': [ // mediaList
        {
          // item.news_id
          'news_id|+1': 0,
          // item.mtime
          'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")',
          // item.view_count
          // 浏览量
          'view_count|1-100': 50,
          // ${item.type}
          // data image type
          'type': 'xxx',
          // item.title
          'title': '@cword(5,10)'
        }
      ],
      // newsInfo
      'zonghexinwen|5': [ // newsList
        // id0 为 figure
        {
          // <router-link :to="`news/view/${figureInfo.news_id}`">
          'news_id|+1': 0,
          'title': '@cword(5,10)',
          'pic': '',
          'description': '@csentence(10, 30)',
          'linkUrl': '',
          // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
          'type': '',
          'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")'
        }
      ],
      'jinqiredian|10': [ // hotSpotsList
        {
          // <router-link :to="`news/view/${figureInfo.news_id}`">
          'news_id|+1': 0,
          'title': '@cword(5,10)',
          'pic': '',
          'description': '@csentence(10, 30)',
          'linkUrl': '',
          // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
          'type': '',
          'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")'
        }
      ],
      // communicationInfo
      'yuanxichuanzhen|5': [ // faxList
        {
          // <router-link :to="`news/view/${figureInfo.news_id}`">
          'news_id|+1': 0,
          'title': '@cword(5,10)',
          'pic': '',
          'description': '@csentence(10, 30)',
          'linkUrl': '',
          // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
          'type': '',
          'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")'
        }
      ],
      'xiangdaxiaobao|10': [ // paperList
        {
          // <router-link :to="`news/view/${figureInfo.news_id}`">
          'news_id|+1': 0,
          'title': '@cword(5,10)',
          'pic': '',
          'description': '@csentence(10, 30)',
          'linkUrl': '',
          // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
          'type': '',
          'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")'
        }
      ],
      // markInfo
      'xiangdayinji|5': [ // markList
        {
          // <router-link :to="`news/view/${figureInfo.news_id}`">
          'news_id|+1': 0,
          'title': '@cword(5,10)',
          'pic': '',
          'description': '@csentence(10, 30)',
          'linkUrl': '',
          // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
          'type': '',
          'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")'
        }
      ]
    }
  }
})