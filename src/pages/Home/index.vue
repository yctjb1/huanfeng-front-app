<template>
  <div>
    <HomeTopVideoBanner />
  </div>
</template>

<script lang="ts">
import { ref,h } from 'vue';
import {Modal} from 'ant-design-vue'

import HomeTopVideoBanner from '@/components/HomeTopVideoBanner/index.vue'
export default {
  name: 'HomePage',
  setup() {
    const message = ref('Hello from Vue 3!');
    const success = () => {
       Modal.success({
         title: 'This is a succes message.',
         content: h('div',{},[
             h('div','这是一些成功信息')
         ])
       })
    }

    return {
      message,
      success,
    };
  },
  components: {
    HomeTopVideoBanner
  }
};
</script>

<style lang="less" module>

</style>
