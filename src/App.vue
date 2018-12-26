<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
    <side-btn/>
  </div>
</template>

<script>
import 'normalize.css'
import MHeader from '@/base/m-header/m-header'
import MFooter from '@/base/m-footer/m-footer'
import SideBtn from '@/base/side-btn/side-btn'

export default {
  components: {
    MHeader,
    MFooter,
    SideBtn
  }
}
</script>

<style lang="scss">
@import './common/scss/variable.scss';

* {
  font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-width: $content-width;
  background: #f7f8f8;
}

.bdshare_popup_box, .bdshare_popup_bg {
  transform: translate(-105%, 43px);
}
</style>
