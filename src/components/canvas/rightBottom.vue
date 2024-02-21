<template>
  <div class="capsule">
    <dv-capsule-chart :config="config"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { CapsuleChart as DvCapsuleChart } from '@kjgl77/datav-vue3'

const config = reactive({
  data: [
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 123
    },
    {
      name: '漯河',
      value: 98
    },
    {
      name: '郑州',
      value: 75
    },
    {
      name: '西峡',
      value: 66
    },
  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '万元',
  labelNum: 8,
})

onMounted(() => {

})
</script>

<style lang="scss" scoped>
.capsule{
  padding: 10px;
  width:100%;
  height: 100%;
  >div{
    width:100%;
    height: 100%;
  }
}
</style>