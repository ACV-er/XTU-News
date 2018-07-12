<template>
  <div class="culture-content">
    <side-nav class="side-nav" title="文化标识" :menuList="cultureMenu" v-pin/>
    <div class="culture-detail">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideNav from '@/base/side-nav/side-nav'
import { cultureMenu } from '@/common/lib/config'

export default {
  data() {
    return {
      cultureMenu
    }
  },
  beforeRouteUpdate: (to, from, next) => {
    console.log(1)
    window.scrollTo(0, 0)
    next()
  },
  components: {
    SideNav
  }
}
</script>

<style lang="scss" scoped>
.culture-content {
  @include limit-width();
  padding: 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  // .side-nav {}

  .culture-detail {
    width: 72%;
    // flex: .92;
  }
}
</style>
