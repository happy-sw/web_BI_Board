<template>
  <div class="chart-group">
    <v-chart
      :option="getOption('设备数', 100, '#00ff99')"
      autoresize
      class="chart"
    />
    <v-chart
      :option="getOption('离线数', 23, '#ffcc00')"
      autoresize
      class="chart"
    />
    <v-chart
      :option="getOption('在线数', 77, '#ff66cc')"
      autoresize
      class="chart"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { TooltipComponent, TitleComponent } from "echarts/components";

use([CanvasRenderer, PieChart, TooltipComponent, TitleComponent]);

const getOption = (label, value, color) => {
  return {
    backgroundColor: "transparent",
    title: {
      text: `${label}\n${value}`,
      left: "center",
      top: "40%",
      textStyle: {
        color,
        fontWeight: "bold",
        lineHeight: 24,
      },
    },
    tooltip: {
      show: false,
    },
    series: [
      {
        type: "pie",
        radius: ["70%", "90%"],
        avoidLabelOverlap: false,
        silent: true,
        label: { show: false },
        labelLine: { show: false },
        data: [
          {
            value,
            name: label,
            itemStyle: {
              color,
              shadowBlur: 20,
              shadowColor: color,
              borderWidth: 2,
              borderColor: "#111",
            },
          },
          {
            value: 100 - value,
            name: "invisible",
            itemStyle: {
              color: "#1e1e1e",
              opacity: 0.3,
            },
          },
        ],
      },
    ],
  };
};
</script>

<style scoped lang="scss">
.chart-group {
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;
  //   background: #0f0f1c;
  //   padding: 20px;
  //   gap: 20px;
}
.chart {
  width: 50px;
  height: 50px;
}
</style>
