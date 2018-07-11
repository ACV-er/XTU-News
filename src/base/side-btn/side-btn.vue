<template>
  <transition name="fade">
    <div class="side-btn" v-show="btnShow">
      <div class="back-to-top">
        <i class="iconfont icon-huidaodingbu" @click="backToTop"></i>
      </div>
      <div class="bdsharebuttonbox">
        <a href="#" class="bds_more" data-cmd="more">
          <i class="iconfont icon-fenxiang1"></i>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      btnShow: false
    }
  },
  mounted() {
    let heigth =
      document.documentElement.clientHeight || document.body.clientHeight
    this.windowHeight = parseInt(heigth)

    window.addEventListener('scroll', () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop >= this.windowHeight * 0.2) {
        this.btnShow = true
      } else {
        this.btnShow = false
      }
    })
  },
  methods: {
    backToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-btn {
  position: fixed;
  left: 50%;
  transform: translateX(520px);
  bottom: 220px;

  .back-to-top {
    .icon-huidaodingbu {
      font-size: 35px;
      color: #8a8a8a;
      opacity: 0.5;
      cursor: pointer;
    }

    &:hover {
      .icon-huidaodingbu {
        opacity: 1;
      }
    }
  }

  .bds_more {
    background-image: none;
    margin: 0;
    text-indent: 0;
    width: auto;
    height: auto;
    line-height: inherit;
    display: block;

    .iconfont {
      color: #efc86c;
      opacity: 0.5;
      font-size: 35px;
      pointer-events: none;
    }

    &:hover {
      .iconfont {
        opacity: 1;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
