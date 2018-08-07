<template>
  <div class="mark-history">
    <p class="mark-content-title">湘大史话</p>

    <div class="mark-history-timeline">
      <div class="mark-history-time-line"></div>
      <div class="mark-history-part">
        <div class="mark-history-part-info">
          <p class="mark-history-intro">
            湘潭大学创办于1958年，是党和国家及人民军队的主要缔造者、一代伟人毛泽东同志亲自倡导创办的综合性全国重点大学。1958年9月10日，毛泽东同志亲笔题写“湘潭大学”校名，并嘱托“一定要把湘潭大学办好”。学校自创办之日起，就传承了红色基因和血脉，寄托了毛主席对故乡的深情眷恋和对社会主义教育事业的殷切期望。</p>
          <p class="mark-history-year">1958</p>
        </div>
        <div class="mark-history-time-point"></div>
        <div class="mark-history-part-img">
          <img src="http://www.xtu.edu.cn/d/file/xxgk/xxjj/2016-03-18/36d31a6215aa8222ea0127645031ef52.jpg" alt="">
        </div>
      </div>

      <div class="mark-history-part">
        <div class="mark-history-part-info">
          <p class="mark-history-intro">
            湘潭大学创办于1958年，是党和国家及人民军队的主要缔造者、一代伟人毛泽东同志亲自倡导创办的综合性全国重点大学。1958年9月10日，毛泽东同志亲笔题写“湘潭大学”校名，并嘱托“一定要把湘潭大学办好”。学校自创办之日起，就传承了红色基因和血脉，寄托了毛主席对故乡的深情眷恋和对社会主义教育事业的殷切期望。</p>
          <p class="mark-history-year">1958</p>
        </div>
        <div class="mark-history-time-point"></div>
        <div class="mark-history-part-img">
          <img src="http://www.xtu.edu.cn/d/file/xxgk/xxjj/2016-03-18/ac9e3ab45ebd572ede175f60f918637f.jpg" alt="">
        </div>
      </div>

      <div class="mark-history-part">
        <div class="mark-history-part-info">
          <p class="mark-history-intro">
            湘潭大学创办于1958年，是党和国家及人民军队的主要缔造者、一代伟人毛泽东同志亲自倡导创办的综合性全国重点大学。1958年9月10日，毛泽东同志亲笔题写“湘潭大学”校名，并嘱托“一定要把湘潭大学办好”。学校自创办之日起，就传承了红色基因和血脉，寄托了毛主席对故乡的深情眷恋和对社会主义教育事业的殷切期望。</p>
          <p class="mark-history-year">1958</p>
        </div>
        <div class="mark-history-time-point"></div>
        <div class="mark-history-part-img"></div>
      </div>

      <div class="mark-history-part">
        <div class="mark-history-part-info">
          <p class="mark-history-intro">
            湘潭大学创办于1958年，是党和国家及人民军队的主要缔造者、一代伟人毛泽东同志亲自倡导创办的综合性全国重点大学。1958年9月10日，毛泽东同志亲笔题写“湘潭大学”校名，并嘱托“一定要把湘潭大学办好”。学校自创办之日起，就传承了红色基因和血脉，寄托了毛主席对故乡的深情眷恋和对社会主义教育事业的殷切期望。</p>
          <p class="mark-history-year">1958</p>
        </div>
        <div class="mark-history-time-point"></div>
        <div class="mark-history-part-img"></div>
      </div>

      <div class="mark-history-part">
        <div class="mark-history-part-info">
          <p class="mark-history-intro">
            湘潭大学创办于1958年，是党和国家及人民军队的主要缔造者、一代伟人毛泽东同志亲自倡导创办的综合性全国重点大学。1958年9月10日，毛泽东同志亲笔题写“湘潭大学”校名，并嘱托“一定要把湘潭大学办好”。学校自创办之日起，就传承了红色基因和血脉，寄托了毛主席对故乡的深情眷恋和对社会主义教育事业的殷切期望。</p>
          <p class="mark-history-year">1958</p>
        </div>
        <div class="mark-history-time-point"></div>
        <div class="mark-history-part-img"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mark-history {
  .mark-content-title {
    color: $color-red;
    font-size: 26px;
  }
  .mark-history-timeline {
    position: relative;

    .mark-history-time-line {
      width: 2px;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 0;
      background-color: $color-yellow;
      transform: translateX(-50%);
      z-index: 0;
    }
    .mark-history-part {
      display: flex;
      align-items: center;
      padding: 20px 0;
      z-index: 1;
      position: relative;

      &:nth-child(odd) {
        flex-direction: row-reverse;

        .mark-history-part-info {
          flex-direction: row-reverse;
        }

        .mark-history-part-img {
          text-align: left;
        }
      }

      .mark-history-part-info,
      .mark-history-part-img {
        flex: 1;
      }

      .mark-history-part-info {
        color: #333;
        display: flex;

        .mark-history-intro {
          line-height: 1.4em;
        }

        p {
          margin: 0;
        }

        .mark-history-year {
          font-size: 22px;
          padding: 0 1em;
        }
      }

      .mark-history-time-point {
        border: 2px solid $color-yellow;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #fff;
      }

      .mark-history-part-img {
        text-align: right;
        align-self: flex-start;

        img {
          width: 90%;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
