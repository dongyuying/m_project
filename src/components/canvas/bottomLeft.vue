<template>
  <div class="bar-info">
    <div id="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'

const initBar = () => {
  const charts = echarts.init(document.getElementById('bar'))
  let option = {
    legend: {
      bottom: '2%',
      data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '15%',
      top: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Forest',
        type: 'bar',
        label: {
          show: true,
          position: 'top',
        },
        emphasis: {
          focus: 'series',
          blurScope: 'coordinateSystem'
        },
        data: [320, 332, 301, 334, 390]
      },
      {
        name: 'Steppe',
        type: 'bar',
        label: {
          show: true,
          position: 'top',
        },
        emphasis: {
          focus: 'series',
          blurScope: 'coordinateSystem'
        },
        data: [220, 182, 191, 234, 290]
      },
      {
        name: 'Desert',
        type: 'bar',
        label: {
          show: true,
          position: 'top',
        },
        emphasis: {
          focus: 'series',
          blurScope: 'coordinateSystem'
        },
        data: [150, 232, 201, 154, 190]
      },
      {
        name: 'Wetland',
        type: 'bar',
        label: {
          show: true,
          position: 'top',
        },
        emphasis: {
          focus: 'series',
          blurScope: 'coordinateSystem'
        },
        data: [98, 77, 101, 99, 40]
      },
    ],
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

  #bar {
    width: 100%;
    height: 100%;
  }
}
</style>