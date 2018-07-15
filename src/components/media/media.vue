<template>
  <div class="media-content" id="media-content">
    <info-part class="media-list" titleColor="#b03534" borderColor="#efc86c" title="媒体湘大" :boldTitle="true" :needListDots="true" :noMore="true" :listData="mediaList" pageControl @pageChanged="changePage" :loading="mediaNewsLoading"></info-part>

    <time-info-part class="recent-hot-spots" title="近期热点" :title-config="{ bold: true }" :no-more="true" :time-info-list="hotSpotsInfo">
      <i class="iconfont icon-xiaoshouqushi" slot="icon"></i>
    </time-info-part>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import TimeInfoPart from '@/base/time-info-part/time-info-part'
import MediaInfo from './media-mock-info'
import { getMediaNewsByPage } from '@/api'
import { scroller } from 'vue-scrollto/src/scrollTo'

// const PERPAGE_NUMBER = 25 // 每页显示的内容个数
// const DISPLAY_PAGE_NUMBER = 9 // 最长显示页码的个数

export default {
  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      mediaList: [],
      hotSpotsInfo: [],
      mediaNewsLoading: false
    }
  },
  mounted() {
    this._getHotSpotsInfo()
    this._getMediaNewsList()
  },
  methods: {
    _getHotSpotsInfo() {
      this.hotSpotsInfo = MediaInfo
    },
    async _getMediaNewsList() {
      this.mediaNewsLoading = true
      this.mediaList = await getMediaNewsByPage(this.currPage)
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
    TimeInfoPart
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
