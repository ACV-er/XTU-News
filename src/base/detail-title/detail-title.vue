<template>
  <div class="detail-title">
    <span>{{ title }}</span>
    <div class="align-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-title {
  width: 100%;
  font-size: $font-size-title-large;
  line-height: 2.5em;
  color: $color-red;
  border-bottom: 2px solid $color-yellow;

  .align-right {
    float: right;
  }
}
</style>
