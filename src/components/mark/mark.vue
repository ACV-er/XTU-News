<template>
  <div class="mark-content">
    <side-nav title="湘大印记" :menuList="markMenu" v-pin/>
    <div class="mark-detail">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideNav from '@/base/side-nav/side-nav'
import { markMenu } from '@/common/lib/config'

export default {
  data() {
    return {
      markMenu
    }
  },
  components: {
    SideNav
  }
}
</script>

<style lang="scss" scoped>
.mark-content {
  @include limit-width();
  padding: 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .mark-detail {
    width: 72%;
  }
}
</style>
