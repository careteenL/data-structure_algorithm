/**
 * @desc LFU
 * @leetcode https://leetcode-cn.com/problems/lfu-cache/
 * @think
 *  1. 使用`seqMap`存放每次`put`进来的元素，结构为`{seq, key, value}`。
 *    1.1 `seq`为访问次数，对于已存在的元素，每当`put/get`都会递增；不存在则从`1`做为起点
 *  2. 使用`ageMap`存放每个元素的访问次数（年龄），年龄越大，被删除的优先级越小。
 *    2.1 `ageMap`结构为`{seq: Map}`。seq为年龄，Map下存放当前年龄的所有元素
 *  3. 
 * @time O(1) 借用map的有序存储特性和删除元素为O(1)
 * @param {number} capacity 缓存容量
 */
class LFU {
  constructor(capacity) {
    this.capacity = capacity // 缓存容量
    this.canDeleteAgeKey = 1 // 初识化可删除的年龄层级
    this.seqMap = new Map()
    this.ageMap = new Map()
  }

  // 确保加入的新元素在`ageMap`中存在
  makeAgeMap(item) {
    if (!this.ageMap.has(item.seq)) {
      this.ageMap.set(item.seq, new Map())
    }
    return this.ageMap.get(item.seq)
  }

  // 更新已存在的元素的年龄层级，或者加入新的元素
  addAge(item) {
    let relativeAge = this.makeAgeMap(item) // 找到存在的年龄层级，或者构造新的
    if (this.seqMap.has(item.key)) { // 1.1 若已经存在
      relativeAge.delete(item.key) // 在对应年龄层级中删除这一项
      if (this.ageMap.get(this.canDeleteAgeKey).size === 0) { // 判断可删除层级是否为空，若为空则要递增canDeleteAgeKey
        this.canDeleteAgeKey++
      }
      item.seq++ // 更新年龄层级，因为访问过了
    }
    relativeAge.set(item.key, item) // 加入到年龄层级的最后
  }

  put(key, value) {
    if (this.capacity === 0) return
    let item = this.seqMap.get(key) // 1. 查看需要put的这一项在`seqMap`中是否存在
    if (item) { // 1.1 存在这一项时将value改了
      item.value = value
    } else { // 1.2 不存在时
      if (this.seqMap.size >= this.capacity) { // 1.2.1 缓存容量已满
        let relativeAge = this.ageMap.get(this.canDeleteAgeKey) // 找到当前可删除的年龄层级
        let firstKey = relativeAge.keys().next().value // 找到当前可删除的年龄层级的最后一项，也借用了map遍历时是按存储顺序来的
        relativeAge.delete(firstKey) // 年龄层级中删除
        this.seqMap.delete(firstKey) // seqMap中也删除
        if (relativeAge.size === 0) { // 1.2.1.1 当前层级已经被清空，canDeleteAgeKey递增
          this.canDeleteAgeKey++
        }
      }
      Object.assign(item, { seq: 1 })
      this.canDeleteAgeKey = 1 // 如果新加入了元素，那么可删除的层级就又回到第一层
    }
    this.addAge(item) // 2. 然后再递增当前这一项的年龄
    this.seqMap.set(key, item) // 3. 最后将其放入第一项
  }

  get(key) {
    let item = this.seqMap.get(key)
    if (!item) return -1
    this.addAge(item)
    return item.value
  }
}

// Test
let cache = new LFU(2)

cache.put(1, 1)
cache.put(2, 2)
cache.get(1)       // 返回 1
cache.put(3, 3)    // 去除 key 2
cache.get(2)       // 返回 -1 (未找到key 2)
cache.get(3)       // 返回 3
cache.put(4, 4)    // 去除 key 1
cache.get(1)       // 返回 -1 (未找到 key 1)
cache.get(3)       // 返回 3
cache.get(4)       // 返回 4
