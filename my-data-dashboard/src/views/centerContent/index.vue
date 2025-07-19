<template>
  <div>
    <div>
      <div>
        <WaveChart></WaveChart>
      </div>
      <div class="center_info">
        <!-- 左侧区域 -->
        <div class="center_info_card">
          <!-- 上半部分 -->
          <div class="center_info_card_top">
            <InfoCard></InfoCard>
          </div>
          <!-- 下半部分 -->
          <div class="center_info_card_bottom">
            <CountUp></CountUp>
          </div>
        </div>
        <!-- 右侧区域 -->
        <div class="center_info_search">
          <SearchTable></SearchTable>
        </div>
      </div>
      <div>3</div>
    </div>
  </div>
</template>

<script setup>
import WaveChart from "@/components/waveChart/index.vue";
import InfoCard from "@/components/infoCard/index.vue";
import CountUp from "@/components/countUp/index.vue";
import SearchTable from "@/components/searchTable/index.vue";
</script>

<style scoped lang="scss">
.center_info {
  border: 1px solid red;
  display: flex;
  box-sizing: border-box;

  .center_info_card {
    border: 1px solid red;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .center_info_card_top {
      flex: 1;
    }
    .center_info_card_bottom {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .center_info_search {
    border: 1px solid red;
    flex: 1;
  }
}
</style>
