<template>
  <div>
    啊啊啊？
    {{ $t("home.title") }}
    <br/>
    <router-link to="/test">去test页</router-link>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'HomePage',
  setup() {
    const message = ref('Hello from Vue 3!');


    return {
      message,

    };
  },
};
</script>

<style lang="less" module>

</style>
