<template>
  <div class="home-content" v-loading.lock.fullscreen.body="loading">
    <xtu-media :info-data="mediaInfo"/>
    <xtu-news :info-data="newsInfo"/>
    <xtu-communication :info-data="communicationInfo"/>
    <xtu-topic/>
    <xtu-others :info-data="markInfo"/>
  </div>
</template>

<script>
import XtuMedia from '@/components/home/xtu-media/xtu-media'
import XtuNews from '@/components/home/xtu-news/xtu-news'
import XtuCommunication from '@/components/home/xtu-communication/xtu-communication'
import XtuTopic from '@/components/home/xtu-topic/xtu-topic'
import XtuOthers from '@/components/home/xtu-others/xtu-others'
import { getHomeInfo, handleError } from '@/api'

export default {
  data() {
    return {
      loading: true,
      info: null
    }
  },
  computed: {
    mediaInfo() {
      if (this.info) {
        return {
          sliderList: this.info.list.shouyejiaodiantu,
          mediaList: this.info.list.meitixiangda
        }
      } else {
        return null
      }
    },
    newsInfo() {
      if (this.info) {
        return {
          newsList: this.info.list.zonghexinwen,
          hotSpotsList: this.info.list.jinqiredian
        }
      } else {
        return null
      }
    },
    communicationInfo() {
      if (this.info) {
        return {
          faxList: this.info.list.yuanxichuanzhen,
          paperList: this.info.list.xiangdaxiaobao
        }
      } else {
        return null
      }
    },
    markInfo() {
      if (this.info) {
        return {
          markList: this.info.list.xiangdayinji
        }
      } else {
        return null
      }
    }
  },
  mounted() {
    this._getHomeInfo()
  },
  methods: {
    async _getHomeInfo() {
      this.loading = true
      let data = (await getHomeInfo()).data
      if (data.code === 0) {
        this.info = data.data
      } else {
        handleError(data)
      }
      this.loading = false
    }
  },
  components: {
    XtuMedia,
    XtuNews,
    XtuCommunication,
    XtuTopic,
    XtuOthers
  }
}
</script>

<style scoped>
.home-content {
  margin: 0 auto;
}
</style>
