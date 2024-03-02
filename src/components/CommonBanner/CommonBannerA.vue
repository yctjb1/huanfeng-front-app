<template>
  <div :class="['flex','justify-center',$style.commonBannerA]">
    <div :class="['max-w-screen-xl', $style.wrap]">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * 带响应式的的组件1320~1920的时候内容最宽1280,下间距96
 */
</script>
<style lang="less" module>
.commonBannerA {
  .wrap {

  }
  padding-bottom: 96px;
}
</style>