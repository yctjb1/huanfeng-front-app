<template>
    <div :class="['flex','flex-col','p-[4px]',$style.mainLayoutWrap,'main-layout-wrap']">
<!--这里是布局页面-->
      <div :class="['flex','justify-between','h-[100px]',$style.mainLayoutHead,'main-layout-head']">
        <div>
          <img src="/huanfeng.png"/>
          幻枫视觉
        </div>
        <div class="flex space-x-16 pt-[12px]">
          <div>{{ $t("base.work") }}</div>
          <div>{{ $t("base.service") }}</div>
          <div>{{ $t("base.profile") }}</div>
          <div>{{ $t("base.idea") }}</div>
          <div>{{ $t("base.contact") }}</div>
          <a-select
              ref="select"
              v-model:value="baseStore.huanfengLocale"
              @change="handleChange"
              class="w-[100px]"
              :showArrow="false"
          >
            <a-select-option
                v-for="(localeKey, index) in Object.keys(baseStore.localeListLabel)"
                :key="index"
                :value="localeKey"
            >
              {{ baseStore.localeListLabel[localeKey] }}
            </a-select-option>
          </a-select>
        </div>

      </div>
      <div :class="[$style.mainLayoutContent,'main-layout-content']">
        <router-view></router-view>
      </div>
      <div :class="['h-[300px]',$style.mainLayoutFoot,'main-layout-head']">
        页脚
      </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import { useBaseStore } from '@/stores/index';
import {useI18n} from "vue-i18n";
export default {
    name: 'Layout',
    setup() {
      const { locale } = useI18n();

      const baseStore = useBaseStore();
      const laguageState = ref('zh');//弃用
      const handleChange = (value: string) => {
        baseStore?.updateLocale(value)
        locale.value = value
      };


        return {
          laguageState,
          handleChange,
          baseStore
        };
    },
};
</script>

<style lang="less" module>
 .mainLayoutWrap {
   position: relative;
   height: inherit;
   .mainLayoutHead {
     position: absolute;
     top: 0;
     width: calc(100% - 8px);
     padding: 4px;
     div:first-child {
       img{
         width: 50px;
         height: 50px;
       }
     }
   }
   .mainLayoutContent {
      padding-top: 104px;
      padding-bottom: 304px;
      min-height: calc(100% - 408px);
   }
   .mainLayoutFoot {
     position: absolute;
     bottom: 0;
     width: calc(100% - 8px);
   }
 }
</style>
