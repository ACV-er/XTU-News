<template>
  <div class="info-part">
    <p class="part-title" ref="partTitle">
      <span>{{ title }}</span>
      <a v-if="!noMore" :href="moreUrl" title="查看更多" class="part-more">
        <i class="iconfont icon-icongengduo"></i>
      </a>
    </p>
    <figure v-if="hasFigure && figureInfo" class="figure-news">
      <router-link :to="`news/view/${figureInfo.news_id}`">
        <img :title="figureInfo.title" :src="figureInfo.pic" :alt="figureInfo.title">
      </router-link>
      <div class="figure-info">
        <router-link :to="`news/view/${figureInfo.news_id}`" :title="figureInfo.title">
          {{ figureInfo.title }}
        </router-link>
        <p :title="figureInfo.description" class="figure-desc">{{ figureInfo.description }}</p>
      </div>
    </figure>
    <div class="info-list-wrapper" v-loading="loading" element-loading-background="rgba(247, 248, 248, 0.9)">
      <div class="no-data-tip" v-if="listData === null || listData.length === 0">暂无数据</div>
      <ul v-if="listData && listData.length > 0" class="info-list" :class="{ 'no-list-style': !needListDots }">
        <li class="list-item" v-for="item in listData" :key="item.news_id || item.id">
          <div class="item-wrapper">
            <a v-if="item.linkUrl" :href="item.linkUrl" :title="item.title">{{ item.title }}</a>
            <router-link v-else :to="`news/view/${item.news_id}`" :title="item.title">{{ item.title }}</router-link>
            <span v-if="item.mtime">{{ item.mtime.split(' ')[0].split('-').slice(1, 3).join('-') }}</span>
          </div>
        </li>
      </ul>
      <slot name="custom"></slot>
    </div>
    <el-pagination
      v-if="pageControl"
      class="page-control"
      @current-change="changePage"
      :current-page.sync="currentPage"
      :page-size="limit"
      layout="prev, pager, next, jumper"
      background
      :total="total">
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
      default: null
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
    loading: {
      type: Boolean,
      default: false
    },
    pageControl: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: this.currPage || 1
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
    },
    changePage(val) {
      this.$emit('pageChanged', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.info-part {
  .part-title {
    line-height: 67px;
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

    a {
      text-decoration: none;
      color: #333;
    }

    img {
      display: inline-block;
      width: 190px;
      height: 115px;
      background-color: #444444;
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

  .info-list-wrapper {
    min-height: 150px;

    .no-data-tip {
      width: 100%;
      line-height: 150px;
      text-align: center;
      color: #666;
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
  }

  .page-control {
    margin-top: 25px;
    text-align: center;
  }
}
</style>
