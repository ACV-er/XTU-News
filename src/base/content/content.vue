<template>
  <div class="news-view">
    <div class="news-view-content">
      <div class="news-view-content-left">
        <el-breadcrumb class="news-breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: secondLevel.url }">{{ secondLevel.title }}</el-breadcrumb-item>
          <el-breadcrumb-item class="news-breadcrumb-curr-title">{{ newsData ? newsData.title : '内容' }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="news-view-mask" v-loading="loading" element-loading-background="transparent">
          <div class="news-view-wrapper" v-if="newsData">
            <div class="news-view-title">{{ newsData.title }}</div>
            <span class="news-view-date"><i class="iconfont icon-shijian"></i> {{ newsData.mtime }}</span>
            <div class="news-view-divider"></div>
            <div class="news-view-detail" v-html="newsData.content">
              <!--<img src="http://news.xtu.edu.cn/document/photo/pwqrr60xek.jpg" alt="">-->
              <!--<p>在3月18日结束的第二十届CUBA中国大学生篮球联赛西南赛区的比赛中，我校女篮发扬不畏强手、顽强拼搏、自强自信、敢于争先的精神，勇夺第四，顺利获得进军全国总决赛的入场券。</p>-->
              <!--<p>西南赛区比赛由中国大学生体育协会主办，华中科技大学承办，共有来自中南大学、华中科技大学、四川师范大学、澳门大学、广西大学、贵州大学等20所高校的男、女篮代表队参加比赛。我校女篮由陈旸教授担任领队，赵伟丽老师担任教练，12名来自各院系的学生参赛。</p>-->
              <!--<p>在为期8天的比赛中，我校女篮先后战胜同组的武汉科技大学、重庆师范大学、广西师范大学、贵州大学，不敌中南大学，以四胜一负的战绩位列小组第二出线。在淘汰赛阶段第一场与广西大学的比赛中，我队在前三节遭遇犯规危机始终没有拉开与对手的比分差距的情况下，关键的第四节，凭借体能的优势和战术的多变，最终战胜对手赢得关键之战，挺进四强，顺利拿到进军全国总决赛的入场券，这也是我校女篮第二次打进全国总决赛。</p>-->
              <!--<p>为备战此次比赛，我校女篮队员们春节前后进行了为期两个月的集训。集训期间，队员们不怕苦不怕累，每天坚持高强度的训练，全队上下坚定信念，克服一切困难，为竞赛场上优异成绩的获得打下了坚实的基础。在比赛中，队员们在领先的时候不骄不躁、稳扎稳打；在落后的时候不弃不馁、沉着冷静，场上队员善听指挥、拼抢积极、作风硬朗，团队配合默契，充分展示了我校师生团结一心，敢于挑战的良好精神风貌。</p>-->
              <!--<p>本届比赛分西南赛区、东南赛区、西北赛区、东北赛区4个赛区举行，各赛区的前6名晋级全国总决赛。总决赛将于5月10日至17日在西安举行。</p>-->
              <!--<p class="text-right">（王卓/文  张文斌/图）</p>-->
              <!--<p class="text-right">（来源：体教部）</p>-->
            </div>
          </div>
        </div>
      </div>
      <div class="news-view-content-right" v-pin>
        <HotSpots/>
      </div>
    </div>
  </div>
</template>

<script>
import HotSpots from '@/base/hot-spots/hot-spots'
import {getNewsByNewsId, handleError} from '@/api'

export default {
  props: {
    newsId: {
      type: Number,
      default: null
    },
    secondLevel: {
      type: Object,
      default: function() {
        return {
          url: '/news',
          title: '综合要闻'
        }
      }
    }
  },
  data() {
    return {
      loading: false,
      newsData: null
    }
  },
  mounted() {
    if (this.newsId !== null) {
      this._getNewsByNewsId(this.newsId)
    }
  },
  methods: {
    async _getNewsByNewsId(id) {
      this.loading = true
      let data = (await getNewsByNewsId(id)).data
      if (data.code === 0) {
        this.newsData = data.data
      } else {
        handleError(data)
      }
      this.loading = false
    }
  },
  components: {
    HotSpots
  }
}
</script>

<style lang="scss">
.news-view {
  @include limit-width();
  min-height: 610px;

  .news-view-content {
    display: flex;
    .news-view-content-left {
      width: 650px;
      flex-shrink: 0;

      .news-breadcrumb {
        margin-top: 20px;
        line-height: 50px;

        .news-breadcrumb-curr-title {
          @include no-wrap(1);
          width: 30em;
        }
      }

      .news-view-mask {
        min-height: 200px;
        .news-view-wrapper {
          margin-bottom: 20px;

          .news-view-title {
            font-size: 26px;
            line-height: 1.8em;
            color: $color-red;
            font-weight: bold;
          }

          .news-view-date {
            line-height: 3em;
            color: #333;
            font-size: 14px;
            .iconfont {
              font-size: 18px;
              color: $color-yellow;
              font-weight: bold;
            }
          }

          .news-view-divider {
            height: 2px;
            width: 100%;
            background-color: #cfcfcf;
            margin: 5px 0;
          }

          .news-view-detail {
            padding: 15px;

            img {
              max-width: 100% !important;
              height: auto !important;
            }
            /*embed {*/
              /*width: 100%;*/
            /*}*/
            p {
              /*text-indent: 2em;*/
              /*line-height: 1.5em;*/

              &.text-right {
                text-align: right;
              }
            }
          }
        }
      }
    }

    .news-view-content-right {
      padding-top: 35px;
    }
    .pin-wrapper,
    .news-view-content-right {
      flex: 1;
    }
  }
}
</style>
