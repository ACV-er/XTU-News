<template>
  <figure class="video-item" v-if="videoInfo" ref="videoItem">
    <router-link :to="videoInfo.linkUrl" class="video-pic">
      <img :title="videoInfo.title" :src="videoInfo.picUrl" :alt="videoInfo.title">
      <i class="play-btn iconfont icon-bofang" :style="'font-size: ' + this.width * 0.13 + 'px'"></i>
    </router-link>
    <div class="video-info">
      <router-link :to="videoInfo.linkUrl" :title="videoInfo.title" class="video-title" :style="'font-size: ' + titleSize + 'px'">
        {{ videoInfo.title }}
      </router-link>
      <p class="video-time"><i class="iconfont icon-shijian"></i>{{ videoInfo.date }}</p>
    </div>
    <div v-if="divider" class="divider"></div>
  </figure>
</template>

<script>
export default {
  props: {
    divider: {
      type: Boolean,
      default: false
    },
    videoInfo: {
      type: Object,
      default: function() {
        return null
      }
    },
    width: {
      type: Number,
      default: 300
    },
    titleSize: {
      type: Number,
      default: 14
    }
  },
  mounted() {
    if (this.videoInfo) {
      const width = this.width + 'px'
      const heigth = width * 2 / 3 + 'px'

      this.$refs.videoItem.style.width = width
      this.$refs.videoItem.style.heigth = heigth
    }
  }
}
</script>

<style lang="scss" scoped>
.video-item {
  display: inline-block;
  margin: 0 0 25px;
  .video-pic,
  .video-pic img,
  .video-info {
    width: 100%;
  }

  .video-pic {
    display: inline-block;
    border-radius: 5px;
    overflow: hidden;
    font-size: 0;
    position: relative;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 15px 2px rgba(#000, 0.15);
    }

    &:hover +.video-info .video-title {
      color: $color-red;
    }

    .play-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      color: rgba(#fff, 0.3);
      transform: translate(-50%, -50%);
      transition: all 0.3s;
    }

    &:hover .play-btn {
      color: rgba(#fff, 0.8);
    }
  }

  .video-info {
    .video-title {
      color: $text-color;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      padding: 1em 0;
      /*line-height: 3em;*/
      transition: all 0.3s;
      &:hover {
        color: $color-red;
      }
    }
    .video-time {
      font-size: 14px;
      margin: 0;
      .iconfont {
        color: $color-yellow;
        font-size: 16px;
        font-weight: bold;
        margin-right: 0.5em;
      }
    }
  }

  .divider {
    background: $color-yellow;
    height: 2px;
    width: 100%;
    margin: 25px 0 0;
  }
}
</style>
