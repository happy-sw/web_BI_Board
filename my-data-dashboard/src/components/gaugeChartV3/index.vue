<template>
  <div>
    <v-chart :option="option" autoresize style="width: 300px; height: 300px" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";

import { CanvasRenderer } from "echarts/renderers";
import { GaugeChart } from "echarts/charts";
import { TooltipComponent, TitleComponent } from "echarts/components";

// 注册 ECharts 组件
use([CanvasRenderer, GaugeChart, TooltipComponent, TitleComponent]);

// 模拟数据（比如完成率 76%）
const percentage = 76;

const option = ref({
  title: {
    text: "系统健康度",
    left: "center",
    top: "10%",
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "健康度",
      type: "gauge",
      startAngle: 210,
      endAngle: -30,
      progress: {
        show: true,
        width: 18,
        itemStyle: {
          color: "#00ff66", // ✅ 绿色主题
        },
      },
      axisLine: {
        lineStyle: {
          width: 18,
          color: [[1, "#1f3a52"]],
        },
      },
      pointer: {
        icon: "rect",
        width: 6,
        length: "80%",
        itemStyle: {
          color: "#00ff66",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        length: 12,
        lineStyle: {
          color: "#999",
          width: 1,
        },
      },
      axisLabel: {
        distance: 20,
        color: "#fff",
        fontSize: 12,
      },
      detail: {
        valueAnimation: true,
        fontSize: 28,
        offsetCenter: [0, "60%"],
        color: "#00ff66",
        formatter: "{value}%",
      },
      data: [
        {
          value: percentage,
          name: "达成率",
        },
      ],
    },
  ],
});
</script>

<style scoped lang="scss"></style>
