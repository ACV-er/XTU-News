<template>
  <fax-content :news-id="newsId" :secondLevel="{ url: '/fax', title: '院系传真'}" />
</template>

<script>
import FaxContent from '@/base/content/content'

export default {
  data() {
    return {
      newsId: +this.$route.params.newsId
    }
  },
  components: {
    FaxContent
  }
}
</script>
