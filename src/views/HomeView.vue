<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import {
  BorderBox1 as DvBorderBox1,
  BorderBox11 as DvBorderBox11,
  ScrollBoard as DvScrollBoard,
} from '@kjgl77/datav-vue3'
import Maps from '@/components/maps/index.vue'
import LeftBottom from '@/components/canvas/leftBottom.vue'
import RightTop from '@/components/canvas/rightTop.vue'
import RightBottom from '@/components/canvas/rightBottom.vue'
import BottomLeft from '@/components/canvas/bottomLeft.vue'
import BottomRight from '@/components/canvas/bottomRight.vue'
import { useDrawRiseze } from '../utils/drawMixin'
const config = reactive({
  header: ['列1', '列2', '列3'],
  data: [
    ['行1列1', '行1列2', '行1列3'],
    ['行2列1', '行2列2', '行2列3'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '行4列2', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '行6列3'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '行8列3'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3'],
  ],
  index: true,
  columnWidth: [50],
  align: ['center', 'center', 'center', 'center'],
  headerBGC: '',
  oddRowBGC: '',
  evenRowBGC: '',
  carousel: 'single',
  title: '城市人员统计'
})



const timeObj = reactive({
  year: 0,
  month: <string | number>'',
  day: <string | number>'',
  h: <string | number>'',
  m: <string | number>'',
  s: <string | number>''
})

const timer = ref()

const appRef = ref()

const setIntervalTime = () => {
  const date = new Date()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  timeObj.year = date.getFullYear()
  timeObj.month = month > 10 ? month : '0' + month
  timeObj.day = day > 10 ? day : '0' + day
  timeObj.h = h > 10 ? h : '0' + h
  timeObj.m = m > 10 ? m : '0' + m
  timeObj.s = s > 10 ? s : '0' + s
}

onMounted(() => {
  useDrawRiseze(appRef)
  window.addEventListener('resize', () => {
    useDrawRiseze(appRef)
  })
  timer.value = setInterval(() => {
    setIntervalTime()
  }, 1000)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    // useDrawRiseze(appRef)
  })
  clearInterval(timer.value)
})
</script>

<template>
  <div class="data-info">
    <div class="box" ref="appRef">
      <dv-border-box11 title="可视化数据大屏">
        <div class="time-info" v-if="timeObj.year">{{ timeObj.year }}年{{ timeObj.month }}月{{ timeObj.day }}号
          {{ timeObj.h }}:{{ timeObj.m }}:{{ timeObj.s }}</div>
        <div class="time-info" v-else></div>
        <div class="data-content">
          <div class="top-info">
            <div class="left">
              <div class="top">
                <dv-border-box1>
                  <div class="padd10">
                    <div class="padd-title">{{ config.title }}</div>
                    <dv-scroll-board :config="config" style="height: 300px;"></dv-scroll-board>
                  </div>
                </dv-border-box1>
              </div>
              <div class="bottom">
                <dv-border-box1>
                  <div class="padd10">
                    <div class="padd-title">城市人口密集度</div>
                    <left-bottom></left-bottom>
                  </div>
                </dv-border-box1>
              </div>
            </div>
            <div class="center">
              <maps />
            </div>
            <div class="right flex-column">
              <div class="top">
                <dv-border-box1>
                  <right-top />
                </dv-border-box1>
              </div>
              <div class="bottom">
                <dv-border-box1>
                  <right-bottom />
                </dv-border-box1>
              </div>
            </div>
          </div>
          <div class="bottom-info">
            <div class="bottom-left">
              <dv-border-box1>
                <bottom-left />
              </dv-border-box1>
            </div>
            <div class="bottom-right">
              <dv-border-box1>
                <bottom-right />
              </dv-border-box1>
            </div>
          </div>
        </div>
      </dv-border-box11>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$space-width: 6px;
$h30: 30px;

.data-info {
  width: 100vw;
  height: 100vh;

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .padd10 {
    padding: 0 20px 20px;
    height: 100%;

    .padd-title {
      height: $h30;
    }

    .padd-content {
      height: calc(100% - #{$h30})
    }
  }

  .box {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left top;
    width: 1920px;
    height: 1080px;

    :deep(>.dv-border-box-11 >.border-box-content) {
      padding: 40px 20px 20px;
    }

    .data-content {
      height: 1000px;
      overflow: hidden;

      .top-info {
        height: 700px;
        display: flex;

        .left,
        .right {
          width: 30%;
          justify-content: space-between;

          .top,
          .bottom {
            height: 350px;
          }

          .top {
            :deep(.dv-scroll-board) {
              // .header-item {
              //   height: 22px !important;
              //   line-height: 22px !important;
              // }

              // .rows {
              //   height: 90px !important;

              //   .row-item {
              //     height: 24px !important;
              //     line-height: 24px !important;
              //   }
              // }
            }
          }

          .bottom {}
        }

        .center {
          flex: 1;
          width: 100%;
          height: 100%;
          padding: 10px;
        }
      }

      .bottom-info {
        height: 30%;
        display: flex;
        justify-content: space-between;

        >div {
          width: 950px;
        }
      }
    }
  }

  .time-info {
    padding-left: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #cbbfbf;
  }
}
</style>
