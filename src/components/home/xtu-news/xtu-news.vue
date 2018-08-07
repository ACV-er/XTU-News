<template>
  <div class="xtu-news">
    <div class="news-container">
      <info-part
        class="important-news"
        title="综合要闻"
        border-color="#fbc566"
        more-url="https://baidu.com/"
        :hasFigure="true"
        :needListDots="true"
        :figure-info="newsFigure"
        :listData="newsList"
      />
      <info-part
        class="hotspot"
        title="近期热点"
        more-url="https://baidu.com/"
        :listData="hotSpotList"
      />
    </div>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'

export default {
  props: {
    infoData: {
      default: null
    }
  },
  computed: {
    newsFigure() {
      return this.infoData ? this.infoData.newsList[0] : null
    },
    newsList() {
      return this.infoData ? this.infoData.newsList : null
    },
    hotSpotList() {
      return this.infoData ? this.infoData.hotSpotsList : null
    }
  },
  components: {
    InfoPart
  }
}
</script>

<style lang="scss" scoped>
.xtu-news {
  background: #f1f1f1;
  min-width: $content-width;

  .news-container {
    @include limit-width();
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

    .important-news {
      width: 600px;
    }

    .hotspot {
      width: 310px;
    }
  }
}
</style>
