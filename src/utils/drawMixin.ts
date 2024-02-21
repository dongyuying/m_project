import { ref, onMounted, onBeforeUnmount } from 'vue'

const scale = {
  width: '1',
  height: '1'
}

// 设计稿尺寸(px)
const baseWidth: number = 1920
const baseHeight: number = 1080
// 需保持的比例(默认1.77778)
const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))

const calcRate = (appRef: any) => {
  if (!appRef) return
  // 当前宽高比
  const width = document.body.clientWidth
  const height = document.body.clientHeight
  const currentRate = parseFloat((width / height).toFixed(5))

  if (appRef) {
    if (currentRate > baseProportion) {
      // 表示更宽
      scale.height = (height / baseHeight).toFixed(5)
      appRef.value.style.transform = `scale(${scale.height}) translate(-50%, -50%)`
    } else {
      // 表示更高
      scale.width = (width / baseWidth).toFixed(5)
      appRef.value.style.transform = `scale(${scale.width}) translate(-50%, -50%)`
    }
  }
}



export function useDrawRiseze(appRef: any) {
  calcRate(appRef)
}
