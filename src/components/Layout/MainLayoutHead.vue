<template>
  <div :class="['flex','justify-between','h-[100px]',$style.mainLayoutHead,'main-layout-head']">
    <div style="cursor: pointer" @click="this.$router.push('/home')">
      <img src="/huanfeng.png"/>
      幻枫视觉
    </div>
    <div class="flex space-x-4 pt-[12px]">
      <div>{{ $t("base.work") }}</div>
      <div>{{ $t("base.service") }}</div>
      <div style="cursor: pointer" @click="this.$router.push('/about')">{{ $t("base.profile") }}</div>
      <div>{{ $t("base.idea") }}</div>
      <div>{{ $t("base.contact") }}</div>
      <div>
     <a-dropdown :trigger="['hover']" :arrow="false">
        <a class="ant-dropdown-link" style="cursor: pointer" @click.prevent>
          {{ baseStore.localeListLabel[baseStore.huanfengLocale]}}
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item
                v-for="(localeKey, index) in Object.keys(baseStore.localeListLabel)"
                :key="index"
                :value="localeKey">
              <span style="cursor: pointer" @click="handleChange(localeKey)">{{ baseStore.localeListLabel[localeKey] }}</span>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import { useBaseStore } from '@/stores/index';
import {useI18n} from "vue-i18n";
import { DownOutlined } from '@ant-design/icons-vue';
export default {
  name: 'MainLayoutHead',
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
  components: {
    DownOutlined
  }
};
</script>

<style lang="less" module>
.mainLayoutHead {
  padding: 4px;
  div:first-child {
    img{
      width: 50px;
      height: 50px;
    }
  }
}
</style>
