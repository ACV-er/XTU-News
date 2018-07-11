<template>
  <div class="xtu-other">
    <div class="other-container">
      <info-part class="important-other" title="湘大印迹" border-color="#fbc566" more-url="https://baidu.com/" :hasFigure="true" :needListDots="true" :figure-info="figureInfo" :listData="listData"></info-part>

      <div class="other-right">
        <info-part class="correspondent" title="通讯员" :needListDots="true" :noMore="true" :listData="correspondentLink"></info-part>
        <info-part class="friendship-link" title="友情链接" :needListDots="true" :noMore="true" :listData="friendshipLink"></info-part>
      </div>
    </div>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import { correspondentLink, friendshipLink } from '@/common/lib/config'

export default {
  data() {
    return {
      figureInfo: {
        title: '联建区615平方米违章建筑被拆除',
        desc:
          '2月8日，区政府联合我校党政办、宣传部、学生工作部（处）、保卫部（处）、后勤保障处、基建处、校地共建中心等部门，组织公安、城管执法局、消防部',
        picUrl:
          'http://news.tsinghua.edu.cn/publish/thunews/9658/20180403100529570810295/20180403100618578294003.jpg',
        linkUrl:
          'http://news.tsinghua.edu.cn/publish/thunews/9648/2018/20180403100529570810295/20180403100529570810295_.html'
      },
      listData: [
        {
          title:
            '1联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除',
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
          title: '6联建区615平方米违章建筑被拆除联建区615平方米违章建筑被拆除',
          linkUrl: 'https://baidu.com/',
          markText: '02-10'
        }
      ],
      correspondentLink,
      friendshipLink
    }
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
