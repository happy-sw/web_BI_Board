<template>
  <div class="constainer">
    <div class="header">
      <Title></Title>
    </div>
    <div class="main">
      <div class="main-left">
        <LeftContent></LeftContent>
      </div>
      <div class="main-center">
        <CenterContent></CenterContent>
      </div>
      <div class="main-right">
        <RightContent></RightContent>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/views/title/index.vue";
import LeftContent from "@/views/leftContent/index.vue";
import CenterContent from "@/views/centerContent/index.vue";
import RightContent from "@/views/rightContent/index.vue";
import "@/assets/css/home.scss";
</script>

<style lang="scss" scoped>
.constainer {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("../assets/img/pageBg.png");
  background-size: cover;
  background-position: center center;
}
</style>
