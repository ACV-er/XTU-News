<template>
  <div class="xtu-other">
    <div class="other-container">
      <info-part class="important-other"
                 title="湘大印迹"
                 border-color="#fbc566"
                 more-url="https://baidu.com/"
                 :hasFigure="true"
                 :needListDots="true"
                 :figure-info="markFigure"
                 :listData="markList"/>

      <div class="other-right">
        <info-part class="correspondent"
                   title="通讯员"
                   :needListDots="true"
                   :noMore="true"
                   :listData="correspondentLink"/>
        <info-part class="friendship-link"
                   title="友情链接"
                   :needListDots="true"
                   :noMore="true"
                   :listData="friendshipLink"/>
      </div>
    </div>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import { correspondentLink, friendshipLink } from '@/common/lib/config'

export default {
  props: {
    infoData: {
      default: null
    }
  },
  computed: {
    markFigure() {
      return this.infoData ? this.infoData.markList[0] : null
    },
    markList() {
      return this.infoData ? this.infoData.markList : null
    }
  },
  created() {
    this.correspondentLink = correspondentLink
    this.friendshipLink = friendshipLink
  },
  components: {
    InfoPart
  }
}
</script>

<style lang="scss" scoped>
.xtu-other {
  min-width: $content-width;

  .other-container {
    @include limit-width();
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 20px;

    .important-other {
      width: 600px;
      flex-shrink: 0;
    }

    .correspondent,
    .friendship-link {
      width: 310px;
      flex-shrink: 0;
    }
  }
}
</style>
