<template>
  <div class="introduction-content">
    <side-nav class="side-nav" title="部门概况" :menuList="introductionMenu" v-pin/>
    <div class="introduction-detail">
      <detail-content v-for="item in introductionMenu" :key="item.title" :title="item.title" :id="item.anchor">
        <div v-if="item.moreLink" slot="titleRight" class="more-btn">
          <a :href="item.moreLink">
            <i class="iconfont icon-icongengduo"></i>
          </a>
        </div>
        <template slot="content">
          <ul v-if="item.contents.length" class="content-list">
            <li v-for="content in item.contents" :key="content.title">
              <a :href="content.link">{{ content.title }}</a>
            </li>
          </ul>
        </template>
      </detail-content>
    </div>
  </div>
</template>

<script>
import SideNav from '@/base/side-nav/side-nav'
import DetailContent from '@/base/detail-content/detail-content'
import { introductionMenu } from '@/common/lib/config'

export default {
  mounted() {
    this.$router.scrollBehavior = (to, from) => {
      console.log(to)
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    }
  },
  data() {
    return {
      introductionMenu
    }
  },
  components: {
    SideNav,
    DetailContent
  }
}
</script>

<style lang="scss" scoped>
.introduction-content {
  @include limit-width();
  padding: 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  // .side-nav {}

  .introduction-detail {
    // flex: 0.92;
    width: 72%;

    .more-btn {
      a {
        padding: 0 10px;
        color: $text-color;
        text-decoration: none;
      }
    }

    .content-list {
      margin: 0 0 2em;
      padding-left: 30px;

      li {
        a {
          font-size: $font-size-title;
          line-height: 2.5em;
          color: $text-color;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: $color-red;
          }
        }
      }
    }
  }
}
</style>
