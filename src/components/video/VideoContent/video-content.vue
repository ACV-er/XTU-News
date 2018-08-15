<template>
  <video-content :news-id="newsId" :secondLevel="{ url: '/video', title: '视频新闻'}" />
</template>

<script>
import VideoContent from '@/base/content/content'

export default {
  data() {
    return {
      newsId: +this.$route.params.newsId
    }
  },
  components: {
    VideoContent
  }
}
</script>
