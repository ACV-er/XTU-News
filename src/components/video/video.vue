<template>
  <div class="video-content">
    <div class="video-list-wrapper" id="video-list-wrapper">
      <div class="video-list" v-loading="videoLoading">
        <video-item v-for="(item, index) in videoInfoList" :key="item.title" :video-info="item" :width="index ? 300 : 650" :title-size="index ? 14 : 24" :divider="!index"></video-item>
      </div>

      <el-pagination
        class="page-control"
        @current-change="changePage"
        :current-page.sync="currPage"
        :page-size="100"
        layout="prev, pager, next, jumper"
        background
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import VideoItem from './video-item'
import { getVideoByPage } from '@/api'
import { scroller } from 'vue-scrollto/src/scrollTo'

export default {
  components: {
    VideoItem
  },
  mounted() {
    this._getVideoList()
  },
  data() {
    return {
      currPage: parseInt(this.$route.params.page) || 1,
      videoInfoList: [],
      videoLoading: false
    }
  },
  methods: {
    changePage(page) {
      this.$router.push(`/video/${page}`)
      this.currPage = page
    },
    async _getVideoList() {
      this.videoLoading = true
      this.videoInfoList = await getVideoByPage(this.currPage)
      this.videoLoading = false
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.currPage = to.params.page || 1
    next()
    await this._getVideoList()
    scroller()('#video-list-wrapper')
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
    }

    .page-control {
      margin: 15px auto 10px;
    }
  }
}
</style>
