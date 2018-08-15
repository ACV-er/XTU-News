<template>
  <div class="slider-container" v-if="infoData">
    <div class="slider" ref="slider">
      <div class="slider-group" ref="sliderGroup">
        <div class="slider-item" v-for="item in infoData" :key="item.origin_news_id || item.news_id">
          <router-link :to="`news/view/${item.origin_news_id || item.news_id}`">
            <img :src="item.pic">
          </router-link>

          <div class="slider-content">
            <router-link :to="`news/view/${item.origin_news_id || item.news_id}`" :title="item.title" class="slider-title">{{ item.title }}</router-link>
            <p :title="item.description" class="slider-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <ul class="date-list" @click.stop>
      <li class="date-item" v-for="(item, index) in infoData" :key="item.origin_news_id || item.news_id" :class="{ 'active': currIndex === index }" @click="moveToPage(index)">
        <p class="date-day">{{ item.mtime.split(' ')[0].split('-')[2] }}</p>
        <span class="date-time">{{ item.mtime.split(' ')[0].split('-').slice(0, 2).join('.') }}</span>
      </li>

      <div class="op-btn">
        <div @click="moveToPrev" class="prev-btn">
          <i class="iconfont icon-arrow-left"></i>
        </div>
        <div @click="moveToNext($event)" class="next-btn">
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import info from './slider-mock-info'

const SLIDER_WIDTH = 650

export default {
  props: {
    infoData: {
      default: null
    }
  },
  created() {
    // this._getInfo()
    this.interval = 4000
  },
  watch: {
    infoData(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this._initSlider()
          this._play()
        })
      }
    }
  },
  // mounted() {
  // },
  data() {
    return {
      sliderInfo: null,
      currIndex: 0
    }
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
    moveToPage(index) {
      this.currIndex = index
      this.slider.goToPage(index, 0)
    },
    moveToNext(e) {
      console.log(e)
      e.stopImmediatePropagation()
      if (this.slider.isInTransition || this.slider.isAnimating) return
      this.slider.next()
    },
    moveToPrev() {
      if (this.slider.isInTransition || this.slider.isAnimating) return
      this.slider.prev()
    },
    // _getInfo() {
    //   this.sliderInfo = info
    // },
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

      this.slider.on('scrollEnd', () => {
        this.currIndex = this.slider.getCurrentPage().pageX
        clearTimeout(this.timer)
        this._play()
      })

      this.slider.on('beforeScrollStart', () => {
        clearTimeout(this.timer)
      })

      this.$refs.sliderGroup.style.width =
        (this.infoData.length + 2) * SLIDER_WIDTH + 'px'
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
.slider-container {
  position: relative;

  .slider {
    position: relative;
    width: 100%;
    overflow: hidden;
    width: 650px;

    .slider-group {
      position: relative;
      overflow: hidden;
      white-space: nowrap;

      .slider-item {
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        width: 650px;
        height: 570px;

        a {
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;

          &:focus {
            outline: none;
          }
        }

        img {
          display: block;
          width: 100%;
          user-select: none;
          height: 400px;
          background-color: #444444;
        }

        .slider-content {
          height: 170px;
          padding: 20px;
          box-sizing: border-box;
          user-select: none;

          .slider-title {
            color: $color-red;
            font-size: $font-size-title-large;
            font-weight: bold;
            text-align: left;
            @include no-wrap(1);
          }

          .slider-desc {
            @include no-wrap(4);
            font-size: $font-size-desc;
            color: $text-color;
            text-align: left;
            line-height: 1.8em;
          }
        }
      }
    }
  }

  .date-list {
    position: absolute;
    top: 330px;
    height: 70px;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    z-index: 99;

    @for $i from 1 through 7 {
      .date-item:nth-child(#{$i}) {
        background: rgba(251, 197, 102, 1 - $i * 0.15);
      }
    }
    .date-item {
      width: 70px;
      height: 70px;
      float: left;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 2px;
      color: #fff;
      transition: all 0.2s;
      user-select: none;

      &:hover {
        opacity: 0.7;
      }

      &.active {
        color: $color-red;
        background: #fff;
      }

      .date-day {
        margin: 0;
        font-size: 30px;
        text-align: center;
      }

      .date-time {
        margin-top: -1.5em;
        font-size: 12px;
      }
    }

    .op-btn {
      height: 100%;
      width: 35px;
      position: absolute;
      right: 0;

      .prev-btn,
      .next-btn {
        height: 50%;
        width: 100%;
        background: rgba($color: #bd282d, $alpha: 0.7);
        transition: all 0.25s;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        i {
          font-size: 20px;
          color: #fff;
        }

        &:hover {
          background: #bd282d;
        }
      }
    }
  }
}
</style>
