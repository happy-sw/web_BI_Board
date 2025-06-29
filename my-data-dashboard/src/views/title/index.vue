<template>
  <div class="header">
    <div class="header-title">北京银行智能合规中心</div>
    <div class="header-number">
      <NumberItems></NumberItems>
    </div>
    <div class="header-time-weather">
      <Timer></Timer>
      <Weather></Weather>
    </div>
  </div>
</template>

<script setup>
import NumberItems from "@/components/numberItems/index.vue";
import Timer from "@/components/timer/index.vue";
import Weather from "@/components/weather/index.vue";
</script>

<style scoped lang="scss">
.header {
  display: flex;
}
.header-title {
  flex: 1;
  font-size: 30px;
  font-weight: 700;
  color: white;
  text-align: center;
  padding: 20px 0;
}
.header-number {
  flex: 1;
}
</style>
