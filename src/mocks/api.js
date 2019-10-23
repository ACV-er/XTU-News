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
          'pic': '@image',
          // item.title
          'title': '@ctitle(5,10)',
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
          'title': '@ctitle(5,10)'
        }
      ],
      // newsInfo
      'zonghexinwen|5': [ // newsList
        // id0 为 figure
        {
          // <router-link :to="`news/view/${figureInfo.news_id}`">
          'news_id|+1': 0,
          'title': '@ctitle(5,10)',
          'pic': '@image',
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
          'title': '@ctitle(5,10)',
          'pic': '@image',
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
          'title': '@ctitle(5,10)',
          'pic': '@image',
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
          'title': '@ctitle(5,10)',
          'pic': '@image',
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
          'title': '@ctitle(5,10)',
          'pic': '@image',
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

let newsList = Mock.mock({
  'code': 0,
  'data': {
    'list|10': [
      {
        'news_id|+1': 0,
        // item.pic
        'pic': '@image("320x160")',
        // item.title
        'title': '@ctitle',
        // item.description
        'description': '@csentence(10, 30)',
        // type(date) or type(datetime)
        'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")',
        'view_count': 0
      }
    ]
  }
})

// Mock.mock(`${URL_BASE}/newslist.php`, function(options) {
//   const params = options.body
//   const letter = params.letter
//   const page = params.page
//   const limit = params.limit
// })

Mock.mock(`${URL_BASE}/newslist.php?letter=zonghexinwen&page=1&limit=10`, newsList)

Mock.mock(`${URL_BASE}/newslist.php?letter=meitixiangda&page=1&limit=10`, newsList)

Mock.mock(`${URL_BASE}/newslist.php?letter=yuanxichuanzhen&page=1&limit=10`, newsList)

Mock.mock(`${URL_BASE}/newslist.php?letter=shipinxinwen&page=1&limit=10`, newsList)

Mock.mock(`${URL_BASE}/newslist.php?letter=xiangdarenwu&page=1&limit=10`, {
  'code': 0,
  'data': {
    'list|10': [
      {
        'news_id|+1': 0,
        // item.pic
        'pic': '@image',
        // item.title
        'title': '@cname',
        // item.description
        'description': '@csentence(10, 30)',
        // type(date) or type(datetime)
        'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")',
        'view_count': 0
      }
    ]
  }
})

Mock.mock(`${URL_BASE}/hotlist.php?limit=5`, {
  'code': 0,
  'data': {
    'list|10': [
      {
        'news_id|+1': 0,
        // item.pic
        'pic': '@image',
        // item.title
        'title': '@ctitle',
        // item.description
        'description': '@csentence(10, 30)',
        // type(date) or type(datetime)
        'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")',
        'view_count': 0
      }
    ]
  }
})

Mock.mock(/\/news.php\?news_id=([0-9]*)/, {
  'code': 0,
  'data': {
    'news_id': 0,
    // item.pic
    // 'pic': '@image()',
    // item.title
    'title': '@ctitle',
    // item.description
    'description': '@csentence(10, 30)',
    'content': '@cparagraph(30, 40)',
    // type(date) or type(datetime)
    'mtime': '@datetime("yyyy-MM-dd hh:mm:ss")',
    'view_count|1-100': 0
  }
})
