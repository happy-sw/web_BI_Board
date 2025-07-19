<template>
  <div>
    <v-chart :option="option" autoresize style="height: 200px"></v-chart>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from "echarts/components";

// 注册组件
use([
  CanvasRenderer,
  PieChart,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
]);

const colors = ["#00ffff", "#00ff66", "#33ccff", "#ffff66", "#66ffff"];

// 环形数据
const data = [
  { name: "信用", value: 25 },
  { name: "市场", value: 30 },
  { name: "操作", value: 20 },
  { name: "政策", value: 15 },
  { name: "其他", value: 10 },
];

// 构造多层环形图，每层一个 pie
const series = data.map((item, index) => {
  const total = 100;
  const radiusStep = 10;
  const inner = 40 + index * radiusStep;
  const outer = inner + 8;

  return {
    name: item.name,
    type: "pie",
    clockwise: true,
    radius: [`${inner}%`, `${outer}%`],
    itemStyle: {
      borderRadius: 5,
    },
    label: { show: false },
    tooltip: {
      formatter: `{b}: {c}%`,
    },
    data: [
      {
        value: item.value,
        name: item.name,
        itemStyle: { color: colors[index] },
      },
      {
        value: total - item.value,
        name: "invisible",
        itemStyle: {
          color: "#1b3a4b",
          opacity: 0.2,
        },
        tooltip: { show: false },
      },
    ],
  };
});

const option = ref({
  title: {
    text: "占比统计表",
    left: "center",
    top: 10,
    textStyle: {
      color: "#c0e6ff",
    },
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "right",
  },
  series,
});
</script>

<style scoped lang="scss"></style>
