<template>
  <div class="image-info-part">
    <p class="part-title" ref="partTitle">
      <span>{{ title }}</span>
      <a v-if="!noMore" :href="moreUrl" title="查看更多" class="part-more">
        <i class="iconfont icon-icongengduo"></i>
      </a>
    </p>
    <ul v-if="listData" class="image-info-list" v-loading="loading" element-loading-background="rgba(247, 248, 248, 0.9)">
      <li class="item-content" v-for="item in listData" :key="item.title">
        <a class="item-title" :href="item.linkUrl" :title="item.title">{{ item.title }}</a>
        <div class="item-info">
          <a :href="item.linkUrl" :title="item.title">
            <img class="item-image" :src="item.imageUrl" :alt="item.title" :title="item.title">
          </a>
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
    <el-pagination
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

  .image-info-list {
    padding: 0;
    list-style: none;
    margin: 0;
    min-height: 150px;

    .item-content {
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
        }

        .item-summary {
          flex: 1;
          margin: 0 30px;
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

  .page-control {
    margin-top: 25px;
    text-align: center;
  }
}
</style>
