<template>
  <div class="fax-content" id="fax-content">
    <info-part class="fax-list" titleColor="#b03534" borderColor="#efc86c" title="院系传真" :boldTitle="true" :needListDots="true" :noMore="true" :listData="faxList" pageControl :total="total" :limit="limit" @pageChanged="changePage" :loading="faxLoading"></info-part>
    <hot-spots/>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import TimeInfoPart from '@/base/time-info-part/time-info-part'
import HotSpots from '@/base/hot-spots/hot-spots'
import { getFaxByPage, handleError } from '@/api'
import { scroller } from 'vue-scrollto/src/scrollTo'

// const PERPAGE_NUMBER = 25 // 每页显示的内容个数
// const DISPLAY_PAGE_NUMBER = 9 // 最长显示页码的个数

export default {
  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      faxList: null,
      faxLoading: false,
      total: 0,
      limit: 10
    }
  },
  mounted() {
    this._getFaxList()
  },
  methods: {
    async _getFaxList() {
      this.faxLoading = true
      let data = (await getFaxByPage(this.currPage)).data
      if (data.code === 0) {
        this.total = data.data ? +data.data.count : 0
        this.faxList = data.data.list ? data.data.list.map(item => {
          return {
            title: item.title,
            linkUrl: `/fax/view/${item.news_id}`,
            markText: item.mtime.split(' ')[0].substr(5)
          }
        }) : null
      } else {
        handleError(data)
      }
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
    TimeInfoPart,
    HotSpots
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
}
</style>
