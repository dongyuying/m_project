<template>
  <div class="capsule">
    <dv-scroll-ranking-board style="height: 320px;" v-if="isMounted" :config="config"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ScrollRankingBoard as DvScrollRankingBoard } from '@kjgl77/datav-vue3'

const isMounted = ref<boolean>(false)

const config = reactive({
  data: [
  {
      name: '周口',
      value: 55,
    },
    {
      name: '南阳',
      value: 120,
    },
    {
      name: '西峡',
      value: 78,
    },
    {
      name: '驻马店',
      value: 66,
    },
    {
      name: '新乡',
      value: 80,
    },
    {
      name: '信阳',
      value: 45,
    },
    {
      name: '漯河',
      value: 29,
    },
  ],
  carousel: '',
  rowNum: 5,
  // waitTime: 30000,
})

onMounted(() => {
  isMounted.value = true
})
</script>

<style lang="scss" scoped>
.capsule {
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  :deep(.dv-scroll-ranking-board) {
    // background-color: #fff;
    width: 100%;
    height: 100%;
    // .row-item{
    //   height: 30px !important;
    //   .inside-column{
    //     margin-bottom: 0;
    //     height: 8px;
    //     padding-bottom: 2px;
    //   }
    // }
  }
}
</style>