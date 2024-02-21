<template>
  <div class="bar-info">
    <div id="water"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'

const initBar = () => {
  const charts = echarts.init(document.getElementById('water'))
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      bottom: '2%',
      data: ['Email', 'Union Ads']
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      top: '16%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        itemStyle: {
          color: '#22c8fc'
        },
        areaStyle: {

        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        itemStyle: {
          color: '#1d5b75'
        },
        areaStyle: {

        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
    ]
  }
  charts.setOption(option)
}

onMounted(() => {
  initBar()
})
</script>

<style lang="scss" scoped>
.bar-info {
  width: 100%;
  height: 100%;

  #water {
    width: 100%;
    height: 100%;
  }
}
</style>