<template>
  <div class="fax-content" id="fax-content">
    <info-part class="fax-list" titleColor="#b03534" borderColor="#efc86c" title="院系传真" :boldTitle="true" :needListDots="true" :noMore="true" :listData="faxList" pageControl @pageChanged="changePage" :loading="faxLoading"></info-part>

    <time-info-part class="recent-hot-spots" title="近期热点" :title-config="{ bold: true }" :no-more="true" :time-info-list="hotSpotsInfo">
      <i class="iconfont icon-xiaoshouqushi" slot="icon"></i>
    </time-info-part>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import TimeInfoPart from '@/base/time-info-part/time-info-part'
import FaxInfo from './fax-mock-info'
import { getFaxByPage } from '@/api'
import { scroller } from 'vue-scrollto/src/scrollTo'

// const PERPAGE_NUMBER = 25 // 每页显示的内容个数
// const DISPLAY_PAGE_NUMBER = 9 // 最长显示页码的个数

export default {
  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      faxList: [],
      hotSpotsInfo: [],
      faxLoading: false
    }
  },
  mounted() {
    this._getHotSpotsInfo()
    this._getFaxList()
  },
  methods: {
    _getHotSpotsInfo() {
      this.hotSpotsInfo = FaxInfo
    },
    async _getFaxList() {
      this.faxLoading = true
      this.faxList = await getFaxByPage(this.currPage)
      this.faxLoading = false
    },
    changePage(page) {
      this.$router.push(`/fax/${page}`)
      this.currPage = page
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.currPage = to.params.page || 1
    next()
    await this._getFaxList()
    scroller()('#fax-content')
  },
  components: {
    InfoPart,
    TimeInfoPart
  }
}
</script>

<style lang="scss" scoped>
.fax-content {
  @include limit-width();
  padding: 35px 0;
  display: flex;
  align-items: flex-start;

  .fax-list {
    width: 650px;
  }

  .recent-hot-spots {
    flex: 1;
    padding: 0 35px;
  }
}
</style>
