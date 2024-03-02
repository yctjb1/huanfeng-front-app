<template>
  <CommonBannerA>
    <template #default>
      <CaseBannnerA>
        <template #pic>
          <div>
            <img src="@/assets/images/case/case-1.png" :class="caseBannnerAImgStyle"/>
          </div>
          <div>
            <img src="@/assets/images/case/case-2.png" :class="caseBannnerAImgStyle"/>
          </div>
          <div>
            <img src="@/assets/images/case/case-3.png" :class="caseBannnerAImgStyle"/>
          </div>
          <div>
            <img src="@/assets/images/case/case-4.png" :class="caseBannnerAImgStyle"/>
          </div>
        </template>
        <template #title>
          {{ $t("case.pv.title") }}
        </template>
        <template #desc>
          <p> {{ $t("case.pv.p1") }}</p>
          <p> {{ $t("case.pv.p2") }}</p>
        </template>
      </CaseBannnerA>
    </template>

  </CommonBannerA>
</template>

<script lang="ts" setup>
import CommonBannerA from "@/components/CommonBanner/CommonBannerA.vue";
import CaseBannnerA from "@/components/CommonBanner/CaseBannnerA.vue";
import {caseBannnerAImgStyle} from '@/utils/tailwindStyle/hover'
</script>

<style lang="less" module>

</style>
