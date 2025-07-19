<template>
  <div>
    <v-chart :option="option" autoresize style="height: 200px; width: 100%" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";

import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";

// 注册 ECharts 所需组件
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
]);

// 模拟数据
const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const newUsers = [120, 200, 150, 80, 70, 110, 130];
const orders = [300, 450, 500, 400, 600, 700, 750];

const option = ref({
  title: {
    text: "数据增量统计",
    textStyle: {
      color: "#fff",
    },
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["新增用户", "订单数量"],
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: days,
    axisLine: { lineStyle: { color: "#fff" } },
    axisLabel: { color: "#fff" },
  },
  yAxis: [
    {
      type: "value",
      name: "新增用户",
      axisLine: { lineStyle: { color: "#fff" } },
      axisLabel: { color: "#fff" },
    },
    {
      type: "value",
      name: "订单数量",
      axisLine: { lineStyle: { color: "#fff" } },
      axisLabel: { color: "#fff" },
    },
  ],
  series: [
    {
      name: "新增用户",
      type: "bar",
      data: newUsers,
      barWidth: 10,
      itemStyle: {
        color: "#00DDFF",
        barBorderRadius: [10, 10, 0, 0], //设置每个圆柱的圆角大小
      },
    },
    {
      name: "订单数量",
      type: "line",
      yAxisIndex: 1,
      data: orders,
      smooth: true,
      lineStyle: {
        color: "#80FFA5",
        width: 3,
      },
      symbol: "circle",
      symbolSize: 8,
      itemStyle: {
        color: "#80FFA5",
      },
      areaStyle: {
        // ✅ 添加渐变阴影
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "rgb(128, 255, 165)" }, // 顶部
            { offset: 1, color: "rgba(250, 204, 20, 0)" }, // 底部透明
          ],
        },
        shadowColor: "rgba(0, 0, 0, 0.3)", // 可选阴影
        shadowBlur: 10,
      },
    },
  ],
});
</script>

<style scoped lang="scss"></style>
