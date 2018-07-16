<template>
  <time-info-part class="recent-hot-spots" title="近期热点" :title-config="{ bold: true }" :no-more="true"
                  :time-info-list="hotSpotsInfo">
    <i class="iconfont icon-xiaoshouqushi" slot="icon"></i>
  </time-info-part>
</template>

<script>
import TimeInfoPart from '@/base/time-info-part/time-info-part'

export default {
  data() {
    return {
      hotSpotsInfo: []
    }
  },
  component: {
    TimeInfoPart
  }
}
</script>

<style lang="scss" scoped>
.recent-hot-spots {
  flex: 1;
  padding: 0 35px;
}
</style>
