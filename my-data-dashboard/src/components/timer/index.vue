<template>
  <div class="number-item">
    <div class="header-icon">
      <TimeSvg class="icon" />
      <span class="item-text">2025年6月8日</span>
      <span class="item-text">10:00:00</span>
    </div>
    <div class="header-icon">
      <WeatherSvg class="icon" />
      <span class="item-text">2025年6月8日</span>
      <span class="item-text">10:00:00</span>
    </div>
  </div>
</template>

<script setup>
import TimeSvg from "@/assets/icon/time.svg";
import WeatherSvg from "@/assets/icon/weather.svg";
</script>

<style scoped lang="scss">
.number-item {
  display: flex;
}
.header-icon {
  flex: 1;
}
.item-text {
  color: #69aae0;
}
.icon {
  display: block; /* 保证 SVG 不受 inline 影响 */
  color: white; /* 确保 fill="currentColor" 时生效 */
}
</style>
