<template>
  <footer :class="['h-[300px]','shrink-0',$style.mainLayoutFoot,'main-layout-head']">
    <div :class="['flex','justify-center','items-end','h-[100%]','flex-wrap','w-[100%]',$style.filings]">
      <div class="flex w-[100%] max-w-screen-xl justify-end">
        <a-image :src="qrSrc" :style="{width: '140px'}"/>
      </div>
      <div class="row flex justify-center items-center w-[100%]">

        <a class="no-underline text-base text-white hover:underline underline-offset-4" href="//beian.miit.gov.cn"
           target="_blank">苏ICP备16022584号-1</a>
        <a-divider type="vertical" style="background-color: #fff"/>
        <span class="no-underline text-base text-white hover:underline underline-offset-4">幻枫视觉@2024</span>
        <a-divider type="vertical" style="background-color: #fff"/>
        <a class="no-underline text-base text-white hover:underline underline-offset-4"
           href="//github.com/yctjb1/huanfeng-front-app/tree/dev" target="_blank">github</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

import {useBaseStore} from '@/stores/index';
import qrSrc from '@/assets/images/qr.jpg';

const baseStore = useBaseStore();
</script>

<style lang="less" module>
.mainLayoutFoot {
  width: 100%;
  background-color: rgba(0, 69, 98, 1);

  .filings {
    padding-bottom: 16px;
  }
}
</style>
