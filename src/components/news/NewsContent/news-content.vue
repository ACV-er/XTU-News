<template>
  <news-content :news-id="newsId" :secondLevel="{ url: '/news', title: '综合要闻'}" />
</template>

<script>
import NewsContent from '@/base/content/content'

export default {
  data() {
    return {
      newsId: this.$route.params.newsId
    }
  },
  components: {
    NewsContent
  }
}
</script>
