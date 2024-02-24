<template>
  <div :class="$style.homePage">
    <div class="flex">
      <a-button type="primary" :class="$style.testBtn" >这里是首页</a-button>
      <b>测试pinia: {{baseStore.test}},{{baseStore.getTestStr}}</b>
      <a-button :class="$style.testBtn" @click="incrementTest">pinia中+1</a-button>
    </div>
    <div class="flex bg-slate-300">
      <div class="flex-none w-14 h-14">
        01
      </div>
      <div class="flex-initial w-64 ...">
        02
      </div>
      <div class="flex-initial w-32 ...">
        03
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useBaseStore } from '@/stores/index';
export default {
  name: 'TestPage',
  setup() {
    const message = ref('Hello from Vue 3!');
    const count = ref(0);
    const baseStore = useBaseStore();
    function incrementCount() {
      count.value++;
    }

    const incrementTest=()=> {
      baseStore.updateTest(baseStore.test + 1);
    }

    return {
      message,
      count,
      incrementCount,
      baseStore,
      incrementTest
    };
  },
};
</script>

<style lang="less" module>
.homePage {
  .testBtn {
    margin-left: 50px;
  }
}
</style>
