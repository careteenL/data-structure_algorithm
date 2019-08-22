/**
 * @param {number} capacity
 * 
 * 思路的关键点：
 * 
 * 1、记录可以删除的年龄层级
 * 2、每次新加入的元素放在年龄为1的层级的队列的最后
 * 3、每次更新已存在的元素时，先删除原来所在年龄层级中的此元素，再加入新的层级
 * 4、改变canDeleteAgeGropKey，每当有新加入的元素时，和更新元素时，如果canDeleteAgeGropKey当前层级的队列为空时，需要往上一层，也就是+1
 * 
 * 详细描述的话，语言有点多，大家可以自己看代码理解，注释很详细了。
 */
var LFUCache = function (capacity) {
  this.seqMap = new Map() // 这个map用来存放put进来的元素，结构:{key,value,seq} seq:访问次数（put,get都+1）
  this.ageMap = new Map() // 这个map用来记录每个元素的年龄，年龄越大，被删除的优先级越小
  this.canDeleteAgeGropKey = 1 // 初始可以删除的位置从年龄为1的位置开始
  this.capacity = capacity // 缓存总数
  this.ensurePointAgeMapIsInited = function (item) { // 此函数用来确保将元素加入到新的ageMap层时，新的那一层要已经初始化了。
    if (!this.ageMap.has(item.seq)) {
      this.ageMap.set(item.seq, new Map())
    }
    return this.ageMap.get(item.seq) // 这里返回新开的这一层
  }
  this.addAge = function (item) { // 更新已经存在的元素的年龄层级，或者加入新的元素
    let relativeAge
    if (this.seqMap.has(item.key)) { // 如果已经存在，那么要从原来的层级将该元素删除
      relativeAge = this.ensurePointAgeMapIsInited(item)
      relativeAge.delete(item.key)

      // 删除以后，判断一下当前可删除层级是否已经空了
      if (this.ageMap.get(this.canDeleteAgeGropKey).size == 0) {
        this.canDeleteAgeGropKey++
      }
      item.seq++
    }
    relativeAge = this.ensurePointAgeMapIsInited(item) // 开启新的层级
    relativeAge.set(item.key, item) // 加入到新层级的队列最后
  }
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  var item = this.seqMap.get(key)
  if (item == null) return -1

  // 提升该元素的年龄层级
  this.addAge(item)
  return item.value
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity == 0) return
  var item = this.seqMap.get(key)
  if (item == null) {
    if (this.seqMap.size >= this.capacity) {
      // 当缓存里已满时，要删除一个元素，从canDeleteAgeGroupKey代表的age层级的头元素开始删除
      var relativeAge = this.ageMap.get(this.canDeleteAgeGropKey)
      var firstKey = relativeAge.keys().next().value // 获取当前层级队列第一个元素的key
      relativeAge.delete(firstKey)
      this.seqMap.delete(firstKey)

      if (relativeAge.size == 0) { // 如果当前层级已经被清空，那么下次删除的位置就要更上一层及
        this.canDeleteAgeGropKey++
      }
    }
    item = {
      seq: 1,
      key: key,
      value: value
    }
    this.canDeleteAgeGropKey = 1 // 如果新加入了元素，那么可删除的层级就又回到第一层
  } else {
    item.value = value
  }
  this.addAge(item)
  this.seqMap.set(key, item)
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
