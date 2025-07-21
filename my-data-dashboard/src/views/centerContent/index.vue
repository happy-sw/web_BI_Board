<template>
  <div>
    <div>
      <div>
        <WaveChart></WaveChart>
      </div>
      <div class="overview_panel">
        <!-- 左侧 -->
        <div class="overview_left">
          <div class="card_row">
            <StatCard title="S88公司" subtiltle="我是数据监测词"></StatCard>
            <StatCard title="S88公司" subtiltle="我是数据监测词"></StatCard>
          </div>
          <div class="ring_row">
            <RingChart
              :value="698"
              :label="'贷款'"
              :colors="'#00ff99'"
            ></RingChart>
            <RingChart
              :value="131"
              :label="'攻击'"
              :colors="'#ffe066'"
            ></RingChart>
            <RingChart
              :value="32"
              :label="'信用'"
              :colors="'#ff80b0'"
            ></RingChart>
          </div>
        </div>
        <div class="overview_right">
          <RiskRankList></RiskRankList>
        </div>
      </div>
      <div>3</div>
    </div>
  </div>
</template>

<script setup>
import WaveChart from "@/components/waveChart/index.vue";
import StatCard from "@/components/statCard/index.vue";
import RingChart from "@/components/ringChart/index.vue";
import RiskRankList from "@/components/riskRankList/index.vue";
</script>

<style scoped lang="scss">
.overview_panel {
  display: flex;
  // justify-content: center;
  // align-items: center;
  gap: 2px;
  padding: 2px;
}
.overview_left {
  // flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 50%;
}
.card_row {
  display: flex;
  gap: 2px;
  height: 30%;
}
.ring_row {
  display: flex;
  justify-content: space-between;
  height: 60%;
}
.overview_right {
  // flex: 2;
  width: 50%;
}
</style>
