<template>
  <ul class="side-nav">
    <li class="side-nav-item title">{{ title }}</li>
    <li class="side-nav-item" v-for="item in menuList" :key="item.title">
      <router-link :to="item.link">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    menuList: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.side-nav {
  padding: 0;
  list-style-type: none;
  width: 210px;
  margin: 0;
  background: #f4f4f4;

  .side-nav-item {
    text-align: center;
    font-size: $font-size-title;
    line-height: 3em;
    position: relative;

    &:not(:last-child)::after {
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      margin: 0 auto;
      background: #fff;
    }

    a {
      display: block;
      width: 100%;
      text-decoration: none;
      color: $text-color;
      transition: all .3s;

      &.router-link-active {
        color: $color-red;
      }

      &:hover {
        color: #fff;
        background: $color-red;
      }
    }

    &.title {
      font-size: $font-size-title-large;
      background: $color-red;
      color: #fff;
    }
  }
}
</style>
