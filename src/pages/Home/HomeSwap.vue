<template>
  <a-carousel arrows autoplay>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div v-for="item in 4" :key="item">
      <div class="flex justify-center items-center">
      <img :src="getImgUrl(item - 1)" />
      </div>
    </div>
  </a-carousel>
</template>
<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

const baseUrl =
    'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
const getImgUrl = (i: number) => {
  return `${baseUrl}abstract0${i + 1}.jpg`;
};
</script>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 280px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>