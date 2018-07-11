<template>
  <div class="xtu-news">
    <div class="news-container">
      <info-part class="important-news" title="综合要闻" border-color="#fbc566" more-url="https://baidu.com/" :hasFigure="true" :needListDots="true" :figure-info="figureInfo" :listData="listData"></info-part>

      <info-part class="hotspot" title="近期热点" more-url="https://baidu.com/" :listData="listData"></info-part>
    </div>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'

export default {
  data() {
    return {
      figureInfo: {
        title: '联建区615平方米违章建筑被拆除',
        desc:
          '2月8日，区政府联合我校党政办、宣传部、学生工作部（处）、保卫部（处）、后勤保障处、基建处、校地共建中心等部门，组织公安、城管执法局、消防部',
        picUrl:
          'http://news.tsinghua.edu.cn/publish/thunews/9658/20180403100529570810295/20180403100618578294003.jpg',
        linkUrl:
          'http://news.tsinghua.edu.cn/publish/thunews/9648/2018/20180403100529570810295/20180403100529570810295_.html'
      },
      listData: [
        {
          title:
            '1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '2联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '3联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '4联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '5联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        }
      ]
    }
  },
  components: {
    InfoPart
  }
}
</script>

<style lang="scss" scoped>
.xtu-news {
  background: #f1f1f1;
  min-width: $content-width;

  .news-container {
    @include limit-width();
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

    .important-news {
      width: 600px;
    }

    .hotspot {
      width: 310px;
    }
  }
}
</style>
