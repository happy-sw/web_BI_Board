<template>
  <div class="number-item">
    <div class="header-icon">
      <BuildingSvg class="icon" />
      <div class="item-text">185个建筑</div>
    </div>
    <div class="header-icon">
      <DataSvg class="icon"></DataSvg>
      <div class="item-text">195个数据</div>
    </div>
    <div class="header-icon">
      <HomeSvg class="icon"></HomeSvg>
      <div class="item-text">4%个建筑</div>
    </div>
    <div class="header-icon">
      <UserSvg class="icon"></UserSvg>
      <div class="item-text">4%个建筑</div>
    </div>
  </div>
</template>

<script setup>
import BuildingSvg from "@/assets/icon/building.svg";
import DataSvg from "@/assets/icon/data.svg";
import UserSvg from "@/assets/icon/user.svg";
import HomeSvg from "@/assets/icon/home.svg";
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
