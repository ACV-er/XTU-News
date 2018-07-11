<template>
  <div class="home-content">
    <xtu-media/>
    <xtu-news/>
    <xtu-communication/>
    <xtu-topic/>
    <xtu-others/>
  </div>
</template>

<script>
import XtuMedia from '@/components/home/xtu-media/xtu-media'
import XtuNews from '@/components/home/xtu-news/xtu-news'
import XtuCommunication from '@/components/home/xtu-communication/xtu-communication'
import XtuTopic from '@/components/home/xtu-topic/xtu-topic'
import XtuOthers from '@/components/home/xtu-others/xtu-others'

export default {
  components: {
    XtuMedia,
    XtuNews,
    XtuCommunication,
    XtuTopic,
    XtuOthers
  }
}
</script>

<style scoped>
.home-content {
  margin: 0 auto;
}
</style>
