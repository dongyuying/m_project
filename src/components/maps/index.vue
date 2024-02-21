<template>
  <div class="map-info">
    <div id="maps"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core'
import 'echarts-gl'
import mapJson from '@/assets/json/city.json'

import { MapChart } from 'echarts/charts';

echarts.use([MapChart]);

const initMap = () => {
  const charts = echarts.init(document.getElementById('maps'))
  echarts.registerMap('myMap', { geoJSON: mapJson })
  let option = {
    series: [
      {
        type: "map",
        name: "mymap",
        roam: false,
        map: "myMap",
        emphasis: {
          label: {
            show: true,
            color: "#fff"
          },
          itemStyle: {
            areaColor: "#0C274B"
          }
        },
        // selectedMode: "multiple", // 可多选区域
        selectedMode: "single",
        itemStyle: {
          normal: {
            areaColor: "#22C8FC",
            shadowColor: "#1D5B75",
            shadowBlur: 2,
            shadowOffsetX: 10,
            shadowOffsetY: 15,
            borderColor: "#BCFCFF",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#77c2c2"
          }
        },
        label: {
          normal: {
            //静态的时候展示样式
            show: false, //是否显示地图省份得名称
            //  formatter: '{c0}\n{b0}',
            textStyle: {
              color: "#BCFCFF", // 区域文字 颜色
              fontSize: 15,
              fontFamily: "Arial"
            }
          },
          emphasis: {
            //动态展示的样式
            color: "#0030da", //选中区域的字体颜色
            show: true,
            textStyle: {
              fontSize: 14,
              fontFamily: "Arial"
            }
          }
        },

        // 选中状态下的多边形和标签样式
        select: {
          itemStyle: {
            areaColor: "#77c2c2" //选中区域的背景色
          },
          label: {
            show: true,
            color: "#ffffff"
          }
        },
        data: [
          {
            name: "全国数据",
            selected: true
          }
        ]
      }
    ]
  }
  charts.setOption(option)
  window.addEventListener("resize", () => {
    charts.resize()
  })
}

onMounted(() => {
  initMap()
})
</script>

<style lang="scss" scoped>
.map-info {
  height: 100%;

  #maps {
    height: 100%;
  }
}
</style>