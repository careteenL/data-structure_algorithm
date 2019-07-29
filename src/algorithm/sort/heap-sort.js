/**
 * @desc 堆排序
 * @param {Array} array 
 * @return {Array}
 */ 
import { swap } from '../../util'

function heapify (array, index, heapSize) {
  let largest = index
  const left = index * 2 + 1 // 左子节点
  const right = index * 2 + 2 // 右子节点
  // 从父节点和子节点中找出最大值下标
  if (left < heapSize && array[left] > array[largest]) {
    largest = left
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right
  }  
  // 使父节点始终比子节点值大
  if (largest !== index) {
    swap(array, index, largest)
    heapify(array, largest, heapSize)
  }
}

function buildMaxHeap (array) {
  // 从数组的中间项下标往前开始构建大根堆
  for (let i = array.length >> 1; i >= 0; i--) {
    heapify(array, i, array.length)    
  }
  return array
}

export function heapSort (array) {
  let heapSize = array.length
  // 构建大根堆
  buildMaxHeap(array)
  while (heapSize > 1) {
    // 根据大根堆的特性：根元素为最大值，将根元素放到最后一项，作为已排序
    swap(array, 0, --heapSize)
    // 由于上面操作可能导致大根堆的特性丢失，需要使堆成为大根堆
    heapify(array, 0, heapSize)
  }
  return array
}