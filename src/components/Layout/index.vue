<template>
  <a-config-provider :locale="baseStore.getAntLocale">
<!--这里是布局页面-->
    <div :class="['flex','flex-1','flex-col',$style.mainLayoutWrap,'main-layout-wrap']">
      <MainLayoutHead />

      <div :class="[$style.mainLayoutContent,'main-layout-content']">
        <router-view></router-view>
      </div>
      <MainLayoutFoot />
    </div>
  </a-config-provider>
</template>

<script lang="ts">

import MainLayoutHead from '@/components/Layout/MainLayoutHead.vue';
import MainLayoutFoot from '@/components/Layout/MainLayoutFoot.vue';
import { useBaseStore } from '@/stores/index';

export default {
    name: 'Layout',
    setup() {


      const baseStore = useBaseStore();



        return {

          baseStore
        };
    },
  components: {
    MainLayoutHead,
    MainLayoutFoot
  }
};
</script>

<style lang="less" module>
 .mainLayoutWrap {
   position: relative;
   height: inherit;
   overflow-x: hidden;
   overflow-y: auto;
   .mainLayoutContent {
      //padding-top: 104px;
      //padding-bottom: 304px;
      min-height: calc(100% - 400px);
   }
 }
</style>
