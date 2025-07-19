<template>
  <div>
    <p>主要风险类型统计</p>
    <table>
      <thead>
        <tr>
          <th>类型</th>
          <th>占比</th>
          <th>预警次数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>信用</td>
          <td>25%</td>
          <td>12</td>
        </tr>
        <tr>
          <td>市场</td>
          <td>30%</td>
          <td>15</td>
        </tr>
        <tr>
          <td>操作</td>
          <td>20%</td>
          <td>9</td>
        </tr>
        <tr>
          <td>政策</td>
          <td>15%</td>
          <td>6</td>
        </tr>
        <tr>
          <td>其他</td>
          <td>10%</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px auto;
}
th,
td {
  border: 1px solid #666;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #f2f2f2;
}
</style>
