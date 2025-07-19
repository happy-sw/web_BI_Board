<template>
  <table class="warning-table">
    <thead>
      <tr>
        <th>类型</th>
        <th>占比</th>
        <th>预警次数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{ item.type }}</td>
        <td>{{ item.ratio }}</td>
        <td>{{ item.warnings }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const tableData = [
  { type: "信用", ratio: "23%", warnings: 4 },
  { type: "市场", ratio: "15%", warnings: 2 },
  { type: "操作", ratio: "18%", warnings: 3 },
  { type: "政策", ratio: "12%", warnings: 1 },
  { type: "法规", ratio: "10%", warnings: 0 },
  { type: "技术", ratio: "14%", warnings: 2 },
  { type: "其他", ratio: "8%", warnings: 1 },
];
</script>

<style scoped lang="scss">
.warning-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
  background-color: #1c2431;
}

.warning-table th,
.warning-table td {
  border: 1px solid #3a4a63;
  padding: 10px;
}

.warning-table thead {
  background-color: #2b3e53;
  font-weight: bold;
}

.warning-table tbody tr:hover {
  background-color: #2a384e;
}
</style>
