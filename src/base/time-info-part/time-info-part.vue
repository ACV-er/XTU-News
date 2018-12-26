<template>
  <div class="time-info-part">
    <p class="time-info-title" ref="timeInfoTitle">
      <span>
        <span class="title-icon">
          <slot name="icon"></slot>
        </span>
        {{ title }}
      </span>
      <a v-if="!noMore" :href="moreUrl" title="查看更多" class="time-info-more">
        <i class="iconfont icon-icongengduo"></i>
      </a>
    </p>
    <div class="time-info-list-wrapper" v-loading="loading" element-loading-background="rgba(247, 248, 248, 0.9)">
      <ul v-if="timeInfoList" class="time-info-list">
        <li class="time-info-item" v-for="item in timeInfoList" :key="item.news_id">
          <p class="item-date">
            <i class="iconfont icon-riliriqi"></i>{{ item.mtime }}<i class="iconfont icon-tubiao_liulan"></i>{{ item.view_count }}
          </p>
          <router-link :title="item.title" :to="`/${item.type}/view/${item.news_id}`">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    titleConfig: {
      type: Object,
      default: function() {
        return {
          bold: false,
          color: '#333'
        }
      }
    },
    noMore: {
      type: Boolean,
      default: false
    },
    moreUrl: {
      type: String,
      default: '#'
    },
    timeInfoList: {
      type: Array,
      default: function() {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$refs.timeInfoTitle.style['font-weight'] = this.titleConfig.bold
      ? 'bold'
      : 'normal'
  }
}
</script>

<style lang="scss" scoped>
.time-info-part {
  flex: 0.8;

  .time-info-title {
    line-height: 60px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-size: $font-size-title-large;
    color: $text-color;

    .title-icon {
      color: $color-red;
      vertical-align: middle;

      i {
        font-size: 30px;
        font-weight: normal;
      }
    }

    .time-info-more {
      line-height: 60px;
      padding: 0 10px;
      cursor: pointer;
      text-decoration: none;
      color: $text-color;

      i {
        font-size: 15px;
      }
    }
  }

  .time-info-list-wrapper {
    min-height: 150px;

    .time-info-list {
      padding: 0;
      list-style: none;

      .time-info-item {
        border-bottom: 1px solid #777;
        padding-bottom: 15px;

        &:last-child {
          border: none;
        }

        .item-date {
          font-size: $font-size-desc;
          color: $text-color-l;

          i {
            margin-right: 5px;
            font-size: 16px;
            color: #fbc566;

            &.icon-tubiao_liulan {
              margin-left: 20px;
            }
          }
        }

        a {
          color: $text-color-l;
          text-decoration: none;
          height: 3em;
          line-height: 1.5em;
          font-size: $font-size-medium;
          transition: all 0.25s;
          @include no-wrap(2);

          &:hover {
            color: $color-red;
          }
        }
      }
    }
  }
}
</style>
