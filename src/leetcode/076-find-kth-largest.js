/**
 * @desc LCR 076. 数组中的第 K 个最大元素
 * @leetcode https://leetcode.cn/problems/xx4gT2/description/
 * @think 构建最小堆，然后删除堆顶元素，直到堆的大小为k，此时堆顶元素就是第k大的元素
 * @应用 react lane 优先级里面会找到最高优先级的任务进行执行，其中值越小，优先级越高，即找到最小的去执行
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }
  // 交换节点位置
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  // 获得父节点
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  // 获得左节点
  getLeftIndex(i) {
    return 2 * i + 1;
  }
  // 获得右节点
  getRightIndex(i) {
    return 2 * i + 2;
  }
  // 上移
  shiftUp(index) {
    if (index === 0) return;

    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  // 下移
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  // 插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  pop() {
    // pop()方法删除数组最后一个元素并返回，赋值给堆顶
    this.heap[0] = this.heap.pop();
    // 对堆顶重新排序
    this.shiftDown(0);
  }
  // 获取堆顶
  peek() {
    return this.heap[0];
  }
  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}

const findKthLargest = (nums, k) => {
  const minHeap = new MinHeap();
  nums.forEach((n) => {
    // 将数组元素依次插入堆中
    minHeap.insert(n);
    // 如果堆大小超过k， 开始裁员， 将堆顶(最小) 的去掉
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  });
  // 返回堆顶，此时就是第k大的元素
  return minHeap.peek();
};
// Test
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
