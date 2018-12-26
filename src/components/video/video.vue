<template>
  <div class="video-content">
    <div class="video-list-wrapper" id="video-list-wrapper">
      <div class="video-list" v-loading="videoLoading" element-loading-background="rgba(247, 248, 248, 0.9)">
        <video-item v-for="(item, index) in videoInfoList" :key="item.title" :video-info="item"
                    :width="index ? 300 : 650" :title-size="index ? 14 : 24" :divider="!index"></video-item>
        <div class="video-list-none" v-if="!videoInfoList || videoInfoList.length === 0">暂无数据</div>
      </div>

      <el-pagination
        class="page-control"
        @current-change="changePage"
        :current-page.sync="currentPage"
        :page-size="limit"
        layout="prev, pager, next, jumper"
        background
        :total="total">
      </el-pagination>
    </div>
    <hot-spots/>
  </div>
</template>

<script>
import VideoItem from './video-item'
import HotSpots from '@/base/hot-spots/hot-spots'
import {getVideoByPage, handleError} from '@/api'
import {scroller} from 'vue-scrollto/src/scrollTo'
import {get} from 'lodash'

export default {
  mounted() {
    this.$nextTick(() => {
      this._getVideoList()
      setTimeout(() => {
        this.currentPage = this.currPage
      }, 0)
    })
  },
  data() {
    console.log(this.$route.params.page)
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      currentPage: null,
      videoInfoList: [],
      videoLoading: false,
      total: 0,
      limit: 10
    }
  },
  methods: {
    changePage(page) {
      this.$router.push(`/video/${page}`)
      this.currPage = page
    },
    async _getVideoList() {
      this.videoLoading = true
      let data = (await getVideoByPage(this.currPage, this.limit)).data
      if (data.code === 0) {
        this.total = +get(data, 'data.count', 0)
        this.videoInfoList = data.data.list ? data.data.list.map(item => {
          return {
            title: item.title,
            picUrl: item.pic,
            linkUrl: `/video/view/${item.news_id}`,
            date: item.mtime
          }
          // picUrl: 'http://www.xtu.edu.cn/d/file/xdxw/xnxw/2018-06-26/7bc630f2961187246ec56be26d4b0669.jpg',
          //     title: '「第 ' + page + ' 页」58级校友捐赠书法作品献礼60周年校庆' + i,
          //     linkUrl: 'http://news.xtu.edu.cn/html/zonghexw/show_10883.html',
          //     date: 1531652795909
        }) : null
      } else {
        handleError(data)
      }
      this.videoLoading = false
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.currPage = to.params.page || 1
    next()
    await this._getVideoList()
    scroller()('#video-list-wrapper')
  },
  components: {
    VideoItem,
    HotSpots
  }
}
</script>

<style lang="scss" scoped>
.video-content {
  @include limit-width();
  padding: 35px 0;
  display: flex;
  align-items: flex-start;

  .video-list-wrapper {
    padding-top: 20px;
    width: 650px;
    display: flex;
    flex-wrap: wrap;

    .video-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      min-height: 150px;

      .video-list-none {
        width: 100%;
        line-height: 150px;
        text-align: center;
        color: #666;
      }
    }

    .page-control {
      margin: 15px auto 10px;
    }
  }
}
</style>
