<template>
  <div class="constainer"></div>
</template>

<script setup></script>

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
