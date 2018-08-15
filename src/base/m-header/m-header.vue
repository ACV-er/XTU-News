<template>
  <div class="header">
    <div class="container">
      <router-link to="/home"><img class="xtu-logo" src="@/assets/images/xtu_logo.png" alt="湘潭大学"></router-link>
      <search-box></search-box>
      <div class="socialnet-link">
        <a href="#" class="link-item"><i class="iconfont icon-weibo"></i></a>
        <a class="link-item"><i class="iconfont icon-weixin"></i></a>
      </div>
      <a class="home-link" href="http://www.xtu.edu.cn/">湘大主页</a>
    </div>
    <m-nav></m-nav>
  </div>
</template>

<script>
import SearchBox from '@/base/search-box/search-box'
import MNav from '@/base/nav/nav'

export default {
  components: {
    SearchBox,
    MNav
  }
}
</script>

<style lang="scss" scoped>

.header {
  background: url(~@/assets/images/nav_background.jpg);
  background-size: auto 100%;
  height: 160px;
  display: flex;
  color: $text-color-l;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  min-width: $content-width;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: $content-width;

    .socialnet-link {
      display: flex;
      justify-content: space-between;
      width: 80px;

      .link-item {
        display: block;
        width: 34px;
        height: 34px;
        // background: #fff;
        // border: 2px solid #ea9f53;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        i {
          font-size: 25px;
          color: #fff;

          &.icon-weibo {
            color: #ea9f53;
          }
        }
      }
    }

    .home-link {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
