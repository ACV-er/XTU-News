<template>
  <div class="footer">
    <footer class="footer-container">
      <img src="@/assets/images/footer_slogan.png" alt="博学笃行，盛德日新">
      <p>Copyright 2001-{{ currYear }} <a href="http://218.75.242.251:8007/">湘潭大学党委宣传部</a> 地址：中国湖南湘潭. 邮编：411105</p>
      <p>湘ICP备：05005862号 湘教QS3-200505-000059</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currYear: (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  min-width: $content-width;
  height: 200px;
  background: $color-red-d;

  .footer-container {
    width: $content-width;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

    img {
      display: block;
      margin: 0 auto;
    }

    p {
      width: 100%;
      color: #fff;
      margin: 20px 0 0;
      text-align: center;

      a {
        color: #fff;
      }
    }
  }
}
</style>
