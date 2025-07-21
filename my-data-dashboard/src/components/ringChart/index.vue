<template>
  <div class="ring-chart">
    <v-chart :option="option" autoresize />
    <div class="chart-label">
      {{ value }}<br /><span>{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import VChart from "vue-echarts";
const props = defineProps(["value", "label", "colors"]);
const option = computed(() => ({
  series: [
    {
      type: "pie",
      radius: ["65%", "75%"],
      center: ["50%", "50%"],
      data: [
        { value: 75, itemStyle: { color: props.colors } },
        { value: 25, itemStyle: { color: "#1c1c2c" } },
      ],
      label: { show: false },
      emphasis: {
        scale: false,
      },
    },
  ],
}));
</script>

<style scoped lang="scss">
.ring-chart {
  position: relative;
  width: 50px;
  height: 50px;
}
.chart-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #00ffc6;
  text-align: center;
  font-size: 18px;
}
.chart-label span {
  font-size: 14px;
  color: #ddd;
}
</style>
