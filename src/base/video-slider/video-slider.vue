<template>
  <div class="video-part" ref="videoPart">
    <!-- <slot name="tabbar"></slot> -->
    <div class="video-slider" ref="slider">
      <div class="slider-wrapper" ref="sliderWrapper">
        <a :href="item.linkUrl" :title="item.title" v-for="item in videoInfo" :key="item.title">
          <img :src="item.picUrl" :alt="item.title">
          <p>{{ item.title }}</p>
          <i class="iconfont icon-bofang"></i>
        </a>
      </div>
    </div>
    <div class="prev-btn" @click="prev">
      <i class="iconfont icon-arrow-left"></i>
    </div>
    <div class="next-btn" @click="next">
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    videoInfo: {
      type: Array,
      default: function() {
        return []
      }
    },
    sliderWidth: {
      type: Number,
      default: 0
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currIndex: 0
    }
  },
  created() {
    this.interval = 4000
  },
  mounted() {
    this.$nextTick(() => {
      this._initSlider()
      // this._play()
    })
  },
  deactivated() {
    clearTimeout(this.timer)
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  activated() {
    this._play()
  },
  methods: {
    next() {
      if (this.slider.isInTransition || this.slider.isAnimating) return
      this.slider.next()
    },
    prev() {
      if (this.slider.isInTransition || this.slider.isAnimating) return
      this.slider.prev()
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: true,
          threshold: 0.2,
          speed: 400
        },
        click: true
      })

      if (this.autoPlay) {
        this.slider.on('scrollEnd', () => {
          this.currIndex = this.slider.getCurrentPage().pageX
          clearTimeout(this.timer)
          this._play()
        })

        this.slider.on('beforeScrollStart', () => {
          clearTimeout(this.timer)
        })
      }

      this.$refs.sliderWrapper.style.width =
        (this.videoInfo.length + 2) * this.sliderWidth + 'px'

      this.$refs.videoPart.style.width = this.sliderWidth + 'px'
    },
    _play() {
      // 自动滚动
      this.timer = setTimeout(() => {
        // 跳转到指定页面
        this.slider.next(400)
      }, this.interval)
    }
  }
}
</script>

<style lang="scss" scoped>
.video-part {
  display: flex;
  position: relative;
  overflow: hidden;

  .video-slider {
    flex: 1;
    width: 100%;
    position: relative;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      height: 100%;

      a {
        display: inline-block;
        width: 600px;
        height: 100%;
        color: #fff;
        position: relative;

        img {
          width: 600px;
          height: 100%;
        }

        p {
          margin: 0;
          line-height: 3em;
          background: rgba($color: #000000, $alpha: 0.45);
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          user-select: none;
        }

        .iconfont {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 80px;
          color: #000;
          opacity: 0.7;
          transition: all 0.25s;
        }
      }
    }
  }

  .prev-btn,
  .next-btn {
    position: absolute;
    bottom: 190px;
    transform: translate(-100%, 50%);
    background: rgba($color: #000000, $alpha: 0.4);
    padding: 20px 10px;
    color: #fff;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      background: rgba($color: #000000, $alpha: 0.8);
    }

    i {
      font-size: 25px;
    }
  }

  .next-btn {
    right: 0;
    transform: translate(100%, 50%);
  }

  &:hover .next-btn,
  &:hover .prev-btn {
    transform: translate(0, 50%);
  }

  &:hover .iconfont {
    opacity: 0.4 !important;
  }
}
</style>
