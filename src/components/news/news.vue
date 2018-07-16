<template>
  <div class="news-content" id="news-content">
    <image-info-part class="news-list" titleColor="#b03534" borderColor="#efc86c" title="综合要闻" :boldTitle="true" :listData="newsList" :currPage="currPage" pageControl @pageChanged="changePage" :loading="newsLoading"></image-info-part>
    <HotSpots></HotSpots>
  </div>
</template>

<script>
// import InfoPart from '@/base/info-part/info-part'
import ImageInfoPart from '@/base/image-info-part/image-info-part'
import HotSpots from '@/base/hot-spots/hot-spots'
import { scroller } from 'vue-scrollto/src/scrollTo'
import { getNewsByPage } from '@/api'

// const PERPAGE_NUMBER = 25 // 每页显示的内容个数
// const DISPLAY_PAGE_NUMBER = 9 // 最长显示页码的个数

export default {
  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      newsList: [],
      newsLoading: false
    }
  },
  mounted() {
    this._getNewsList()
  },
  methods: {
    async _getNewsList() {
      this.newsLoading = true
      this.newsList = await getNewsByPage(this.currPage)
      this.newsLoading = false
    },
    changePage(page) {
      this.$router.push(`/news/${page}`)
      this.currPage = page
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.currPage = to.params.page || 1
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
