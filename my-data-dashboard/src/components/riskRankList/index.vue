<template>
  <div class="risk_rank_list">
    <div class="rish_header">
      <span>风险大类词</span>
      <span>发现占比</span>
      <span>发现次数</span>
    </div>
    <div class="list">
      <div v-for="(item, index) in listData" :key="index" class="row">
        <div class="rank">
          <span class="rank-badge" :style="{ backgroundColor: item.color }">
            {{ item.rank }}
          </span>
          <span class="category">{{ item.label }}</span>
        </div>
        <div class="rate">
          <span :class="['arrow', item.trend === 'up' ? 'up' : 'down']">▲</span>
          {{ item.rate }}
        </div>
        <div class="count">{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const listData = [
  {
    rank: 1,
    label: "信用卡",
    rate: "53%",
    count: 11510,
    color: "#f55",
    trend: "up",
  },
  {
    rank: 2,
    label: "风险",
    rate: "52%",
    count: 11510,
    color: "#c97c2f",
    trend: "up",
  },
  {
    rank: 3,
    label: "放贷",
    rate: "50%",
    count: 11510,
    color: "#00cfff",
    trend: "up",
  },
  {
    rank: 4,
    label: "诈骗",
    rate: "49%",
    count: 11510,
    color: "#b0b0b0",
    trend: "down",
  },
  {
    rank: 5,
    label: "驾照",
    rate: "48%",
    count: 11510,
    color: "#3bdc72",
    trend: "down",
  },
  {
    rank: 6,
    label: "银行卡",
    rate: "47%",
    count: 11510,
    color: "#3bdc72",
    trend: "down",
  },
  {
    rank: 7,
    label: "贷款服务",
    rate: "46%",
    count: 11510,
    color: "#3bdc72",
    trend: "down",
  },
];
</script>

<style scoped lang="scss">
.risk_rank_list {
  color: #fff;
  font-size: 7px;
  background-color: #121c2e;
  padding: 2px;
  border-radius: 1px;
}
.rish_header {
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
  font-weight: bold;
  border-bottom: 1px solid #2e3d55;
  color: #ccc;
}
.list {
  margin-top: 2px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
  border-bottom: 1px dashed #2e3d55;
}
.rank {
  display: flex;
  align-items: center;
  gap: 8px;
}
.rank-badge {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  text-align: center;
  line-height: 22px;
  font-weight: bold;
  color: #fff;
}
.category {
  font-weight: 500;
}
.rate {
  display: flex;
  align-items: center;
  gap: 4px;
}
.arrow {
  font-size: 12px;
}
.up {
  color: #ff7b00;
}
.down {
  color: #00e676;
}
.count {
  font-weight: 600;
}
</style>
