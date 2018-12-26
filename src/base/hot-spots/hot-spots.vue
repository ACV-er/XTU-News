<template>
  <time-info-part class="recent-hot-spots" title="近期热点" :title-config="{ bold: true }" :no-more="true"
                  :time-info-list="hotSpotsInfo" :loading="loading">
    <i class="iconfont icon-xiaoshouqushi" slot="icon"></i>
  </time-info-part>
</template>

<script>
import TimeInfoPart from '@/base/time-info-part/time-info-part'
import { getHotSpots, handleError } from '@/api'

export default {
  data() {
    return {
      hotSpotsInfo: null,
      loading: false
    }
  },
  mounted() {
    this._getHotSpots()
  },
  methods: {
    async _getHotSpots() {
      this.loading = true
      const data = (await getHotSpots()).data
      if (data.code === 0) {
        this.hotSpotsInfo = data.data.list
        // {
        //   date: '2018.02.06',
        //     title: '【湖南教育电视台】湘大信用法治平台建设协作会长沙举行',
        //   view: 5555,
        //   linkUrl: '#'
        // }
      } else {
        handleError(data)
      }
      this.loading = false
    }
  },
  components: {
    TimeInfoPart
  }
}
</script>

<style lang="scss" scoped>
.recent-hot-spots {
  flex: 1 !important;
  padding: 0 35px;
  min-height: 200px;
}
</style>
