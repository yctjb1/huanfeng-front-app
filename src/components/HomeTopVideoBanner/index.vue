<template>
  <div :class="['flex','justify-center','items-center',$style.topVideoBanner]">
    <div :class="[$style.videoBg]"></div>
<!--    <video id="topBannerVideo" muted autoplay loop>-->
    <video id="topBannerVideo">
      <source src="@/assets/videos/huanfeng.mp4" type="video/mp4">
      {{ $t("error.video") }}
    </video>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" module>
.topVideoBanner {
  position: relative;
  .videoBg {
    background-image: url('@/assets/images/top-banner-bg.png');
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
  }
  video{
    width: 480px;
    height: 180px;
  }

}
</style>