<template>
  <div class="media-content" id="media-content">
    <info-part class="media-list" titleColor="#b03534" borderColor="#efc86c" title="媒体湘大" :boldTitle="true" :needListDots="true" :noMore="true" :listData="mediaList" pageControl :total="total" :limit="limit" @pageChanged="changePage" :loading="mediaNewsLoading"></info-part>
    <hot-spots/>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import TimeInfoPart from '@/base/time-info-part/time-info-part'
import HotSpots from '@/base/hot-spots/hot-spots'
import { getMediaNewsByPage, handleError } from '@/api'
import { scroller } from 'vue-scrollto/src/scrollTo'

// const PERPAGE_NUMBER = 25 // 每页显示的内容个数
// const DISPLAY_PAGE_NUMBER = 9 // 最长显示页码的个数

export default {
  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      mediaList: [],
      hotSpotsInfo: [],
      mediaNewsLoading: false,
      total: 0,
      limit: 10
    }
  },
  mounted() {
    this._getMediaNewsList()
  },
  methods: {
    async _getMediaNewsList() {
      this.mediaNewsLoading = true
      let data = (await getMediaNewsByPage(this.currPage)).data
      if (data.code === 0) {
        this.total = data.data ? +data.data.count : 0
        this.mediaList = data.data.list ? data.data.list.map(item => {
          return {
            title: item.title,
            linkUrl: `/media/view/${item.news_id}`,
            markText: item.mtime.split(' ')[0].substr(5)
          }
        }) : null
      } else {
        handleError(data)
      }
      this.mediaNewsLoading = false
    },
    changePage(page) {
      this.$router.push(`/media/${page}`)
      this.currPage = page
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.currPage = to.params.page || 1
    next()
    await this._getMediaNewsList()
    scroller()('#media-content')
  },
  components: {
    InfoPart,
    TimeInfoPart,
    HotSpots
  }
}
</script>

<style lang="scss" scoped>
.media-content {
  @include limit-width();
  padding: 35px 0;
  display: flex;
  align-items: flex-start;

  .media-list {
    width: 650px;
  }

  .recent-hot-spots {
    flex: 1;
    padding: 0 35px;
  }
}
</style>
