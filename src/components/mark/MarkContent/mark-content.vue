<template>
  <mark-content :news-id="newsId" :secondLevel="{ url: '/mark', title: '湘大人物'}" />
</template>

<script>
import MarkContent from '@/base/content/content'

export default {
  data() {
    return {
      newsId: +this.$route.params.newsId
    }
  },
  components: {
    MarkContent
  }
}
</script>
