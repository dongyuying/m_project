<template>
  <div class="pie-info" style="height: 300px">
    <div id="pie"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'

const initPie = () => {
  const pieCharts = echarts.init(document.getElementById('pie'))
  const option = {
    legend: {
      bottom: '2%',
      color: '#fff'
    },
    series: [
      {
        // name: 'Nightingale Chart',
        type: 'pie',
        // height: '140px',
        // left: '20px',
        // right: '20px',
        top: '0',
        // bottom: '20px',
        radius: [50, 90],
        center: ['50%', '40%'],
        roseType: 'area',
        itemStyle: {
          // borderRadius: 5
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
        ]
      }
    ]
  }
  pieCharts.setOption(option)

  window.addEventListener('resize', () => {
    pieCharts.resize()
  })
}

onMounted(() => {
  initPie()
})
</script>

<style lang="scss" scoped>
.pie-info {
  width: 100%;
  height: 100%;

  >div {
    width: 100%;
    height: 100%;
  }
}
</style>