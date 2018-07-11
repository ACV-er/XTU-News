<template>
  <detail-content title="校徽">
    <template slot="content">
      <img class="full-width no-bottom-space" src="@/assets/images/culture_badge.jpg" alt="校徽">

      <div class="detail-part center">
        <img class="no-bottom-space" src="@/assets/images/culture_badge_1.jpg" alt="本科生" width="300">
        <p>湘潭大学本科学生校徽</p>
        <img class="no-bottom-space" src="@/assets/images/culture_badge_2.jpg" alt="研究生" width="300">
        <p>湘潭大学研究生校徽</p>
        <img class="no-bottom-space" src="@/assets/images/culture_badge_3.jpg" alt="教职工" width="300">
        <p>湘潭大学教职工校徽</p>
      </div>

      <div class="detail-part">
        <p class="indent">湘潭大学校徽共有红色、黑色、蓝色三款。红色代表喜庆、黑色代表庄重、蓝色则代表了理性。总体设计简约而不简单。校徽上的三道拱门是湘潭大学的标志性建筑，湘大人充满信心地走进三道拱门，学成后再满怀激情地跨出三道拱门，以智慧、勇气回报社会。无论来自江南塞北，无论去往繁华宁静，一进一出中，每个湘大人挥之不去的，就是这拱门情结。湘潭大学校徽便是以这样一种独特的寓意激励着每一位在胸前佩戴它的学子奋勇向前、永不止步。</p>
      </div>
    </template>
  </detail-content>
</template>

<script>
import DetailContent from '@/base/detail-content/detail-content'

export default {
  components: {
    DetailContent
  }
}
</script>
