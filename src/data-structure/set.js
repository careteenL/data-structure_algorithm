/**
 * @desc 集合
 */ 
export default class Set {
  constructor () {
    this.items = {}
  }

  /**
   * 某个元素是否在集合中
   * @param {Any} element 
   * @return {Boolean}
   */ 
  has (element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  /**
   * @desc 添加元素
   * @param {Any} element 
   * @return {Boolean} 是否添加成功
   */ 
  add (element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  /**
   * @desc 删除元素
   * @param {Any} element 
   * @return {Boolean} 是否删除成功
   */ 
  delete (element) {
    if (this.has(element)) {
      delete this.items[element]      
      return true
    }
    return false
  }

  /**
   * @desc 获取集合的所有值
   * @return {Array<Any>}
   */ 
  values () {
    return Object.values(this.items)
  }

  /**
   * @desc 获取集合长度
   *      ps:ES6的Set 是作为size属性
   * @return {Number}
   */ 
  size () {
    return Object.keys(this.items).length
  }

  /**
   * @desc 集合是否为空
   * @return {Boolean}
   */ 
  isEmpty () {
    return this.size() === 0
  }

  /**
   * @desc 清空集合
   */ 
  clear () {
    this.items = {}
  }

  /**
   * @desc 打印集合
   * @return {String}
   */ 
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const values = this.values()
    let ret = `${values[0]}`
    for (let i = 1; i < values.length; i++) {
      ret = `${ret},${values[i].toString()}`
    }
    return ret
  }  

  /**
   * @desc 两个集合的并集
   * @param {Set} otherSet 
   * @return {Set}
   */ 
  union (otherSet) {
    const unionSet = new Set()
    this.values.forEach(value => unionSet.add(value))
    otherSet.values.forEach(value => unionSet.add(value))
    return unionSet
  }

  /**
   * @desc 两个集合的交集
   * @param {Set} otherSet 
   * @return {Set}
   */   
  intersection (otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    const ohterValues = otherSet.values()
    let biggerSet = values
    let smallerSet = ohterValues
    // 优化 使得遍历次数尽可能少
    if (ohterValues.length > values.length) {
      biggerSet = ohterValues
      smallerSet = values
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }

  /**
   * @desc 两个集合的差集
   * @param {Set} otherSet 
   * @return {Set}
   */   
  difference (otherSet) {
    const differenceSet = new Set()
    this.values.forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  /**
   * @desc 是否为某个集合的子集
   * @param {Set} otherSet 
   * @return {Boolean}
   */     
  isSubsetOf (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}