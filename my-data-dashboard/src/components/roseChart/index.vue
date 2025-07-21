<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { ref } from "vue";

const option = ref({
  tooltip: { trigger: "item", formatter: "{b}: {c}" },
  series: [
    {
      name: "设备类型",
      type: "pie",
      roseType: "radius",
      radius: ["40%", "70%"],
      center: ["50%", "70%"],
      startAngle: 180,
      label: {
        show: true,
        formatter: "{b}\n{c}",
        color: "#fff",
        fontSize: 12,
      },
      data: [
        { value: 40, name: "X设备", itemStyle: { color: "#00ff00" } },
        { value: 38, name: "Y设备", itemStyle: { color: "#ffff00" } },
        { value: 32, name: "Z设备", itemStyle: { color: "#ff9900" } },
        { value: 30, name: "A设备", itemStyle: { color: "#ff0000" } },
        { value: 28, name: "B设备", itemStyle: { color: "#00ccff" } },
        { value: 26, name: "C设备", itemStyle: { color: "#9900ff" } },
      ],
    },
  ],
});
</script>

<style scoped lang="scss">
.chart {
  width: 100%;
  height: 100px;
}
</style>
