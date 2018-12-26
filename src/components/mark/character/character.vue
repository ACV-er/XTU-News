<template>
  <div class="mark-character">
    <!--<p class="mark-content-title">湘大人物</p>-->
    <info-part
      id="mark-content"
      class="mark-list"
      titleColor="#b03534"
      borderColor="#efc86c"
      title="湘大人物"
      :boldTitle="true"
      :needListDots="true"
      :noMore="true"
      :listData="markList"
      pageControl
      :total="total"
      :limit="limit"
      :currPage="currPage"
      @pageChanged="changePage"
      :loading="markLoading"/>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import { getMarkByPage, handleError } from '@/api'
import { scroller } from 'vue-scrollto/src/scrollTo'
import { get } from 'lodash'

export default {

  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      markList: null,
      markLoading: false,
      total: 0,
      limit: 10
    }
  },
  mounted() {
    this._getMarkList()
  },
  methods: {
    async _getMarkList() {
      this.markLoading = true
      let data = (await getMarkByPage(this.currPage, this.limit)).data
      if (data.code === 0) {
        this.total = +get(data, 'data.count', 0)
        this.markList = data.data.list
      } else {
        handleError(data)
      }
      this.markLoading = false
    },
    changePage(page) {
      this.$router.push(`/mark/character/${page}`)
      this.currPage = page
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.currPage = to.params.page || 1
    next()
    await this._getMarkList()
    scroller()('#mark-content')
  },
  components: {
    InfoPart
  }
}
</script>

<style lang="scss" scoped>
.mark-character {
  .mark-content-title {
    color: $color-red;
    font-size: 26px;
  }
}
</style>
