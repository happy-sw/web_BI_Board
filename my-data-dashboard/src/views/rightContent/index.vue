<template>
  <div>
    <div>
      <BarChart></BarChart>
    </div>
    <div>
      <LineChartV3></LineChartV3>
    </div>
    <div>
      <GaugeChartV3></GaugeChartV3>
    </div>
  </div>
</template>

<script setup>
import BarChart from "@/components/barChart/index.vue";
import LineChartV3 from "@/components/lineChartV3/index.vue";
import GaugeChartV3 from "@/components/gaugeChartV3/index.vue";
</script>

<style scoped lang="scss"></style>
