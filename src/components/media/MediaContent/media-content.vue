<template>
  <media-content :news-id="newsId" :secondLevel="{ url: '/media', title: '媒体湘大'}" />
</template>

<script>
import MediaContent from '@/base/content/content'

export default {
  data() {
    return {
      newsId: +this.$route.params.newsId
    }
  },
  components: {
    MediaContent
  }
}
</script>
