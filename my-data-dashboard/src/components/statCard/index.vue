<template>
  <div class="stat-card">
    <div class="card-title">{{ title }}</div>
    <div class="card-subtitle">{{ subtitle }}</div>
  </div>
</template>

<script setup>
defineProps(["title", "subtitle"]);
</script>

<style scoped lang="scss">
.stat-card {
  flex: 1;
  background: linear-gradient(to right, #00ffd0, #3fbfff);
  color: #fff;
  padding: 2px;
  text-align: center;
  border-radius: 6px;
}
.card-title {
  //   font-size: 18px;
  font-weight: bold;
}
.card-subtitle {
  margin-top: 2px;
  //   font-size: 14px;
}
</style>
