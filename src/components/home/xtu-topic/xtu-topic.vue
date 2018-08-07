<template>
  <div class="xtu-topic">
    <div class="topic-container">
      <div class="video-wrapper">
        <div class="video-tab-group">
          <button @click="changeTab(0)" class="video-tab-item" :class="{ 'selected' : currIndex === 0 }">视频新闻</button>
          <div class="separator"></div>
          <button @click="changeTab(1)" class="video-tab-item" :class="{ 'selected' : currIndex === 1 }">视频专题</button>
        </div>
        <transition name="video-fade" mode="out-in">
          <keep-alive>
            <video-slider v-if="currIndex === 0" :video-info="videoInfo" :slider-width="600" :key="0">
            </video-slider>
            <video-slider v-if="currIndex === 1" :video-info="videoInfo" :slider-width="600" :key="1">
            </video-slider>
          </keep-alive>
        </transition>
      </div>

      <info-part class="lastest-topic"
                 title="最新专题"
                 border-color="transparent"
                 more-url="https://baidu.com/"
                 title-color="#fff">
        <div slot="custom" class="topic-list">
          <a class="topic-item" :href="item.linkUrl" v-for="item in topicInfo" :key="item.title" :title="item.title">
            <img :src="item.picUrl" :alt="item.title">
          </a>
        </div>
      </info-part>
    </div>
  </div>
</template>

<script>
import InfoPart from '@/base/info-part/info-part'
import VideoSlider from '@/base/video-slider/video-slider'
import info from '@/components/slider/slider-mock-info'

export default {
  data() {
    return {
      currIndex: 0,
      videoInfo: [],
      topicInfo: [
        {
          title: '1联建区615平方米违章建筑被拆除',
          picUrl:
            'http://news.tsinghua.edu.cn/publish/thunews/9658/20180403100529570810295/20180403100618578294003.jpg',
          linkUrl:
            'http://news.tsinghua.edu.cn/publish/thunews/9648/2018/20180403100529570810295/20180403100529570810295_.html'
        },
        {
          title: '2联建区615平方米违章建筑被拆除',
          picUrl:
            'http://news.tsinghua.edu.cn/publish/thunews/9658/20180403100529570810295/20180403100618578294003.jpg',
          linkUrl:
            'http://news.tsinghua.edu.cn/publish/thunews/9648/2018/20180403100529570810295/20180403100529570810295_.html'
        },
        {
          title: '3联建区615平方米违章建筑被拆除',
          picUrl:
            'http://news.tsinghua.edu.cn/publish/thunews/9658/20180403100529570810295/20180403100618578294003.jpg',
          linkUrl:
            'http://news.tsinghua.edu.cn/publish/thunews/9648/2018/20180403100529570810295/20180403100529570810295_.html'
        }
      ]
    }
  },
  created() {
    this._getVideoInfo()
  },
  methods: {
    changeTab(index) {
      this.currIndex = index
    },
    _getVideoInfo() {
      this.videoInfo = info
    }
  },
  components: {
    InfoPart,
    VideoSlider
  }
}
</script>

<style lang="scss" scoped>
.xtu-topic {
  min-width: $content-width;
  background: $color-red-d;

  .topic-container {
    @include limit-width();
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    flex-wrap: wrap;

    .video-wrapper {
      display: flex;
      flex-flow: column wrap;
      flex: 0 1 600px;

      .video-tab-group {
        height: 65px;
        display: flex;

        .separator {
          width: 3px;
          height: 20px;
          background: $color-yellow;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }

        .video-tab-item {
          width: 50%;
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
          font-size: $font-size-title-large;
          color: #fff;
          cursor: pointer;
          transition: all 0.25s;

          &.selected {
            color: $color-yellow;
          }

          &:focus {
            outline: none;
          }
        }
      }

      .video-fade-enter-active,
      .video-fade-leave-active {
        transition: opacity 0.3s;
      }
      .video-fade-enter,
      .video-fade-leave-active {
        opacity: 0;
      }
    }

    .lastest-topic {
      width: 310px;

      .topic-list {
        .topic-item {
          margin: 0 auto;
          display: block;
          width: 300px;
          height: 100px;
          margin-bottom: 40px;

          &:last-child {
            margin-bottom: 0;
          }

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
