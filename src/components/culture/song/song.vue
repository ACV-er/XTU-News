<template>
  <detail-content title="校歌">
    <template slot="content">
      <div class="detail-part center">
        <p class="bold">湘潭大学校歌</p>
        <audio src="@/assets/media/school_music.mp3" controls="controls" width="700"></audio>
      </div>

      <div class="detail-part center">
        <p class="bold">湘潭大学校歌 MV</p>
        <video class="no-bottom-space" width="700" src="@/assets/media/school_music_mv.mp4" controls="controls"></video>
      </div>

      <div class="detail-part center">
        <p class="bold">湘潭大学校歌简谱</p>
        <img class="full-width" src="@/assets/images/culture_music_notation_numbered.jpg" alt="湘潭大学校歌简谱">
        <p class="bold">湘潭大学校歌五线谱</p>
        <img class="full-width" src="@/assets/images/culture_music_notation_stave.jpg" alt="湘潭大学校歌五线谱">
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
