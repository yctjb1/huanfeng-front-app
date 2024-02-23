<template>
  <div :class="$style.homePage">

    <a-space wrap>
      <a-button type="primary" :class="$style.testBtn" >这里是首页</a-button>
    </a-space>
    <div class="flex">
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
export default {
  name: 'HomePage',
  setup() {
    const message = ref('Hello from Vue 3!');
    const count = ref(0);

    function incrementCount() {
      count.value++;
    }

    return {
      message,
      count,
      incrementCount,
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
