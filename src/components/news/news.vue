<template>
  <div class="news-content" id="news-content">
    <image-info-part class="news-list" titleColor="#b03534" borderColor="#efc86c" title="综合要闻" :boldTitle="true" :listData="newsList" :currPage="currPage" pageControl :total="total" :limit="limit" @pageChanged="changePage" :loading="newsLoading"></image-info-part>
    <HotSpots/>
  </div>
</template>

<script>
// import InfoPart from '@/base/info-part/info-part'
import ImageInfoPart from '@/base/image-info-part/image-info-part'
import HotSpots from '@/base/hot-spots/hot-spots'
import { scroller } from 'vue-scrollto/src/scrollTo'
import { getNewsByPage, handleError } from '@/api'

// const PERPAGE_NUMBER = 25 // 每页显示的内容个数
// const DISPLAY_PAGE_NUMBER = 9 // 最长显示页码的个数

export default {
  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      newsList: null,
      newsLoading: false,
      total: 0,
      limit: 10
    }
  },
  mounted() {
    this._getNewsList()
  },
  methods: {
    async _getNewsList() {
      this.newsLoading = true
      let data = (await getNewsByPage(this.currPage, this.limit)).data
      if (data.code === 0) {
        this.total = data.data ? +data.data.count : 0
        this.newsList = data.data.list ? data.data.list.map(item => {
          return {
            id: item.news_id,
            title: item.title,
            intro: item.description,
            linkUrl: `/news/view/${item.news_id}`,
            imageUrl: item.pic || '',
            date: item.mtime,
            view: item.view_count || 123
          }
        }) : null
        // {
        //   title: '第' + page + '页，1联建区615平方米违章建筑被拆除',
        //     intro: '这里是第' + page + '页',
        //   linkUrl: 'https://baidu.com/',
        //   imageUrl: 'http://news.xtu.edu.cn/document/photo/sfnxav68wq.jpg',
        //   date: '2018.02.10',
        //   view: 5555
        // }
      } else {
        handleError(data)
      }
      this.newsLoading = false
    },
    changePage(page) {
      this.$router.push(`/news/${page}`)
      this.currPage = +page
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.currPage = parseInt(to.params.page) || 1
    next()
    await this._getNewsList()
    scroller()('#news-content')
  },
  components: {
    ImageInfoPart,
    HotSpots
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
}
</style>
