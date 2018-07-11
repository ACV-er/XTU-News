<template>
  <div class="info-part">
    <p class="part-title" ref="partTitle">
      <span>{{ title }}</span>
      <a v-if="!noMore" :href="moreUrl" title="查看更多" class="part-more">
        <i class="iconfont icon-icongengduo"></i>
      </a>
    </p>
    <figure v-if="hasFigure" class="figure-news">
      <a :href="figureInfo.linkUrl">
        <img :title="figureInfo.title" :src="figureInfo.picUrl" :alt="figureInfo.title">
      </a>
      <div class="figure-info">
        <a :href="figureInfo.linkUrl" :title="figureInfo.title" class="figure-title">{{ figureInfo.title + figureInfo.title }}</a>
        <p :title="figureInfo.desc" class="figure-desc">{{ figureInfo.desc + figureInfo.desc }}</p>
      </div>
    </figure>
    <ul v-if="listData.length" class="info-list" :class="{ 'no-list-style': !needListDots }">
      <li class="list-item" v-for="item in listData" :key="item.title">
        <div class="item-wrapper">
          <a :title="item.title" :href="item.linkUrl">{{ item.title }}</a>
          <span>{{ item.markText }}</span>
        </div>
      </li>
    </ul>
    <slot name="custom"></slot>
    <el-pagination
      v-if="pageControl"
      class="page-control"
      @current-change="changePage"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="prev, pager, next, jumper"
      background
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    titleColor: {
      type: String,
      default: ''
    },
    boldTitle: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: '#bc292e'
    },
    moreUrl: {
      type: String,
      default: '#'
    },
    noMore: {
      type: Boolean,
      default: false
    },
    listData: {
      type: Array,
      default: function() {
        return []
      }
    },
    needListDots: {
      type: Boolean,
      default: false
    },
    hasFigure: {
      type: Boolean,
      default: false
    },
    figureInfo: {
      type: Object,
      default: function() {
        return {}
      }
    },
    pageControl: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this._initInfoPart()
  },
  methods: {
    _initInfoPart() {
      this.$refs.partTitle.style['border-bottom'] = `3px solid ${
        this.borderColor
      }`
      this.$refs.partTitle.style['color'] = `${
        this.titleColor
      }`
      this.$refs.partTitle.style['font-weight'] = `${
        this.boldTitle ? 'bold' : 'normal'
      }`
    }
  }
}
</script>

<style lang="scss" scoped>
.info-part {
  .part-title {
    line-height: 60px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    color: $text-color;

    .part-more {
      line-height: 59px;
      padding: 0 10px;
      text-decoration: none;
      color: inherit;

      i {
        font-size: 15px;
      }
    }
  }

  .figure-news {
    display: flex;
    align-items: center;
    padding: 15px 10px 0;
    margin: 0;

    img {
      width: 190px;
    }

    .figure-info {
      margin-left: 25px;
      overflow: hidden;

      .figure-title {
        display: block;
        margin: 12px 0;
        text-decoration: none;
        color: $color-blue;
        font-size: $font-size-title;
        font-weight: bold;
        transition: all .25s;
        @include no-wrap(1);

        &:hover {
          color: $color-red;
        }
      }

      .figure-desc {
        color: $text-color-l;
        font-size: $font-size-desc;
        @include no-wrap(3);
        line-height: 1.4em;
      }
    }
  }

  .info-list {
    margin-top: 25px;
    margin-bottom: 0;
    padding-bottom: 15px;

    &.no-list-style {
      padding-left: 15px;
      list-style: none;
    }

    .list-item {
      padding-right: 15px;
      .item-wrapper {
        display: flex;
        justify-content: space-between;

        a {
          font-size: $font-size-medium;
          color: $text-color;
          line-height: 2em;
          text-decoration: none;
          transition: all 0.25s;
          @include no-wrap(1);

          &:hover {
            color: $color-red;
          }
        }

        span {
          padding-left: 10px;
          flex-shrink: 0;
          font-size: $font-size-medium;
          color: $text-color;
          line-height: 2em;
        }
      }
    }
  }

  .page-control {
    margin-top: 25px;
    text-align: center;
  }
}
</style>
