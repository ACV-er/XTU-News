<template>
  <div class="fax-content">
    <info-part class="fax-list" titleColor="#b03534" borderColor="#efc86c" title="院系传真" :boldTitle="true" :needListDots="true" :noMore="true" :listData="faxList"></info-part>

    <time-info-part class="recent-hot-spots" title="近期热点" :title-config="{ bold: true }" :no-more="true" :time-info-list="hotSpotsInfo">
      <i class="iconfont icon-xiaoshouqushi" slot="icon"></i>
    </time-info-part>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import TimeInfoPart from '@/base/time-info-part/time-info-part'
import FaxInfo from './fax-mock-info'

// const PERPAGE_NUMBER = 25 // 每页显示的内容个数
// const DISPLAY_PAGE_NUMBER = 9 // 最长显示页码的个数

export default {
  data() {
    return {
      faxList: [
        {
          title: '1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '2联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '3联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '4联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '5联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '6联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '7联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '8联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '9联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '10联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '11联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '12联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '13联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '14联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        },
        {
          title: '15联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        }
      ],
      hotSpotsInfo: []
    }
  },
  mounted() {
    this._getHotSpotsInfo()
  },
  methods: {
    _getHotSpotsInfo() {
      this.hotSpotsInfo = FaxInfo
    }
  },
  components: {
    InfoPart,
    TimeInfoPart
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

  .recent-hot-spots {
    flex: 1;
    padding: 0 35px;
  }
}
</style>
