<template>
  <div :class="[$style.caseBannerA]">
    <div :class="['max-w-screen-xl', $style.wrap]">
      <div :class="$style.picWrap">
        <slot name="pic"></slot>
      </div>
      <div :class="$style.descWrap">
        <div :class="['text-2xl','text-[#004562]',$style.title]">
          <slot name="title"></slot>
        </div>
        <div :class="['text-base',$style.desc]">
          <slot name="desc"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * 带响应式的的组件1320~1920的时候内容最宽1280,下间距96
 */
</script>
<style lang="less" module>
.caseBannerA {
  .wrap {
    display: flex;
    justify-content: space-between;

    .picWrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: calc(100% - 300px);
      margin-bottom: -24px;
      & > div {
        width: calc(50% - 12px);
        border-radius: 20px;
        overflow: hidden;
        margin-bottom: 24px;
        img {
          width: 100%;
          height: 220px;
        }
      }

    }

    .descWrap {
      max-width: 250px;

      .desc {
        margin-top: 40px;
      }
    }
  }
}
</style>