<template>
  <div class="search-box">
    <input class="search-input" type="text">
    <button class="search-btn">
      <i class="iconfont icon-fangdajing"></i>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  height: 35px;
  width: 355px;
  // border: 2px solid #ea9f53;

  .search-input {
    border: none;
    padding: 0;
    border: 1px solid #c9c9c9;
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 0.5em;
    flex: 1;
  }

  .search-btn {
    border: none;
    transition: all 0.25s;
    cursor: pointer;
    width: 60px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #ea9f53;

    .icon-fangdajing {
      color: #fff;
      font-size: 24px;
      transition: all 0.25s;
    }

    &:hover .icon-fangdajing {
      color: #fff;
    }

    &:hover {
      background: #ea9f53;
    }

    &:active {
    }
  }

  .search-input:focus,
  .search-btn:focus {
    outline: none;
  }
}
</style>
