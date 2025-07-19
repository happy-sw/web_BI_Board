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
import { graphic } from "echarts/core";

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
  color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
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
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(128, 255, 165)",
          },
          {
            offset: 1,
            color: "rgb(1, 191, 236)",
          },
        ]),
      },
      emphasis: { focus: "series" },
      data: [200, 300, 400, 300, 500, 400],
    },
    {
      name: "市场",
      type: "line",
      stack: "总量",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(0, 221, 255)",
          },
          {
            offset: 1,
            color: "rgb(77, 119, 255)",
          },
        ]),
      },
      emphasis: { focus: "series" },
      data: [100, 200, 300, 300, 400, 300],
    },
    {
      name: "操作",
      type: "line",
      stack: "总量",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(55, 162, 255)",
          },
          {
            offset: 1,
            color: "rgb(116, 21, 219)",
          },
        ]),
      },
      emphasis: { focus: "series" },
      data: [150, 150, 200, 200, 300, 250],
    },
    {
      name: "政策",
      type: "line",
      stack: "总量",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(255, 0, 135)",
          },
          {
            offset: 1,
            color: "rgb(135, 0, 157)",
          },
        ]),
      },
      emphasis: { focus: "series" },
      data: [100, 120, 180, 200, 250, 300],
    },
    {
      name: "其他",
      type: "line",
      stack: "总量",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(255, 191, 0)",
          },
          {
            offset: 1,
            color: "rgb(224, 62, 76)",
          },
        ]),
      },
      emphasis: { focus: "series" },
      data: [50, 100, 150, 200, 220, 250],
    },
  ],
});
</script>

<style scoped lang="scss"></style>
