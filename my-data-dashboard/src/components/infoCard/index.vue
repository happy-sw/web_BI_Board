<template>
  <div>
    <div class="info-card">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
    <div class="info-card">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "主题名称",
  },
  description: {
    type: String,
    default: "这里是描述内容",
  },
});
</script>

<style scoped lang="scss">
.info-card {
  background: linear-gradient(135deg, #80ffa5, #37a2ff); /* ✅ 渐变 */
  border-radius: 16px;
  padding: 16px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #003344;
  width: 23%;
  font-size: 10px;
  max-width: 400px;
  box-sizing: border-box;
}

.title {
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 8px;
}

.description {
  font-size: 10px;
  opacity: 0.8;
}
</style>
