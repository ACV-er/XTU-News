<template>
  <div>
    <detail-title :title="title" >
      <template slot="right">
        <slot name="titleRight"></slot>
      </template>
    </detail-title>
    <div class="detail-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import DetailTitle from '@/base/detail-title/detail-title'

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    DetailTitle
  }
}
</script>

<style lang="scss" scoped>
.detail-content {
  padding: 20px 0;

  img {
    margin: 30px 0;

    &.full-width {
      width: 100%;
    }

    &.no-bottom-space {
      margin-bottom: 0;
    }
  }

  .detail-part {
    overflow: hidden;
    margin: 30px 0;

    &.center {
      text-align: center;
    }

    p {
      line-height: 2em;
      margin: 0;

      &.indent {
        text-indent: 2em;
      }

      &.blue {
        color: $color-blue;
      }

      &.bold {
        font-weight: bold;
      }
    }

    video {
      margin: 30px 0;

      &.no-bottom-space {
        margin-bottom: 0;
      }
    }
  }
}
</style>
