<template>
  <div class="xtu-media">
    <slider></slider>
    <time-info-part title="媒体湘大" :timeInfoList="mediaInfo"/>
  </div>
</template>

<script>
import Slider from '@/components/slider/slider'
import TimeInfoPart from '@/base/time-info-part/time-info-part'
import MediaInfo from './media-mock-info'

export default {
  data() {
    return {
      mediaInfo: []
    }
  },
  mounted() {
    this._getMediaInfo()
  },
  methods: {
    _getMediaInfo() {
      this.mediaInfo = MediaInfo
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
