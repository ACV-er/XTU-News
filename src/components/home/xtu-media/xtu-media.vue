<template>
  <div class="xtu-media">
    <slider :info-data="sliderList"></slider>
    <time-info-part title="媒体湘大" :timeInfoList="mediaList"/>
  </div>
</template>

<script>
import Slider from '@/components/slider/slider'
import TimeInfoPart from '@/base/time-info-part/time-info-part'

export default {
  props: {
    infoData: {
      default: null
    }
  },
  computed: {
    sliderList() {
      return this.infoData ? this.infoData.sliderList : null
    },
    mediaList() {
      return this.infoData ? this.infoData.mediaList : null
    }
  },
  components: {
    Slider,
    TimeInfoPart
  }
}
</script>

<style lang="scss" scoped>
.xtu-media {
  width: $content-width;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
</style>
