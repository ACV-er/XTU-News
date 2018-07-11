<template>
  <div class="news-content">
    <image-info-part class="news-list" titleColor="#b03534" borderColor="#efc86c" title="综合要闻" :boldTitle="true" :listData="newsList" :currPage="currPage" @pageChanged="changePage"></image-info-part>

    <time-info-part class="recent-hot-spots" title="近期热点" :title-config="{ bold: true }" :no-more="true" :time-info-list="hotSpotsInfo">
      <i class="iconfont icon-xiaoshouqushi" slot="icon"></i>
    </time-info-part>
  </div>
</template>

<script>
// import InfoPart from '@/base/info-part/info-part'
import ImageInfoPart from '@/base/image-info-part/image-info-part'
import TimeInfoPart from '@/base/time-info-part/time-info-part'
import NewsInfo from './news-mock-info'

// const PERPAGE_NUMBER = 25 // 每页显示的内容个数
// const DISPLAY_PAGE_NUMBER = 9 // 最长显示页码的个数

export default {
  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      newsList: [],
      hotSpotsInfo: []
    }
  },
  mounted() {
    this._getHotSpotsInfo()
    this._getNewsList()
  },
  methods: {
    _getNewsList() {
      this.newsList = [
        {
          title: '第' + this.currPage + '页，1联建区615平方米违章建筑被拆除',
          intro: '1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
          date: '2018.02.10',
          view: 5555
        },
        {
          title: '第' + this.currPage + '页，2联建区615平方米违章建筑被拆除',
          intro: '2联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
          date: '2018.02.10',
          view: 5555
        }
      ]
    },
    _getHotSpotsInfo() {
      this.hotSpotsInfo = NewsInfo
    },
    changePage(page) {
      this.$router.push(`/news/${page}`)
      this.currPage = page
      this.newsList = [
        {
          title: '第' + this.currPage + '页，1联建区615平方米违章建筑被拆除',
          intro: '这里是第' + this.currPage + '页',
          linkUrl: 'https://baidu.com/',
          imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
          date: '2018.02.10',
          view: 5555
        },
        {
          title: '第' + this.currPage + '页，2联建区615平方米违章建筑被拆除',
          intro: '这里是第' + this.currPage + '页',
          linkUrl: 'https://baidu.com/',
          imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
          date: '2018.02.10',
          view: 5555
        }
      ]
    }
  },
  components: {
    ImageInfoPart,
    TimeInfoPart
  }
}
</script>

<style lang="scss" scoped>
.news-content {
  @include limit-width();
  padding: 35px 0;
  display: flex;
  align-items: flex-start;

  .news-list {
    width: 650px;
  }

  .recent-hot-spots {
    flex: 1;
    padding: 0 35px;
  }
}
</style>
