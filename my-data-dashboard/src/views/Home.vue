<template>
  <div class="constainer">
    <div class="header">
      <Title />
    </div>
    <div class="main">
      <div class="main-left"></div>
      <div class="main-center"></div>
      <div class="main-right"></div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/title/index.vue";
import "./assets/css/home.scss";
</script>

<style lang="scss" scoped>
.constainer {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("../assets/img/pageBg.png");
  background-size: cover;
  background-position: center center;

  /* 半透明遮罩 */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4); /* 可调整透明度 */
    pointer-events: none;
  }
}
</style>
