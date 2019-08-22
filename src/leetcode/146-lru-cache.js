/**
 * @desc LRU (最近最少使用) 缓存机制
 * @leetcode https://leetcode-cn.com/problems/lru-cache/
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map()
  this.capacity = capacity
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let temp = this.cache.get(key)
  if (temp) {
    this.cache.delete(key)
    this.cache.set(key, temp)
    return temp
  } else {
    return -1
  }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
    this.cache.set(key, value)
  } else if (this.cache.size >= this.capacity) {
    this.cache.delete(this.cache.keys().next().value) // map.keys().next().value具有有序性
  }
  this.cache.set(key, value)
}

// Test
let lru = new LRUCache(2) // Map有序，后面的看做最新添加的
lru.put(1, 1) // Map(1) {1 => 1}
lru.put(2, 2) // Map(2) {1 => 1, 2 => 2}
lru.get(1) // return 1 Map(2) {2 => 2, 1 => 1}
lru.put(3, 3) // Map(2) {1 => 1, 3 => 3}
lru.get(2) // return -1
lru.put(4, 4) // Map(2) {3 => 3, 4 => 4}
lru.get(1) // return -1
lru.get(3) // return 3 Map(2) {4 => 4, 3 => 3}
lru.get(4) // return 4 Map(2) {3 => 3, 4 => 4}
console.log(lru)
