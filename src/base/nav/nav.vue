<template>
  <div class="nav">
    <ul class="nav-list" ref="navList">
      <li class="nav-item" v-for="(item, index) in navList" :key="item.title" @mouseover="moveTipLine(index)" @mouseout="initTipLinePos" @click="changePage(index)">
        <!-- <a :href="item.url" :title="item.title">{{ item.title }}</a> -->
        <router-link :to="item.url" :title="item.title">{{ item.title }}</router-link>
      </li>
    </ul>
    <div class="tip-line" ref="tipLine"></div>
  </div>
</template>

<script>
import { navList } from '@/common/lib/config'

const navListIndex = ['home', 'introduction', 'news', 'media', 'fax', '', '', '', 'culture']

export default {
  data() {
    return {
      navList: navList,
      currIndex: 0
    }
  },
  mounted() {
    this.$refs.tipLine.style.width =
      this.$refs.navList.clientWidth / navList.length + 'px'
    this.$nextTick(() => {
      this.initTipLinePos()

      // 设置 index
      let currPath = this.$route.path.split('/')[1]
      this.currIndex = navListIndex.indexOf(currPath)
    })
  },
  methods: {
    initTipLinePos() {
      this.$refs.tipLine.style.left =
        this.currIndex * this.$refs.navList.clientWidth / navList.length + 'px'
    },
    moveTipLine(index) {
      this.$refs.tipLine.style.left =
        index * parseInt(this.$refs.tipLine.style.width) + 'px'
    },
    changePage(index) {
      this.currIndex = index
    }
  },
  watch: {
    currIndex(newValue) {
      this.initTipLinePos()
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  height: 60px;
  width: $content-width;

  .nav-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-basis: 100%;
    display: flex;

    .nav-item {
      float: left;
      flex: 1;

      a {
        display: flex;
        align-items: center;
        display: block;
        line-height: 54px;
        width: 100%;
        color: #fff;
        text-align: center;
        text-decoration: none;
      }
    }
  }

  .tip-line {
    height: 6px;
    width: 100px;
    background: #e79e52;
    position: relative;
    transition: all 0.3s;
    left: 0;
  }
}
</style>
