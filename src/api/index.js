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
