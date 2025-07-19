<template>
  <div>
    <v-chart :option="option" autoresize style="height: 200px; width: 100%" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
// 注册 ECharts 组件
use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
]);

const option = ref({
  backgroundColor: "#0f2c4c",
  title: {
    text: "风险趋势图",
    left: "left",
    top: 10,
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["信用", "市场", "操作", "政策", "其他"],
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "20%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["周一", "周二", "周三", "周四", "周五", "周六"],
    axisLine: {
      lineStyle: {
        color: "#fff",
      },
    },
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#fff",
      },
    },
    splitLine: {
      lineStyle: {
        color: "#2c4a6b",
      },
    },
  },
  series: [
    {
      name: "信用",
      type: "line",
      stack: "总量",
      smooth: true,
      areaStyle: {
        color: "#4ee2e2",
      },
      emphasis: { focus: "series" },
      data: [200, 300, 400, 300, 500, 400],
    },
    {
      name: "市场",
      type: "line",
      stack: "总量",
      smooth: true,
      areaStyle: {
        color: "#41b1f2",
      },
      emphasis: { focus: "series" },
      data: [100, 200, 300, 300, 400, 300],
    },
    {
      name: "操作",
      type: "line",
      stack: "总量",
      smooth: true,
      areaStyle: {
        color: "#aa4ff2",
      },
      emphasis: { focus: "series" },
      data: [150, 150, 200, 200, 300, 250],
    },
    {
      name: "政策",
      type: "line",
      stack: "总量",
      smooth: true,
      areaStyle: {
        color: "#f26adf",
      },
      emphasis: { focus: "series" },
      data: [100, 120, 180, 200, 250, 300],
    },
    {
      name: "其他",
      type: "line",
      stack: "总量",
      smooth: true,
      areaStyle: {
        color: "#f2a14b",
      },
      emphasis: { focus: "series" },
      data: [50, 100, 150, 200, 220, 250],
    },
  ],
});
</script>

<style scoped lang="scss"></style>
