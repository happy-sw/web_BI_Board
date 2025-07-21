<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { ref } from "vue";
import { FunnelChart } from "echarts/charts";
import { use } from "echarts/core";

use([FunnelChart]);
const option = ref({
  title: {
    text: "转化漏斗及占比",
    textStyle: { color: "#fff", fontSize: 16 },
    left: "center",
  },
  tooltip: { trigger: "item", formatter: "{b}: {c}" },
  series: [
    {
      name: "漏斗图",
      type: "funnel",
      left: "10%",
      width: "80%",
      label: { show: true, position: "inside", color: "#fff" },
      itemStyle: { borderColor: "#111", borderWidth: 1 },
      data: [
        { value: 100, name: "展示" },
        { value: 80, name: "点击" },
        { value: 60, name: "访问" },
        { value: 40, name: "咨询" },
        { value: 20, name: "下单" },
      ],
    },
  ],
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100px;
}
</style>
