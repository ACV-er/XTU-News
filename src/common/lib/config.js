// 顶部导航
export const navList = [
  {
    title: '首页',
    url: '/home'
  },
  {
    title: '部门概况',
    url: '/introduction'
  },
  {
    title: '综合要闻',
    url: '/news'
  },
  {
    title: '媒体湘大',
    url: '/media'
  },
  {
    title: '院系传真',
    url: '/fax'
  },
  {
    title: '视频新闻',
    url: '/video'
  },
  {
    title: '湘大校报',
    isOutLink: true,
    url: 'http://xtu.cuepa.cn/'
  },
  {
    title: '湘大印迹',
    url: '/mark'
  },
  {
    title: '文化标识',
    url: '/culture'
  },
  {
    title: '在线投稿',
    url: '/contribute'
  }
]

// 通讯员专栏
export const correspondentLink = [
  {
    title: '上月投稿之星',
    linkUrl: 'https://baidu.com/'
  },
  {
    title: '本月投稿之星',
    linkUrl: 'https://baidu.com/'
  },
  {
    title: '院系投稿总排行',
    linkUrl: 'https://baidu.com/'
  },
  {
    title: '二级单位投稿总排行',
    linkUrl: 'https://baidu.com/'
  }
]

// 友情链接专栏
export const friendshipLink = [
  {
    title: '湘潭大学首页',
    linkUrl: 'http://www.xtu.edu.cn/'
  },
  {
    title: '新华网',
    linkUrl: 'http://www.news.cn/'
  },
  {
    title: '人民网',
    linkUrl: 'http://www.people.com.cn/'
  },
  {
    title: '中国新闻网',
    linkUrl: 'http://www.chinanews.com.cn/'
  }
]

// 部门概述目录
export const introductionMenu = [
  {
    title: '机构设置',
    anchor: 'org',
    link: '/introduction#org',
    contents: [
      {
        title: '部领导',
        link: '#'
      },
      {
        title: '办公室',
        link: '#'
      },
      {
        title: '《湘潭大学报》编辑部',
        link: '#'
      },
      {
        title: '湘潭大学广播电视台',
        link: '#'
      }
    ]
  },
  {
    title: '魅力湘大',
    anchor: 'charmingXTU',
    link: '/introduction#charmingXTU',
    contents: [
      {
        title: '宣传画册',
        link: '#'
      },
      {
        title: '宣传视频',
        link: '#'
      },
      {
        title: '湘大校歌',
        link: '#'
      },
      {
        title: '电子橱窗',
        link: '#'
      },
      {
        title: '湘大图片',
        link: '#'
      }
    ]
  },
  {
    title: '通知公告',
    anchor: 'notice',
    link: '/introduction#notice',
    moreLink: '#',
    contents: [
      {
        title: '关于组织 2019 年下半年及部分上半年赴任汉语教师志愿者报名的通知',
        link: '#'
      },
      {
        title: '关于报送 2019 年教学科研人员出国开展学术交流合作年度计划的通知',
        link: '#'
      },
      {
        title: '2019 年国家公派高级研究学者、访问学者、博士后项目选派办法',
        link: '#'
      },
      {
        title: '关于做好 2019 年上半年全国计算机等级考试',
        link: '#'
      },
      {
        title: '关于集中办理数字电视收视费缴费的公告',
        link: '#'
      }
    ]
  },
  {
    title: '下载专区',
    anchor: 'download',
    link: '/introduction#download',
    moreLink: '#',
    contents: [
      {
        title: '下载文件1',
        link: '#'
      },
      {
        title: '下载文件2',
        link: '#'
      },
      {
        title: '下载文件3',
        link: '#'
      },
      {
        title: '下载文件4',
        link: '#'
      }
    ]
  }
]

// 文化标识目录
export const cultureMenu = [
  {
    title: '校名',
    link: '/culture/name'
  },
  {
    title: '校徽',
    link: '/culture/badge'
  },
  {
    title: '校训',
    link: '/culture/motto'
  },
  {
    title: '校歌',
    link: '/culture/song'
  },
  {
    title: '校旗',
    link: '/culture/flag'
  }
]

// 湘大印记目录
export const markMenu = [
  {
    title: '湘大人物',
    link: '/mark/character'
  },
  {
    title: '湘大史话',
    link: '/mark/history'
  }
]
