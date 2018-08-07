<template>
  <div class="image-info-part">
    <p class="part-title" ref="partTitle">
      <span>{{ title }}</span>
      <a v-if="!noMore" :href="moreUrl" title="查看更多" class="part-more">
        <i class="iconfont icon-icongengduo"></i>
      </a>
    </p>
    <div class="image-info-list-wrapper" v-loading="loading" element-loading-background="rgba(247, 248, 248, 0.9)">
      <div class="no-data-tip" v-if="listData === null || listData.length === 0">暂无数据</div>
      <ul v-if="listData" class="image-info-list">
        <li class="item-content" v-for="item in listData" :key="item.id || item.title">
          <router-link class="item-title" :title="item.title" :to="item.linkUrl">{{ item.title }}</router-link>
          <div class="item-info">
            <router-link v-if="item.imageUrl" :title="item.title" :to="item.linkUrl">
              <img class="item-image" :src="item.imageUrl" :alt="item.title" :title="item.title">
            </router-link>
            <div class="item-summary">
              <p :title="item.intro">{{ item.intro }}</p>
              <p class="item-detail">
              <span>
                <i class="iconfont icon-riliriqi"></i>{{ item.date || '-' }}</span>
                <span>
                <i class="iconfont icon-tubiao_liulan"></i>{{ item.view || '-' }}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
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
    noMore: {
      type: Boolean,
      default: true
    },
    moreUrl: {
      type: String,
      default: '#'
    },
    currPage: {
      type: Number,
      default: 1
    },
    loading: {
      type: Boolean,
      default: false
    },
    listData: {
      type: Array,
      default: null
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
      this.$refs.partTitle.style['color'] = `${this.titleColor}`
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
.image-info-part {
  .part-title {
    line-height: 60px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    color: $text-color;
  }

  .image-info-list-wrapper {
    min-height: 150px;

    .no-data-tip {
      width: 100%;
      line-height: 150px;
      text-align: center;
      color: #666;
    }

    .image-info-list {
      padding: 0;
      list-style: none;
      margin: 0;

      .item-content {
        padding-right: 20px;
        border-bottom: 2px solid #cfcfcf;
        .item-title {
          display: block;
          font-size: $font-size-title-large;
          line-height: 3.5em;
          color: $text-color;
          text-decoration: none;
          transition: color 0.3s;
          font-weight: bold;

          &:hover {
            color: $color-red;
          }
        }

        .item-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;

          .item-image {
            width: 250px;
            margin-right: 30px;
          }

          .item-summary {
            flex: 1;
            align-self: stretch;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            p {
              margin: 10px 0;
              line-height: 1.4em;
              font-size: $font-size-medium;
              @include no-wrap(6);
            }

            .item-detail {
              margin: 0;
              display: flex;
              justify-content: space-between;
              font-size: $font-size-desc;

              i {
                margin-right: 5px;
                font-size: 16px;
                color: #fbc566;

                &.icon-tubiao_liulan {
                  margin-left: 20px;
                }
              }
            }
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
