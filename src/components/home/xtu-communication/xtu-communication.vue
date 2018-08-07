<template>
  <div class="xtu-communication">
    <div class="communication-container">
      <info-part
        class="department-communication"
        title="院系传真"
        more-url="https://baidu.com/"
        :hasFigure="true"
        :needListDots="true"
        :figure-info="faxFigure"
        :listData="faxList"
      />
      <info-part
        class="newspaper"
        title="湘大校报"
        border-color="#fbc566"
        more-url="https://baidu.com/"
        :listData="paperList"
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
    faxFigure() {
      return this.infoData ? this.infoData.faxList[0] : null
    },
    faxList() {
      return this.infoData ? this.infoData.faxList : null
    },
    paperList() {
      return this.infoData ? this.infoData.paperList : null
    }
  },
  components: {
    InfoPart
  }
}
</script>

<style lang="scss" scoped>
.xtu-communication {
  min-width: $content-width;

  .communication-container {
    @include limit-width();
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

    .department-communication {
      width: 600px;
    }

    .newspaper {
      width: 310px;
    }
  }
}
</style>
