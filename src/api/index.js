export function getNewsByPage(page) {
  const list = [
    {
      title: '第' + page + '页，1联建区615平方米违章建筑被拆除',
      intro: '这里是第' + page + '页',
      linkUrl: 'https://baidu.com/',
      imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
      date: '2018.02.10',
      view: 5555
    },
    {
      title: '第' + page + '页，2联建区615平方米违章建筑被拆除',
      intro: '这里是第' + page + '页',
      linkUrl: 'https://baidu.com/',
      imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
      date: '2018.02.10',
      view: 5555
    },
    {
      title: '第' + page + '页，3联建区615平方米违章建筑被拆除',
      intro: '这里是第' + page + '页',
      linkUrl: 'https://baidu.com/',
      imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
      date: '2018.02.10',
      view: 5555
    },
    {
      title: '第' + page + '页，4联建区615平方米违章建筑被拆除',
      intro: '这里是第' + page + '页',
      linkUrl: 'https://baidu.com/',
      imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
      date: '2018.02.10',
      view: 5555
    },
    {
      title: '第' + page + '页，5联建区615平方米违章建筑被拆除',
      intro: '这里是第' + page + '页',
      linkUrl: 'https://baidu.com/',
      imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
      date: '2018.02.10',
      view: 5555
    }
  ]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(list)
    }, 1500)
  })
}

export function getMediaNewsByPage(page, size = 10) {
  const list = []
  for (let i = 0; i < size; i++) {
    list.push({
      title: '【新湖南第 ' + page + ' 页】[湘潭] 组图|新湖南触控大屏“登陆”湘潭' + i,
      linkUrl: 'https://baidu.com/',
      markText: '07-11'
    })
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
}

export function getFaxByPage(page, size = 10) {
  const list = []
  for (let i = 0; i < size; i++) {
    list.push({
      title: '【新湖南第 ' + page + ' 页】[湘潭] 组图|新湖南触控大屏“登陆”湘潭' + i,
      linkUrl: 'https://baidu.com/',
      markText: '07-11'
    })
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
}

export function getVideoByPage(page, size = 10) {
  const list = []
  for (let i = 0; i < size; i++) {
    list.push({
      picUrl: 'http://www.xtu.edu.cn/d/file/xdxw/xnxw/2018-06-26/7bc630f2961187246ec56be26d4b0669.jpg',
      title: '「第 ' + page + ' 页」58级校友捐赠书法作品献礼60周年校庆' + i,
      linkUrl: 'http://news.xtu.edu.cn/html/zonghexw/show_10883.html',
      date: 1531652795909
    })
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
}

export function getHotSpots(size = 5) {
  const data = [
    {
      date: '2018.02.06',
      title: '【湖南教育电视台】湘大信用法治平台建设协作会长沙举行',
      view: 5555,
      linkUrl: '#'
    },
    {
      date: '2018.02.06',
      title: '【湖南卫视】湘潭大学与美国杜兰大学联合培养信用法治人才',
      view: 5555,
      linkUrl: '#'
    },
    {
      date: '2018.02.05',
      title: '【湖南日报】湘大信用法治平台建设协作会长沙举行',
      view: 5555,
      linkUrl: '#'
    },
    {
      date: '2018.02.05',
      title: '【湖南日报】湘大信用法治平台',
      view: 5555,
      linkUrl: '#'
    },
    {
      date: '2018.02.05',
      title: '【中国新闻网】湘大信用法治平台建设协作会举行搭建高端教研平台',
      view: 5555,
      linkUrl: '#'
    }
  ]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}
